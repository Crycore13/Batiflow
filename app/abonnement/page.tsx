import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/access";
import {
  BATIFLOW_PRO_PRICE_LABEL,
  BATIFLOW_PRO_SATISFACTION_DAYS,
  BATIFLOW_PRO_TRIAL_DAYS,
  getBatiFlowProPaymentLink,
} from "@/lib/billing";

const benefits = [
  {
    label: "Tréso 90j",
    title: "Anticipez les périodes sous tension avant qu'elles vous bloquent.",
    description:
      "Visualisez votre trésorerie glissante sur 90 jours pour savoir tout de suite si le mois qui arrive tient ou non.",
  },
  {
    label: "Alertes retard",
    title: "Repérez les paiements à relancer avant de subir le décalage.",
    description:
      "Les retards remontent immédiatement dans l'app pour agir au bon moment, sans tableur ni compta en retard.",
  },
  {
    label: "Saisie mobile",
    title: "Ajoutez un chantier ou un acompte en quelques gestes.",
    description:
      "BatiFlow reste pensé pour le terrain avec une saisie mobile ultra-rapide, lisible même entre deux rendez-vous.",
  },
];

export default async function AbonnementPage() {
  const user = await requireUser();

  if (user.subscriptionStatus === "pro") {
    redirect("/tableau-de-bord");
  }

  const paymentLinkUrl = getBatiFlowProPaymentLink();
  const hasTrial = BATIFLOW_PRO_TRIAL_DAYS > 0;
  const headline = hasTrial
    ? `Activez BatiFlow Pro — ${BATIFLOW_PRO_TRIAL_DAYS} jours gratuits, puis ${BATIFLOW_PRO_PRICE_LABEL}`
    : `Activez BatiFlow Pro — ${BATIFLOW_PRO_PRICE_LABEL}, sans risque pendant ${BATIFLOW_PRO_SATISFACTION_DAYS} jours`;
  const reassuranceItems = hasTrial
    ? ["Annulez à tout moment", "Sans engagement", "Aucune carte nécessaire pour l'essai"]
    : [
        "Annulez à tout moment",
        "Sans engagement",
        `Garantie satisfaction ${BATIFLOW_PRO_SATISFACTION_DAYS} jours`,
      ];
  const primaryCtaLabel = hasTrial
    ? "Commencer mon essai gratuit"
    : "Activer BatiFlow Pro sans risque";

  return (
    <main className="bg-site min-h-screen px-4 py-5 text-[var(--ink)] sm:px-6 sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col gap-4 sm:gap-5">
        <section className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white px-5 py-6 shadow-[0_24px_80px_rgba(23,33,43,0.12)] sm:px-6">
          <div className="hero-glow absolute inset-0" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                BatiFlow Pro
              </p>
              <span className="rounded-full bg-[var(--success-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--success)]">
                {hasTrial
                  ? `${BATIFLOW_PRO_TRIAL_DAYS} jours offerts`
                  : `${BATIFLOW_PRO_SATISFACTION_DAYS} jours sans risque`}
              </span>
            </div>

            <h1 className="mt-3 font-[family:var(--font-display)] text-[2.35rem] uppercase leading-[0.92] tracking-[-0.04em] text-[var(--ink)] sm:text-[2.7rem]">
              {headline}
            </h1>

            <p className="mt-4 max-w-lg text-[1.02rem] leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Votre compte <span className="font-semibold text-[var(--ink)]">{user.email}</span> est
              pret. Debloquez la lecture tresorerie 90 jours, les alertes de retard et la saisie
              mobile rapide pour piloter vos chantiers sans tableur.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {reassuranceItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-[var(--line)] bg-white/90 px-3 py-3 text-sm font-semibold text-[var(--ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card-surface rounded-[2rem] px-5 py-5 sm:px-6">
          <div className="rounded-[1.7rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(47,125,87,0.12),rgba(255,255,255,0.96))] px-4 py-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Offre unique
                </p>
                <h2 className="mt-2 font-[family:var(--font-display)] text-[2rem] uppercase leading-none text-[var(--ink)]">
                  BatiFlow Pro
                </h2>
              </div>

              <div className="text-right">
                <p className="text-[2rem] font-semibold leading-none text-[var(--ink)]">14,90€</p>
                <p className="mt-1 text-sm text-[var(--muted)]">par mois</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--ink)]/80">
              {hasTrial
                ? `Vous commencez avec ${BATIFLOW_PRO_TRIAL_DAYS} jours gratuits, puis l'abonnement passe a ${BATIFLOW_PRO_PRICE_LABEL}.`
                : `Activez votre acces aujourd'hui pour ${BATIFLOW_PRO_PRICE_LABEL}. Si BatiFlow Pro ne vous aide pas a mieux piloter votre tresorerie pendant les ${BATIFLOW_PRO_SATISFACTION_DAYS} premiers jours, vous restez couvert par notre garantie satisfaction.`}
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--success)] shadow-sm">
                    {benefit.label}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold leading-6 text-[var(--ink)]">{benefit.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 rounded-[1.5rem] bg-[var(--warning-soft)] px-4 py-4 text-sm leading-6 text-[var(--ink)]">
            Utilisez la meme adresse e-mail sur Stripe pour que l&apos;activation soit appliquee
            automatiquement a votre compte BatiFlow.
          </p>

          <div className="mt-5 space-y-3">
            <a
              href={paymentLinkUrl}
              className="touch-target inline-flex w-full items-center justify-center rounded-full bg-[var(--success)] px-5 py-4 text-base font-semibold text-white shadow-[0_18px_34px_rgba(47,125,87,0.28)]"
            >
              {primaryCtaLabel}
            </a>

            <Link
              href="/"
              className="touch-target inline-flex w-full items-center justify-center rounded-full border border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              En savoir plus
            </Link>

            <Link
              href="/checkout/success"
              className="touch-target inline-flex w-full items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              J&apos;ai deja paye
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
