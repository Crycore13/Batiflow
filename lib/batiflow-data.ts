import { cookies } from "next/headers";
import { query } from "@/lib/db";
import type { Chantier, StatutAcompte, StatutSolde } from "@/lib/batiflow-shared";

export const sessionCookieName = "batiflow_email";

type UserRow = {
  id: string;
  email: string;
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

export async function getSessionEmail() {
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
  const email = await getSessionEmail();

  if (!email) {
    return null;
  }

  const result = await query<UserRow>(
    `
      select id::text, email
      from users
      where email = $1
      limit 1
    `,
    [email],
  );

  return result.rows[0] ?? null;
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
