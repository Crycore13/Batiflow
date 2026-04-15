"use client";

import { useActionState, useState } from "react";
import type { ActionState } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { formatCurrency, type Chantier } from "@/lib/batiflow-shared";

const INITIAL_STATE: ActionState = {};

type ChantierFormProps = {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  submitLabel: string;
  heading: string;
  description: string;
  initialValues?: Chantier;
};

export function ChantierForm({
  action,
  submitLabel,
  heading,
  description,
  initialValues,
}: ChantierFormProps) {
  const [state, formAction] = useActionState(action, INITIAL_STATE);
  const [montantTotal, setMontantTotal] = useState(
    initialValues ? String(initialValues.montantTotal) : "0",
  );
  const [acomptePct, setAcomptePct] = useState(
    initialValues ? String(initialValues.acomptePct) : "30",
  );

  const total = Number(montantTotal || 0);
  const pct = Number(acomptePct || 0);
  const acompteEuro = Number.isFinite(total) && Number.isFinite(pct) ? (total * pct) / 100 : 0;
  const soldeEuro = Number.isFinite(total) ? total - acompteEuro : 0;

  return (
    <section className="space-y-4">
      <article className="card-surface rounded-[2rem] px-5 py-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Fiche chantier
          </p>
          <h1 className="font-[family:var(--font-display)] text-[2.1rem] uppercase leading-none text-[var(--ink)]">
            {heading}
          </h1>
          <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
        </div>
      </article>

      <article className="card-surface rounded-[2rem] px-5 py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.5rem] bg-[var(--paper-soft)] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Acompte</p>
            <p className="mt-2 text-xl font-semibold text-[var(--success)]">
              {formatCurrency(acompteEuro)}
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-[var(--paper-soft)] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Solde</p>
            <p className="mt-2 text-xl font-semibold text-[var(--ink)]">
              {formatCurrency(soldeEuro)}
            </p>
          </div>
        </div>

        <form action={formAction} className="mt-5 space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-[var(--ink)]">Nom du client</span>
            <input
              type="text"
              name="nom_client"
              required
              defaultValue={initialValues?.nomClient ?? ""}
              placeholder="Ex. Maison Dupont"
              className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-[var(--ink)]">Montant total (€)</span>
              <input
                type="number"
                name="montant_total"
                min="0"
                step="0.01"
                required
                value={montantTotal}
                onChange={(event) => setMontantTotal(event.target.value)}
                className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-[var(--ink)]">Acompte (%)</span>
              <input
                type="number"
                name="acompte_pct"
                min="0"
                max="100"
                step="1"
                required
                value={acomptePct}
                onChange={(event) => setAcomptePct(event.target.value)}
                className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-[var(--ink)]">Date de début</span>
              <input
                type="date"
                name="date_debut"
                required
                defaultValue={initialValues?.dateDebut ?? ""}
                className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-[var(--ink)]">Date de fin prévue</span>
              <input
                type="date"
                name="date_fin_prevue"
                required
                defaultValue={initialValues?.dateFinPrevue ?? ""}
                className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
              />
            </label>
          </div>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-[var(--ink)]">Statut acompte</span>
            <select
              name="statut_acompte"
              defaultValue={initialValues?.statutAcompte ?? "non_paye"}
              className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
            >
              <option value="paye">Payé</option>
              <option value="non_paye">Non payé</option>
            </select>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-[var(--ink)]">Statut du solde</span>
            <select
              name="statut_solde"
              defaultValue={initialValues?.statutSolde ?? "en_attente"}
              className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 outline-none focus:border-[var(--accent)]"
            >
              <option value="encaisse">Encaissé</option>
              <option value="en_attente">En attente</option>
              <option value="en_retard">En retard</option>
            </select>
          </label>

          {state.error ? (
            <p className="rounded-[1.2rem] bg-[var(--danger-soft)] px-4 py-3 text-sm text-[var(--danger)]">
              {state.error}
            </p>
          ) : null}

          <SubmitButton label={submitLabel} pendingLabel="Sauvegarde..." className="bg-[var(--accent)]" />
        </form>
      </article>
    </section>
  );
}
