"use server";

import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getConfiguredAppBaseUrl } from "@/lib/app-url";
import { sendMagicLinkEmail } from "@/lib/email";
import { requireProUser } from "@/lib/access";
import type { StatutAcompte, StatutSolde } from "@/lib/batiflow-shared";
import {
  createChantier,
  createMagicLink,
  revokeCurrentSession,
  sessionCookieName,
  updateChantier,
} from "@/lib/batiflow-data";

export type ActionState = {
  error?: string;
  success?: string;
};

const VALID_ACOMPTE_STATUS: StatutAcompte[] = ["paye", "non_paye"];
const VALID_SOLDE_STATUS: StatutSolde[] = ["encaisse", "en_attente", "en_retard"];

function normalizeEmail(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .trim()
    .toLowerCase();
}

function parseNumber(value: FormDataEntryValue | null) {
  const amount = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(amount) ? amount : NaN;
}

async function getAppBaseUrl() {
  const configuredBaseUrl = getConfiguredAppBaseUrl();

  if (configuredBaseUrl) {
    return configuredBaseUrl;
  }

  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");

  if (host) {
    const protocol =
      headerStore.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");

    return `${protocol}://${host}`;
  }

  return "http://localhost:3000";
}

function parseChantierForm(formData: FormData) {
  const nomClient = String(formData.get("nom_client") ?? "").trim();
  const montantTotal = parseNumber(formData.get("montant_total"));
  const acomptePct = parseNumber(formData.get("acompte_pct"));
  const dateDebut = String(formData.get("date_debut") ?? "");
  const dateFinPrevue = String(formData.get("date_fin_prevue") ?? "");
  const statutAcompte = String(formData.get("statut_acompte") ?? "") as StatutAcompte;
  const statutSolde = String(formData.get("statut_solde") ?? "") as StatutSolde;

  if (!nomClient) {
    return { error: "Veuillez renseigner le nom du client." };
  }

  if (!Number.isFinite(montantTotal) || montantTotal <= 0) {
    return { error: "Le montant total doit être supérieur à 0 €." };
  }

  if (!Number.isFinite(acomptePct) || acomptePct < 0 || acomptePct > 100) {
    return { error: "L’acompte doit être compris entre 0 % et 100 %." };
  }

  if (!dateDebut || !dateFinPrevue) {
    return { error: "Veuillez renseigner la date de début et la date de fin prévue." };
  }

  if (dateFinPrevue < dateDebut) {
    return {
      error: "La date de fin prévue doit être postérieure à la date de début.",
    };
  }

  if (!VALID_ACOMPTE_STATUS.includes(statutAcompte)) {
    return { error: "Le statut d’acompte est invalide." };
  }

  if (!VALID_SOLDE_STATUS.includes(statutSolde)) {
    return { error: "Le statut du solde est invalide." };
  }

  return {
    nomClient,
    montantTotal,
    acomptePct,
    dateDebut,
    dateFinPrevue,
    statutAcompte,
    statutSolde,
  };
}

export async function continuerAvecEmail(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const email = normalizeEmail(formData.get("email"));

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Veuillez saisir une adresse e-mail valide." };
  }

  try {
    const { token } = await createMagicLink(email);
    const baseUrl = await getAppBaseUrl();
    const magicLinkUrl = new URL("/api/auth/magic-link", baseUrl);
    magicLinkUrl.searchParams.set("token", token);

    await sendMagicLinkEmail({
      email,
      magicLinkUrl: magicLinkUrl.toString(),
    });

    return {
      success:
        "Votre lien magique a été envoyé. Ouvrez votre e-mail puis cliquez sur le lien pour accéder au tableau de bord.",
    };
  } catch (error) {
    console.error("Impossible d'envoyer le magic link", error);
    return {
      error:
        "L’envoi du lien magique a échoué. Vérifiez la configuration e-mail puis réessayez.",
    };
  }
}

export async function seDeconnecter() {
  await revokeCurrentSession();
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
  redirect("/connexion");
}

export async function ajouterChantier(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const currentUser = await requireProUser();

  const parsed = parseChantierForm(formData);
  if ("error" in parsed) {
    return parsed;
  }

  await createChantier(currentUser.id, parsed);
  revalidatePath("/tableau-de-bord");
  revalidatePath("/chantiers");
  redirect("/chantiers");
}

export async function modifierChantier(
  chantierId: string,
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const currentUser = await requireProUser();

  const parsed = parseChantierForm(formData);
  if ("error" in parsed) {
    return parsed;
  }

  await updateChantier(currentUser.id, chantierId, parsed);
  revalidatePath("/tableau-de-bord");
  revalidatePath("/chantiers");
  revalidatePath(`/chantiers/${chantierId}`);
  redirect("/chantiers");
}
