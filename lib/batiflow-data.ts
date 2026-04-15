import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { query, withTransaction } from "@/lib/db";
import type { Chantier, StatutAcompte, StatutSolde } from "@/lib/batiflow-shared";

export const sessionCookieName = "batiflow_session";

const MAGIC_LINK_TTL_MINUTES = 20;
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;

type UserRow = {
  id: string;
  email: string;
};

type MagicLinkRow = {
  email: string;
  expires_at: string;
  id: string;
  redirect_to: string;
  used_at: string | null;
  user_id: string;
};

type ChantierRow = {
  id: string;
  nom_client: string;
  montant_total: string;
  acompte_pct: number;
  date_debut: string;
  date_fin_prevue: string;
  statut_acompte: StatutAcompte;
  statut_solde: StatutSolde;
  created_at: string;
};

type ChantierInput = {
  nomClient: string;
  montantTotal: number;
  acomptePct: number;
  dateDebut: string;
  dateFinPrevue: string;
  statutAcompte: StatutAcompte;
  statutSolde: StatutSolde;
};

function mapChantier(row: ChantierRow): Chantier {
  return {
    id: row.id,
    nomClient: row.nom_client,
    montantTotal: Number(row.montant_total),
    acomptePct: row.acompte_pct,
    dateDebut: row.date_debut,
    dateFinPrevue: row.date_fin_prevue,
    statutAcompte: row.statut_acompte,
    statutSolde: row.statut_solde,
    createdAt: row.created_at,
  };
}

function createOpaqueToken() {
  return randomBytes(32).toString("base64url");
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function normalizePath(pathname: string | null | undefined) {
  if (!pathname?.startsWith("/")) {
    return "/tableau-de-bord";
  }

  return pathname;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
    secure: process.env.NODE_ENV === "production",
  };
}

export async function getSessionToken() {
  const cookieStore = await cookies();
  return cookieStore.get(sessionCookieName)?.value ?? null;
}

export async function upsertUserByEmail(email: string) {
  const normalizedEmail = email.trim().toLowerCase();

  const result = await query<UserRow>(
    `
      insert into users (email)
      values ($1)
      on conflict (email) do update set email = excluded.email
      returning id::text, email
    `,
    [normalizedEmail],
  );

  return result.rows[0];
}

export async function getCurrentUser() {
  const sessionToken = await getSessionToken();

  if (!sessionToken) {
    return null;
  }

  const result = await query<UserRow>(
    `
      select u.id::text, u.email
      from auth_sessions session
      inner join users u on u.id = session.user_id
      where session.session_token_hash = $1
        and session.revoked_at is null
        and session.expires_at > now()
      limit 1
    `,
    [hashToken(sessionToken)],
  );

  return result.rows[0] ?? null;
}

export async function createMagicLink(email: string, redirectTo = "/tableau-de-bord") {
  const user = await upsertUserByEmail(email);
  const token = createOpaqueToken();

  await query(
    `
      delete from auth_magic_links
      where user_id = $1 and used_at is null
    `,
    [user.id],
  );

  await query(
    `
      insert into auth_magic_links (user_id, email, token_hash, redirect_to, expires_at)
      values ($1, $2, $3, $4, now() + make_interval(mins => $5))
    `,
    [user.id, user.email, hashToken(token), normalizePath(redirectTo), MAGIC_LINK_TTL_MINUTES],
  );

  return {
    email: user.email,
    token,
  };
}

export async function consumeMagicLink(token: string) {
  const tokenHash = hashToken(token);
  const lookup = await query<MagicLinkRow>(
    `
      select
        id::text,
        user_id::text,
        email,
        redirect_to,
        expires_at::text,
        used_at::text
      from auth_magic_links
      where token_hash = $1
      limit 1
    `,
    [tokenHash],
  );

  const magicLink = lookup.rows[0];

  if (!magicLink) {
    return { status: "invalid" as const };
  }

  if (magicLink.used_at) {
    return { status: "used" as const };
  }

  if (new Date(magicLink.expires_at).getTime() <= Date.now()) {
    return { status: "expired" as const };
  }

  return withTransaction(async (client) => {
    const consumed = await client.query<Pick<MagicLinkRow, "redirect_to" | "user_id">>(
      `
        update auth_magic_links
        set used_at = now()
        where id = $1
          and used_at is null
          and expires_at > now()
        returning redirect_to, user_id::text
      `,
      [magicLink.id],
    );

    const row = consumed.rows[0];

    if (!row) {
      return { status: "used" as const };
    }

    const sessionToken = createOpaqueToken();

    await client.query(
      `
        insert into auth_sessions (user_id, session_token_hash, expires_at)
        values ($1, $2, now() + make_interval(secs => $3))
      `,
      [row.user_id, hashToken(sessionToken), SESSION_TTL_SECONDS],
    );

    return {
      status: "consumed" as const,
      redirectTo: normalizePath(row.redirect_to),
      sessionToken,
    };
  });
}

export async function revokeCurrentSession() {
  const sessionToken = await getSessionToken();

  if (!sessionToken) {
    return;
  }

  await query(
    `
      update auth_sessions
      set revoked_at = now()
      where session_token_hash = $1
        and revoked_at is null
    `,
    [hashToken(sessionToken)],
  );
}

export async function listChantiersByUser(userId: string) {
  const result = await query<ChantierRow>(
    `
      select
        id::text,
        nom_client,
        montant_total::text,
        acompte_pct,
        to_char(date_debut, 'YYYY-MM-DD') as date_debut,
        to_char(date_fin_prevue, 'YYYY-MM-DD') as date_fin_prevue,
        statut_acompte,
        statut_solde,
        created_at::text as created_at
      from chantiers
      where user_id = $1
      order by date_fin_prevue asc, created_at desc
    `,
    [userId],
  );

  return result.rows.map(mapChantier);
}

export async function getChantierById(userId: string, chantierId: string) {
  const result = await query<ChantierRow>(
    `
      select
        id::text,
        nom_client,
        montant_total::text,
        acompte_pct,
        to_char(date_debut, 'YYYY-MM-DD') as date_debut,
        to_char(date_fin_prevue, 'YYYY-MM-DD') as date_fin_prevue,
        statut_acompte,
        statut_solde,
        created_at::text as created_at
      from chantiers
      where user_id = $1 and id = $2
      limit 1
    `,
    [userId, chantierId],
  );

  return result.rows[0] ? mapChantier(result.rows[0]) : null;
}

export async function createChantier(userId: string, chantier: ChantierInput) {
  await query(
    `
      insert into chantiers (
        user_id,
        nom_client,
        montant_total,
        acompte_pct,
        date_debut,
        date_fin_prevue,
        statut_acompte,
        statut_solde
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
    [
      userId,
      chantier.nomClient,
      chantier.montantTotal,
      chantier.acomptePct,
      chantier.dateDebut,
      chantier.dateFinPrevue,
      chantier.statutAcompte,
      chantier.statutSolde,
    ],
  );
}

export async function updateChantier(
  userId: string,
  chantierId: string,
  chantier: ChantierInput,
) {
  await query(
    `
      update chantiers
      set
        nom_client = $3,
        montant_total = $4,
        acompte_pct = $5,
        date_debut = $6,
        date_fin_prevue = $7,
        statut_acompte = $8,
        statut_solde = $9
      where user_id = $1 and id = $2
    `,
    [
      userId,
      chantierId,
      chantier.nomClient,
      chantier.montantTotal,
      chantier.acomptePct,
      chantier.dateDebut,
      chantier.dateFinPrevue,
      chantier.statutAcompte,
      chantier.statutSolde,
    ],
  );
}
