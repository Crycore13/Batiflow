import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { getCurrentUser } from "@/lib/batiflow-data";

const benefits = [
  "Vue trésorerie 90 jours lisible sur mobile",
  "Alertes visibles quand un solde passe en retard",
  "Suivi chantier simple sans mot de passe",
];

type ConnexionPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ConnexionPage({ searchParams }: ConnexionPageProps) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/tableau-de-bord");
  }

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const magicLinkState =
    typeof resolvedSearchParams?.magicLink === "string"
      ? resolvedSearchParams.magicLink
      : undefined;
  const magicLinkNotice =
    magicLinkState === "expired"
      ? "Ce lien magique a expiré. Demandez-en un nouveau."
      : magicLinkState === "used"
        ? "Ce lien magique a déjà été utilisé. Demandez-en un nouveau."
        : magicLinkState === "missing"
          ? "Le lien de connexion est incomplet."
          : magicLinkState === "invalid"
            ? "Ce lien magique est invalide."
            : null;

  return (
    <main className="bg-site min-h-screen px-4 py-6 text-[var(--ink)] sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-xl flex-col justify-between gap-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white px-5 py-6 shadow-[0_24px_80px_rgba(23,33,43,0.12)]">
          <div className="hero-glow absolute inset-0" />
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-2 text-sm font-semibold text-[var(--ink)]">
              <span className="flex h-3 w-3 rounded-full bg-[var(--accent)]" />
              BatiFlow
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Pilotage chantier
                </p>
                <h1 className="mt-2 font-[family:var(--font-display)] text-[2.7rem] uppercase leading-[0.9] text-[var(--ink)]">
                  Votre tréso en 90 jours, sans friction.
                </h1>
              </div>

              <p className="max-w-md text-base leading-7 text-[var(--muted)]">
                Saisissez votre e-mail pour retrouver votre espace mobile, vos chantiers
                et vos alertes de retard en quelques secondes.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          {magicLinkNotice ? (
            <p className="rounded-[1.6rem] bg-[var(--danger-soft)] px-4 py-4 text-sm text-[var(--danger)]">
              {magicLinkNotice}
            </p>
          ) : null}

          <AuthForm />

          <div className="grid gap-3">
            {benefits.map((benefit) => (
              <article
                key={benefit}
                className="card-surface rounded-[1.6rem] px-4 py-4 text-sm text-[var(--ink)]"
              >
                {benefit}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
