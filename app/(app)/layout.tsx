import Link from "next/link";
import { seDeconnecter } from "@/app/actions";
import { MobileNav } from "@/components/mobile-nav";
import { requireProUser } from "@/lib/access";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await requireProUser();

  return (
    <div className="bg-site min-h-screen pb-32 text-[var(--ink)]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/tableau-de-bord" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] border border-[var(--line)] bg-[var(--paper-soft)]">
              <div className="h-6 w-6 rounded-xl bg-[linear-gradient(135deg,#d55b2d_0%,#f0b182_100%)]" />
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                BTP mobile
              </p>
              <p className="font-[family:var(--font-display)] text-[1.45rem] uppercase leading-none">
                BatiFlow
              </p>
            </div>
          </Link>

          <form action={seDeconnecter}>
            <button
              type="submit"
              className="touch-target rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-2 text-sm font-semibold text-[var(--ink)]"
            >
              {user.email}
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 px-4 py-5 sm:px-6">
        {children}
      </main>

      <MobileNav />
    </div>
  );
}
