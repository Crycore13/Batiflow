"use client";

import Link from "next/link";
import {
  buildDashboardSnapshot,
  formatCurrency,
  statusLabelMap,
  statusToneMap,
  type Chantier,
} from "@/lib/batiflow-shared";

type DashboardViewProps = {
  chantiers: Chantier[];
};

export function DashboardView({ chantiers }: DashboardViewProps) {
  const snapshot = buildDashboardSnapshot(chantiers);
  const maxTotal = Math.max(...snapshot.timeline.map((day) => day.total), 1);
  const projectionPositive = snapshot.forecastBalance >= 0;

  return (
    <>
      {snapshot.overdueAlerts.length > 0 ? (
        <section className="rounded-[1.7rem] border border-[var(--danger)] bg-[var(--danger-soft)] px-4 py-4 text-[var(--danger)] shadow-[0_20px_50px_rgba(186,75,55,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Alerte retard</p>
          <p className="mt-2 text-base font-semibold">
            {snapshot.overdueAlerts.length} facture
            {snapshot.overdueAlerts.length > 1 ? "s" : ""} en retard demandent une
            action.
          </p>
        </section>
      ) : null}

      <section className="card-surface rounded-[2rem] px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Tableau de bord
            </p>
            <h1 className="font-[family:var(--font-display)] text-[2.2rem] uppercase leading-none text-[var(--ink)]">
              Vision 90 jours
            </h1>
          </div>

          <Link
            href="/chantiers/nouveau"
            className="touch-target inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(213,91,45,0.28)]"
          >
            Nouveau
          </Link>
        </div>

        <div className="mt-5 rounded-[1.8rem] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f1f4f6_100%)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Solde prévisionnel
          </p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <p
                className={`text-[2.35rem] font-semibold leading-none ${
                  projectionPositive ? "text-[var(--success)]" : "text-[var(--danger)]"
                }`}
              >
                {formatCurrency(snapshot.forecastBalance)}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Projection calculée sur vos acomptes et soldes à venir.
              </p>
            </div>

            <div className="rounded-full border border-[var(--line)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {chantiers.length} chantier{chantiers.length > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <article className="rounded-[1.5rem] bg-[var(--success-soft)] px-3 py-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--success)]">
              Encaissé
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
              {formatCurrency(snapshot.paidThisMonth)}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[var(--warning-soft)] px-3 py-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--warning)]">
              En attente
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
              {formatCurrency(snapshot.pendingTotal)}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[var(--danger-soft)] px-3 py-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--danger)]">
              En retard
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
              {formatCurrency(snapshot.overdueTotal)}
            </p>
          </article>
        </div>
      </section>

      <section className="card-surface rounded-[2rem] px-5 py-5">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Timeline
            </p>
            <h2 className="font-[family:var(--font-display)] text-[1.8rem] uppercase leading-none text-[var(--ink)]">
              90 jours glissants
            </h2>
          </div>
          <p className="text-right text-xs leading-5 text-[var(--muted)]">
            Vert = encaissé
            <br />
            Orange = en attente
            <br />
            Rouge = en retard
          </p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="grid grid-flow-col auto-cols-[4.85rem] gap-3">
            {snapshot.timeline.map((day) => {
              const tone = day.status ? statusToneMap[day.status] : null;
              const height = day.total > 0 ? Math.max(18, (day.total / maxTotal) * 100) : 8;

              return (
                <article
                  key={day.date}
                  className={`flex h-52 flex-col rounded-[1.6rem] border p-3 ${
                    day.isToday
                      ? "border-[var(--accent)] bg-white shadow-[0_20px_45px_rgba(213,91,45,0.14)]"
                      : "border-[var(--line)] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span>{day.monthLabel}</span>
                    {day.isToday ? <span className="text-[var(--accent)]">Aujourd’hui</span> : null}
                  </div>

                  <div className="mt-3 flex flex-1 items-end">
                    <div className="w-full rounded-[1.1rem] bg-[var(--paper-soft)] p-2">
                      <div
                        className={`w-full rounded-[0.9rem] ${
                          tone ? tone.fill : "bg-[var(--line)]"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    <p className="text-lg font-semibold leading-none text-[var(--ink)]">
                      {day.dayLabel}
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      {day.total > 0 ? formatCurrency(day.total) : "Aucun flux"}
                    </p>
                    {day.status ? (
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] ${tone?.badge}`}
                      >
                        {statusLabelMap[day.status]}
                      </span>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {snapshot.overdueAlerts.length > 0 ? (
          snapshot.overdueAlerts.map((event) => (
            <article key={event.id} className="card-surface rounded-[1.8rem] px-5 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-[var(--ink)]">{event.client}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{event.label}</p>
                </div>
                <span className="rounded-full bg-[var(--danger-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--danger)]">
                  En retard
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4 text-sm">
                <p className="text-[var(--muted)]">Prévu le {event.date}</p>
                <p className="font-semibold text-[var(--ink)]">{formatCurrency(event.amount)}</p>
              </div>
            </article>
          ))
        ) : (
          <article className="card-surface rounded-[1.8rem] px-5 py-6 text-sm leading-6 text-[var(--muted)]">
            Aucun retard actif. Continuez à renseigner vos chantiers pour garder votre
            horizon 90 jours à jour.
          </article>
        )}
      </section>
    </>
  );
}
