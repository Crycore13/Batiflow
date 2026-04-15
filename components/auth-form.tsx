"use client";

import { useActionState } from "react";
import { continuerAvecEmail, type ActionState } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";

const INITIAL_STATE: ActionState = {};

export function AuthForm() {
  const [state, action] = useActionState(continuerAvecEmail, INITIAL_STATE);

  return (
    <section className="card-surface rounded-[2rem] px-5 py-5">
      <div className="mb-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Connexion e-mail
        </p>
        <h2 className="font-[family:var(--font-display)] text-[1.9rem] uppercase leading-none text-[var(--ink)]">
          Recevez votre lien magique.
        </h2>
      </div>

      <form action={action} className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-[var(--ink)]">Adresse e-mail</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="vous@entreprise.fr"
            className="touch-target w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 text-base text-[var(--ink)] outline-none ring-0 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />
        </label>

        {state.error ? (
          <p className="rounded-[1.2rem] bg-[var(--danger-soft)] px-4 py-3 text-sm text-[var(--danger)]">
            {state.error}
          </p>
        ) : null}

        {state.success ? (
          <p className="rounded-[1.2rem] bg-[color:rgba(42,122,70,0.12)] px-4 py-3 text-sm text-[var(--success)]">
            {state.success}
          </p>
        ) : null}

        <SubmitButton
          label="Envoyer mon lien magique"
          pendingLabel="Envoi du lien..."
          className="bg-[var(--accent)]"
        />
      </form>
    </section>
  );
}
