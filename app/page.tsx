import type { Metadata } from "next";
import Link from "next/link";

const message1 =
  "47 % des factures BTP sont payées avec plus de 30 jours de retard. BatiFlow vous permet de visualiser votre trésorerie sur 90 jours et d'être alerté avant d'être dans le rouge — depuis votre téléphone.";

const message2 =
  "1 faillite sur 4 en France concerne le bâtiment, souvent faute de visibilité sur la trésorerie. BatiFlow est conçu pour les artisans indépendants : saisissez vos chantiers, suivez vos factures, sachez exactement si vous serez dans le vert le mois prochain.";

const message3 =
  "BatiFlow centralise vos chantiers et vos paiements pour vous donner une vision claire à 90 jours, accessible en 2 minutes depuis votre téléphone.";

const painPoints = [
  {
    kicker: "Paiements",
    title: "Des factures envoyées, mais encaissées trop tard",
    description:
      "Vous avancez les matériaux, les charges tombent, et les règlements s'étirent sans visibilité fiable.",
  },
  {
    kicker: "Prévision",
    title: "Un mois suivant difficile à anticiper",
    description:
      "Entre acomptes, soldes restants et échéances, il devient vite compliqué de savoir si la trésorerie tiendra.",
  },
  {
    kicker: "Pilotage",
    title: "Les alertes arrivent souvent trop tard",
    description:
      "Quand le retard devient visible en comptabilité, la tension de trésorerie est déjà installée sur le chantier.",
  },
];

const solutionBlocks = [
  {
    value: "90 j",
    title: "Projection lisible",
    description:
      "Vos entrées et sorties à venir sont regroupées dans une lecture simple, pensée pour un écran mobile.",
  },
  {
    value: "3 vues",
    title: "Chantiers, paiements, alertes",
    description:
      "Vous suivez au même endroit les acomptes encaissés, les soldes attendus et les retards à relancer.",
  },
  {
    value: "0 friction",
    title: "Accès rapide",
    description:
      "L'outil reste léger, clair et utilisable sans apprentissage lourd pour garder le focus sur vos chantiers.",
  },
];

const steps = [
  {
    index: "01",
    title: "Ajoutez vos chantiers en cours",
    description:
      "Vous renseignez les montants, les acomptes déjà encaissés et les échéances attendues.",
  },
  {
    index: "02",
    title: "Repérez les périodes sous tension",
    description:
      "BatiFlow fait ressortir les mois où un retard de paiement peut fragiliser votre trésorerie.",
  },
  {
    index: "03",
    title: "Agissez avant d'être dans le rouge",
    description:
      "Vous priorisez vos relances et vos décisions avec une vision à 90 jours toujours à portée de main.",
  },
];

export const metadata: Metadata = {
  title: "BatiFlow | Trésorerie BTP claire sur 90 jours",
  description: message3,
};

function TreasuryPreview() {
  return (
    <div className="card-surface relative overflow-hidden rounded-[2rem] p-4">
      <div className="hero-glow absolute inset-0 opacity-80" />
      <div className="paper-grid relative rounded-[1.6rem] border border-[var(--line)] bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Trésorerie
            </p>
            <h3 className="mt-2 font-[family:var(--font-display)] text-[1.9rem] uppercase leading-none text-[var(--ink)]">
              Horizon 90 jours
            </h3>
          </div>
          <div className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--ink)]">
            Mobile
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-[1.4rem] bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              <span>Avril</span>
              <span>Stable</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[var(--paper-soft)]">
              <div className="h-full w-[76%] rounded-full bg-[var(--success)]" />
            </div>
          </div>

          <div className="rounded-[1.4rem] bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              <span>Mai</span>
              <span>Vigilance</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[var(--paper-soft)]">
              <div className="h-full w-[54%] rounded-full bg-[var(--warning)]" />
            </div>
          </div>

          <div className="rounded-[1.4rem] bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              <span>Juin</span>
              <span>Alerte</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[var(--paper-soft)]">
              <div className="h-full w-[34%] rounded-full bg-[var(--danger)]" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-[1.4rem] border border-[var(--line)] bg-white p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Solde prévu
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">6 430 EUR</p>
          </div>
          <div className="rounded-[1.4rem] border border-[var(--line)] bg-white p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Retards
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">3 factures</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentsPreview() {
  return (
    <div className="card-surface rounded-[2rem] p-4">
      <div className="rounded-[1.6rem] border border-[var(--line)] bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Chantiers
            </p>
            <h3 className="mt-2 font-[family:var(--font-display)] text-[1.8rem] uppercase leading-none text-[var(--ink)]">
              Paiements à suivre
            </h3>
          </div>
          <div className="rounded-full bg-[var(--paper-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-dark)]">
            3 actifs
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {[
            ["Villa Martin", "Facture finale envoyée", "4 200 EUR", "Attendu"],
            ["Bureau Atlas", "Acompte encaissé", "2 600 EUR", "En caisse"],
            ["Maison Leroy", "Relance J+12", "1 180 EUR", "Retard"],
          ].map(([client, phase, amount, status]) => (
            <article
              key={client}
              className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] p-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{client}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{phase}</p>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {status}
                </span>
              </div>
              <div className="mt-3 border-t border-[var(--line)] pt-3 text-sm font-semibold text-[var(--ink)]">
                {amount}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-site min-h-screen text-[var(--ink)]">
      <header className="border-b border-black/5 bg-white/86 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--paper-soft)]">
            <div className="h-6 w-6 rounded-lg bg-[linear-gradient(135deg,#d55b2d_0%,#f0b182_100%)]" />
          </div>
          <div>
            <p className="font-[family:var(--font-display)] text-xl uppercase tracking-[0.12em]">
              BatiFlow
            </p>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Trésorerie artisan BTP
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section
          id="probleme"
          className="card-surface relative overflow-hidden rounded-[2rem] px-5 py-6 sm:px-6 sm:py-8"
        >
          <div className="hero-glow absolute inset-0" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Le problème
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Mobile-first
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
              <div>
                <h1 className="max-w-3xl font-[family:var(--font-display)] text-[2.8rem] uppercase leading-[0.92] tracking-[-0.05em] text-[var(--ink)] sm:text-[4.1rem]">
                  Votre trésorerie chantier ne devrait pas se piloter à l&apos;aveugle.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                  {message1}
                </p>

                <Link
                  href="/connexion"
                  className="touch-target mt-7 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--ink)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_20px_45px_rgba(23,33,43,0.18)] hover:-translate-y-0.5"
                >
                  Créer mon compte gratuitement
                </Link>
              </div>

              <div className="grid gap-3">
                {painPoints.map((point) => (
                  <article
                    key={point.title}
                    className="rounded-[1.6rem] border border-[var(--line)] bg-white/94 p-4 shadow-[0_16px_35px_rgba(23,33,43,0.08)]"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                      {point.kicker}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {point.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="solution"
          className="card-surface overflow-hidden rounded-[2rem] px-5 py-6 sm:px-6 sm:py-8"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                La solution
              </div>

              <h2 className="mt-5 font-[family:var(--font-display)] text-[2.2rem] uppercase leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-[3rem]">
                Une lecture claire pour décider plus tôt.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                {message2}
              </p>

              <div className="mt-6 grid gap-3">
                {solutionBlocks.map((block) => (
                  <article
                    key={block.title}
                    className="rounded-[1.6rem] border border-[var(--line)] bg-white p-4"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[var(--ink)]">{block.title}</h3>
                      <span className="font-[family:var(--font-display)] text-2xl uppercase text-[var(--accent-dark)]">
                        {block.value}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {block.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <TreasuryPreview />
              <PaymentsPreview />
            </div>
          </div>
        </section>

        <section
          id="comment-ca-marche"
          className="card-surface rounded-[2rem] px-5 py-6 sm:px-6 sm:py-8"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Comment ça marche
              </div>
              <h2 className="mt-5 font-[family:var(--font-display)] text-[2.2rem] uppercase leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-[3rem]">
                Trois étapes, sans détour.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                {message3}
              </p>
            </div>

            <div className="grid gap-3">
              {steps.map((step) => (
                <article
                  key={step.index}
                  className="rounded-[1.7rem] border border-[var(--line)] bg-white p-4 sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--paper-soft)] font-[family:var(--font-display)] text-xl text-[var(--accent-dark)]">
                      {step.index}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--ink)]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

              <div className="rounded-[1.7rem] border border-dashed border-[var(--line)] bg-[var(--paper-soft)] p-4 text-sm leading-6 text-[var(--muted)]">
                Vous gardez une vue claire de vos prochains encaissements, sans changer
                vos habitudes de terrain ni complexifier votre suivi.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
