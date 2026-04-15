const message1 =
  "47 % des factures BTP sont payées avec plus de 30 jours de retard. BatiFlow vous permet de visualiser votre trésorerie sur 90 jours et d'être alerté avant d'être dans le rouge — depuis votre téléphone.";

const message2 =
  "1 faillite sur 4 en France concerne le bâtiment, souvent faute de visibilité sur la trésorerie. BatiFlow est conçu pour les artisans indépendants : saisissez vos chantiers, suivez vos factures, sachez exactement si vous serez dans le vert le mois prochain.";

const message3 =
  "BatiFlow centralise vos chantiers et vos paiements pour vous donner une vision claire à 90 jours, accessible en 2 minutes depuis votre téléphone.";

const metrics = [
  {
    value: "47 %",
    title: "factures en retard",
    description: "Des paiements qui décalent vos achats, vos charges et votre marge.",
  },
  {
    value: "90 j",
    title: "de visibilité",
    description: "Une lecture immédiate de votre trésorerie à venir, directement sur mobile.",
  },
  {
    value: "1 sur 4",
    title: "faillites du bâtiment",
    description: "Un marché où piloter à vue finit trop souvent par coûter cher.",
  },
];

const features = [
  {
    code: "90J",
    title: "Trésorerie 90 jours",
    description:
      "Visualisez vos entrées, vos sorties et votre niveau de sécurité avant la fin du mois.",
  },
  {
    code: "CH",
    title: "Suivi chantiers",
    description:
      "Regroupez vos chantiers, vos acomptes et vos soldes dans une seule vue mobile.",
  },
  {
    code: "AR",
    title: "Alertes retard",
    description:
      "Repérez tout de suite les paiements en retard et les périodes où votre solde se tend.",
  },
  {
    code: "ML",
    title: "Magic link",
    description:
      "Connectez-vous sans mot de passe, avec un lien sécurisé reçu sur votre e-mail.",
  },
];

const chantierRows = [
  {
    client: "Villa Martin",
    phase: "Facture finale envoyée",
    amount: "4 200 EUR",
    status: "Paiement attendu",
  },
  {
    client: "Bureau Atlas",
    phase: "Acompte encaissé",
    amount: "2 600 EUR",
    status: "En caisse",
  },
  {
    client: "Maison Leroy",
    phase: "Relance J+12",
    amount: "1 180 EUR",
    status: "Retard à suivre",
  },
];

const onboardingSteps = [
  "Renseignez vos chantiers et vos encaissements à venir.",
  "Recevez vos alertes de retard directement sur mobile.",
  "Consultez votre horizon à 90 jours sans mot de passe.",
];

function TreasuryPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[20rem] rounded-[2rem] border border-[var(--line)] bg-white p-3 shadow-[0_30px_80px_rgba(23,33,43,0.12)]">
      <div className="rounded-[1.65rem] border border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f9_100%)] p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Vue trésorerie
            </p>
            <h3 className="font-[family:var(--font-display)] text-[1.55rem] uppercase leading-none text-[var(--ink)]">
              90 jours
            </h3>
          </div>
          <div className="rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
            Solde prévu
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--paper-soft)] p-4">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Juin
              </p>
              <p className="text-3xl font-semibold text-[var(--ink)]">6 430 EUR</p>
            </div>
            <div className="rounded-full bg-[#e8f3eb] px-3 py-1 text-xs font-semibold text-[#22623e]">
              + 820 EUR
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                <span>Avril</span>
                <span>Solide</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-[#edf1f4]">
                <div className="w-[72%] rounded-full bg-[#326f59]" />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                <span>Mai</span>
                <span>Vigilance</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-[#edf1f4]">
                <div className="w-[58%] rounded-full bg-[#d55b2d]" />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                <span>Juin</span>
                <span>Alerte</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-[#edf1f4]">
                <div className="w-[34%] rounded-full bg-[#b84b38]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Encaissements</p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">12 400 EUR</p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Retards</p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">3 factures</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChantiersPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[18rem] rounded-[2rem] border border-[var(--line)] bg-white p-3 shadow-[0_28px_70px_rgba(23,33,43,0.12)]">
      <div className="rounded-[1.65rem] border border-black/5 bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Chantiers
            </p>
            <h3 className="font-[family:var(--font-display)] text-[1.45rem] uppercase leading-none text-[var(--ink)]">
              Paiements
            </h3>
          </div>
          <div className="rounded-full bg-[#f3ede9] px-3 py-1 text-xs font-semibold text-[var(--accent-dark)]">
            3 actifs
          </div>
        </div>

        <div className="space-y-3">
          {chantierRows.map((row) => (
            <article
              key={row.client}
              className="rounded-2xl border border-[var(--line)] bg-[var(--paper-soft)] p-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{row.client}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{row.phase}</p>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {row.status}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--line)] pt-3">
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  Montant
                </span>
                <span className="text-sm font-semibold text-[var(--ink)]">{row.amount}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-dashed border-[var(--line)] p-3 text-sm text-[var(--muted)]">
          Magic link actif : connexion sans mot de passe sur ce téléphone.
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-site min-h-screen text-[var(--ink)]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/88 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
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

          <a
            href="#creation-compte"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--ink)] px-5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Créer mon compte gratuitement
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="hero-glow absolute inset-x-0 top-0 h-[32rem]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:px-8 lg:pb-24 lg:pt-16">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] shadow-sm">
                Pensé mobile
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Sans mot de passe
              </div>

              <h1 className="mt-6 max-w-3xl font-[family:var(--font-display)] text-[3.1rem] uppercase leading-[0.92] tracking-[-0.04em] text-[var(--ink)] sm:text-[4.4rem]">
                La trésorerie chantier, enfin lisible depuis votre téléphone.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                {message1}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#creation-compte"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[var(--accent)] px-6 text-center text-base font-semibold text-white shadow-[0_18px_35px_rgba(213,91,45,0.24)] transition hover:-translate-y-0.5"
                >
                  Créer mon compte gratuitement
                </a>
                <a
                  href="#produit"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[var(--line)] bg-white px-6 text-center text-base font-semibold text-[var(--ink)] transition hover:-translate-y-0.5"
                >
                  Voir le produit
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-2">
                  Vue 90 jours
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-2">
                  Suivi chantiers
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-2">
                  Alertes retard
                </span>
              </div>
            </div>

            <div id="produit" className="relative z-10">
              <div className="paper-grid relative rounded-[2rem] border border-[var(--line)] bg-white p-5 shadow-[0_24px_80px_rgba(23,33,43,0.08)] sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Aperçu produit
                    </p>
                    <p className="mt-1 font-[family:var(--font-display)] text-2xl uppercase tracking-[0.04em]">
                      Trésorerie + chantiers
                    </p>
                  </div>
                  <div className="rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Application mobile
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
                  <TreasuryPhone />
                  <div className="lg:translate-y-10">
                    <ChantiersPhone />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.title}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(23,33,43,0.05)]"
              >
                <p className="font-[family:var(--font-display)] text-4xl uppercase tracking-[-0.03em] text-[var(--ink)]">
                  {metric.value}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-[var(--ink)]">{metric.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8 lg:py-16">
          <article className="rounded-[2rem] border border-[var(--line)] bg-[var(--ink)] p-7 text-white shadow-[0_24px_70px_rgba(23,33,43,0.16)]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              Réalité terrain
            </p>
            <p className="mt-4 text-lg leading-8 text-white/84">{message2}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2">
                Artisans indépendants
              </span>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2">
                Lecture immédiate
              </span>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2">
                Décision plus sereine
              </span>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(23,33,43,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--paper-soft)] font-[family:var(--font-display)] text-xl uppercase text-[var(--accent)]">
                  {feature.code}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[var(--ink)]">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="creation-compte" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_20px_70px_rgba(23,33,43,0.06)] lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:p-8">
            <div className="rounded-[1.75rem] bg-[var(--paper-soft)] p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Message clé
              </p>
              <p className="mt-4 text-lg leading-8 text-[var(--ink)]">{message3}</p>

              <div className="mt-8 space-y-3">
                {onboardingSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-white bg-white p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--ink)] font-[family:var(--font-display)] text-lg text-white">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-6 text-[var(--muted)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-dashed border-[var(--line)] p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Accès simple
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[2.35rem] uppercase leading-none tracking-[-0.03em] text-[var(--ink)]">
                Démarrez sans mot de passe.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                BatiFlow privilégie un démarrage direct sur mobile, avec de grands points de contact et une connexion par magic link.
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-[var(--ink)] p-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                      Bouton principal
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Votre accès démarre depuis le bouton principal.
                    </p>
                  </div>
                  <div className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/72">
                    Mobile
                  </div>
                </div>

                <a
                  href="#top"
                  className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-[var(--accent)] px-6 text-center text-base font-semibold text-white shadow-[0_18px_35px_rgba(213,91,45,0.2)] transition hover:-translate-y-0.5"
                >
                  Créer mon compte gratuitement
                </a>

                <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/72">
                  <span className="rounded-full border border-white/10 px-3 py-2">
                    Connexion sécurisée
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-2">
                    Sans mot de passe
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-2">
                    Utilisable sur chantier
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/6 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
          <div>
            <p className="font-[family:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-[var(--ink)]">
              BatiFlow
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Outil de pilotage de trésorerie pour artisans du bâtiment, pensé pour une utilisation simple sur téléphone.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-[var(--muted)] sm:justify-end">
            <p>Mentions légales : BatiFlow, produit édité par PageHush.</p>
            <p>Hébergement : plateforme NanoCorp.</p>
            <p>Objet : démonstration commerciale d’un logiciel de pilotage de trésorerie.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
