import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/access";
import { BATIFLOW_PRO_PRICE_LABEL, getBatiFlowProPaymentLink } from "@/lib/billing";

const includedFeatures = [
  "Projection de trésorerie glissante sur 90 jours",
  "Accès complet au tableau de bord et aux chantiers",
  "Alertes de retard visibles dès l’ouverture de l’app",
];

export default async function AbonnementPage() {
  const user = await requireUser();

  if (user.subscriptionStatus === "pro") {
    redirect("/tableau-de-bord");
  }

  const paymentLinkUrl = getBatiFlowProPaymentLink();

  return (
    <main className="bg-site min-h-screen px-4 py-6 text-[var(--ink)] sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-xl flex-col gap-5">
        <section className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white px-5 py-6 shadow-[0_24px_80px_rgba(23,33,43,0.12)]">
          <div className="hero-glow absolute inset-0" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Activez BatiFlow Pro
            </p>
            <h1 className="mt-3 font-[family:var(--font-display)] text-[2.4rem] uppercase leading-[0.9] text-[var(--ink)]">
              Débloquez tout le tableau de bord.
            </h1>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Votre compte <span className="font-semibold text-[var(--ink)]">{user.email}</span> est
              bien connecté. L’abonnement Pro active l’accès complet à vos prévisions,
              vos chantiers et vos alertes.
            </p>
          </div>
        </section>

        <section className="card-surface rounded-[2rem] px-5 py-5">
          <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Offre unique
              </p>
              <h2 className="mt-2 font-[family:var(--font-display)] text-[2rem] uppercase leading-none text-[var(--ink)]">
                BatiFlow Pro
              </h2>
            </div>

            <div className="text-right">
              <p className="text-[2rem] font-semibold leading-none text-[var(--ink)]">
                14,90€
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">par mois</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {includedFeatures.map((feature) => (
              <article
                key={feature}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-4 text-sm text-[var(--ink)]"
              >
                {feature}
              </article>
            ))}
          </div>

          <p className="mt-5 rounded-[1.5rem] bg-[var(--warning-soft)] px-4 py-4 text-sm leading-6 text-[var(--ink)]">
            Utilisez la même adresse e-mail sur Stripe pour que l’activation soit appliquée
            automatiquement à votre compte BatiFlow.
          </p>

          <div className="mt-5 space-y-3">
            <a
              href={paymentLinkUrl}
              className="touch-target inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(213,91,45,0.28)]"
            >
              S&apos;abonner à {BATIFLOW_PRO_PRICE_LABEL}
            </a>

            <Link
              href="/checkout/success"
              className="touch-target inline-flex w-full items-center justify-center rounded-full border border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              J’ai déjà payé
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
