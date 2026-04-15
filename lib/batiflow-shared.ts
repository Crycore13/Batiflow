export type StatutAcompte = "paye" | "non_paye";
export type StatutSolde = "encaisse" | "en_attente" | "en_retard";
export type CashStatus = "encaisse" | "en_attente" | "en_retard";

export type Chantier = {
  id: string;
  nomClient: string;
  montantTotal: number;
  acomptePct: number;
  dateDebut: string;
  dateFinPrevue: string;
  statutAcompte: StatutAcompte;
  statutSolde: StatutSolde;
  createdAt: string;
};

export type CashEvent = {
  id: string;
  chantierId: string;
  client: string;
  label: string;
  amount: number;
  date: string;
  status: CashStatus;
};

const euroFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const dayFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

const monthFormatter = new Intl.DateTimeFormat("fr-FR", {
  month: "short",
  timeZone: "UTC",
});

export const statusLabelMap: Record<CashStatus, string> = {
  encaisse: "Encaissé",
  en_attente: "En attente",
  en_retard: "En retard",
};

export const statusToneMap: Record<
  CashStatus,
  { badge: string; fill: string; text: string }
> = {
  encaisse: {
    badge: "bg-[var(--success-soft)] text-[var(--success)]",
    fill: "bg-[var(--success)]",
    text: "text-[var(--success)]",
  },
  en_attente: {
    badge: "bg-[var(--warning-soft)] text-[var(--warning)]",
    fill: "bg-[var(--warning)]",
    text: "text-[var(--warning)]",
  },
  en_retard: {
    badge: "bg-[var(--danger-soft)] text-[var(--danger)]",
    fill: "bg-[var(--danger)]",
    text: "text-[var(--danger)]",
  },
};

function parseDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function formatDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(dateKey: string, amount: number) {
  const next = parseDateKey(dateKey);
  next.setUTCDate(next.getUTCDate() + amount);
  return formatDateKey(next);
}

export function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatCurrency(value: number) {
  return euroFormatter.format(value || 0);
}

export function getAcompteAmount(chantier: Chantier) {
  return Math.round((chantier.montantTotal * chantier.acomptePct) / 100);
}

export function getSoldeAmount(chantier: Chantier) {
  return Math.round(chantier.montantTotal - getAcompteAmount(chantier));
}

function getAcompteStatus(chantier: Chantier, todayKey: string): CashStatus {
  if (chantier.statutAcompte === "paye") {
    return "encaisse";
  }

  return chantier.dateDebut < todayKey ? "en_retard" : "en_attente";
}

function getSoldeStatus(chantier: Chantier, todayKey: string): CashStatus {
  if (chantier.statutSolde === "encaisse") {
    return "encaisse";
  }

  if (chantier.statutSolde === "en_retard" || chantier.dateFinPrevue < todayKey) {
    return "en_retard";
  }

  return "en_attente";
}

export function getChantierStatus(chantier: Chantier, todayKey = getTodayKey()): CashStatus {
  const acompteStatus = getAcompteStatus(chantier, todayKey);
  const soldeStatus = getSoldeStatus(chantier, todayKey);

  if (acompteStatus === "en_retard" || soldeStatus === "en_retard") {
    return "en_retard";
  }

  if (soldeStatus === "encaisse" && acompteStatus === "encaisse") {
    return "encaisse";
  }

  return "en_attente";
}

export function getCashEvents(chantiers: Chantier[], todayKey = getTodayKey()) {
  return chantiers
    .flatMap<CashEvent>((chantier) => [
      {
        id: `${chantier.id}-acompte`,
        chantierId: chantier.id,
        client: chantier.nomClient,
        label: `Acompte ${chantier.acomptePct} %`,
        amount: getAcompteAmount(chantier),
        date: chantier.dateDebut,
        status: getAcompteStatus(chantier, todayKey),
      },
      {
        id: `${chantier.id}-solde`,
        chantierId: chantier.id,
        client: chantier.nomClient,
        label: "Solde chantier",
        amount: getSoldeAmount(chantier),
        date: chantier.dateFinPrevue,
        status: getSoldeStatus(chantier, todayKey),
      },
    ])
    .sort((left, right) => left.date.localeCompare(right.date));
}

export function buildDashboardSnapshot(chantiers: Chantier[], totalDays = 90) {
  const todayKey = getTodayKey();
  const events = getCashEvents(chantiers, todayKey);
  const timelineKeys = Array.from({ length: totalDays }, (_, index) => addDays(todayKey, index));
  const currentMonth = todayKey.slice(0, 7);

  const timeline = timelineKeys.map((date) => {
    const dayEvents = events.filter((event) => event.date === date);
    const total = dayEvents.reduce((sum, event) => sum + event.amount, 0);
    let status: CashStatus | null = null;

    if (dayEvents.some((event) => event.status === "en_retard")) {
      status = "en_retard";
    } else if (dayEvents.some((event) => event.status === "en_attente")) {
      status = "en_attente";
    } else if (dayEvents.some((event) => event.status === "encaisse")) {
      status = "encaisse";
    }

    const parsedDate = parseDateKey(date);

    return {
      date,
      dayLabel: parsedDate.getUTCDate().toString().padStart(2, "0"),
      monthLabel: monthFormatter.format(parsedDate),
      shortLabel: dayFormatter.format(parsedDate),
      total,
      events: dayEvents,
      status,
      isToday: date === todayKey,
    };
  });

  const paidThisMonth = events
    .filter((event) => event.status === "encaisse" && event.date.startsWith(currentMonth))
    .reduce((sum, event) => sum + event.amount, 0);

  const pendingTotal = events
    .filter((event) => event.status === "en_attente")
    .reduce((sum, event) => sum + event.amount, 0);

  const overdueTotal = events
    .filter((event) => event.status === "en_retard")
    .reduce((sum, event) => sum + event.amount, 0);

  return {
    timeline,
    paidThisMonth,
    pendingTotal,
    overdueTotal,
    forecastBalance: paidThisMonth + pendingTotal - overdueTotal,
    overdueAlerts: events.filter((event) => event.status === "en_retard"),
  };
}
