"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/tableau-de-bord", label: "Dashboard", accent: "90J" },
  { href: "/chantiers", label: "Chantiers", accent: "CH" },
  { href: "/chantiers/nouveau", label: "Ajouter", accent: "+" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-[1.8rem] border border-black/5 bg-white/92 p-2 shadow-[0_18px_60px_rgba(23,33,43,0.16)] backdrop-blur">
        {navItems.map((item) => {
          const isActive =
            (item.href === "/tableau-de-bord" && pathname === item.href) ||
            (item.href === "/chantiers" &&
              (pathname === "/chantiers" ||
                (/^\/chantiers\/[^/]+$/.test(pathname) && pathname !== "/chantiers/nouveau"))) ||
            (item.href === "/chantiers/nouveau" && pathname === "/chantiers/nouveau");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`touch-target flex flex-1 items-center justify-center gap-2 rounded-[1.2rem] px-3 py-3 text-sm font-semibold ${
                isActive
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--paper-soft)] text-[var(--ink)]"
              }`}
            >
              <span className="text-xs uppercase tracking-[0.18em]">{item.accent}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
