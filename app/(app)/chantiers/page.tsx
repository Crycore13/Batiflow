import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser, listChantiersByUser } from "@/lib/batiflow-data";
import {
  formatCurrency,
  getAcompteAmount,
  getChantierStatus,
  getSoldeAmount,
  statusLabelMap,
  statusToneMap,
} from "@/lib/batiflow-shared";

export default async function ChantiersPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/connexion");
  }

  const chantiers = await listChantiersByUser(user.id);

  return (
    <>
      <section className="card-surface rounded-[2rem] px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Liste des chantiers
            </p>
            <h1 className="font-[family:var(--font-display)] text-[2.1rem] uppercase leading-none">
              Vos dossiers en cours
            </h1>
            <p className="text-sm leading-6 text-[var(--muted)]">
              Retrouvez vos montants, vos statuts de paiement et un accès rapide à
              l’édition.
            </p>
          </div>

          <Link
            href="/chantiers/nouveau"
            className="touch-target inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(213,91,45,0.28)]"
          >
            Ajouter
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        {chantiers.length === 0 ? (
          <article className="card-surface rounded-[1.8rem] px-5 py-6 text-sm leading-6 text-[var(--muted)]">
            Aucun chantier pour le moment. Ajoutez votre premier dossier pour activer
            le tableau de bord et la projection à 90 jours.
          </article>
        ) : (
          chantiers.map((chantier) => {
            const status = getChantierStatus(chantier);
            const tone = statusToneMap[status];

            return (
              <article key={chantier.id} className="card-surface rounded-[1.8rem] px-5 py-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-[var(--ink)]">{chantier.nomClient}</p>
                    <p className="text-sm text-[var(--muted)]">
                      Du {chantier.dateDebut} au {chantier.dateFinPrevue}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${tone.badge}`}
                  >
                    {statusLabelMap[status]}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-3 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      Montant
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                      {formatCurrency(chantier.montantTotal)}
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-3 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      Solde restant
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                      {formatCurrency(getSoldeAmount(chantier))}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4 text-sm">
                  <div className="space-y-1 text-[var(--muted)]">
                    <p>Acompte: {formatCurrency(getAcompteAmount(chantier))}</p>
                    <p>Statut solde: {statusLabelMap[status]}</p>
                  </div>

                  <Link
                    href={`/chantiers/${chantier.id}`}
                    className="touch-target inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-4 py-3 font-semibold text-[var(--ink)]"
                  >
                    Modifier
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </section>
    </>
  );
}
