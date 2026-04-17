import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/access";

export default async function CheckoutSuccessPage() {
  const user = await requireUser();

  if (user.subscriptionStatus === "pro") {
    redirect("/tableau-de-bord");
  }

  return (
    <main className="bg-site min-h-screen px-4 py-6 text-[var(--ink)] sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-xl flex-col gap-5">
        <section className="card-surface rounded-[2rem] px-5 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Paiement reçu
          </p>
          <h1 className="mt-3 font-[family:var(--font-display)] text-[2.2rem] uppercase leading-[0.92] text-[var(--ink)]">
            Activation en cours.
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            Si le webhook NanoCorp a déjà traité le paiement pour{" "}
            <span className="font-semibold text-[var(--ink)]">{user.email}</span>, votre accès
            Pro sera actif automatiquement dans quelques secondes.
          </p>
        </section>

        <section className="card-surface rounded-[2rem] px-5 py-5">
          <div className="space-y-3 text-sm leading-6 text-[var(--muted)]">
            <p>Retournez sur la page d’abonnement si votre accès n’est pas encore débloqué.</p>
            <p>
              Vérifiez aussi que l’adresse e-mail utilisée dans Stripe correspond bien à votre
              compte BatiFlow.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/abonnement"
              className="touch-target inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              Retour à l’abonnement
            </Link>

            <Link
              href="/tableau-de-bord"
              className="touch-target inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(213,91,45,0.28)]"
            >
              Réessayer l’accès au dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
