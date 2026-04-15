"use client";

import { useState } from "react";

function CashFlowTimeline() {
  return (
    <svg
      viewBox="0 0 340 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      role="img"
      aria-label="Visualisation de trésorerie sur 90 jours"
    >
      {/* Labels mois */}
      <text x="56" y="14" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">AVRIL</text>
      <text x="170" y="14" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">MAI</text>
      <text x="284" y="14" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">JUIN</text>

      {/* Barre Avril - Vert */}
      <rect x="10" y="22" width="92" height="80" rx="8" fill="#16a34a"/>
      <rect x="10" y="22" width="92" height="80" rx="8" fill="url(#greenGrad)"/>
      <text x="56" y="56" textAnchor="middle" fill="white" fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="800">+8 400 €</text>
      <text x="56" y="76" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10" fontFamily="system-ui, sans-serif">Encaissé</text>
      <text x="56" y="91" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="system-ui, sans-serif">✓ Tout bon</text>

      {/* Barre Mai - Orange */}
      <rect x="124" y="22" width="92" height="80" rx="8" fill="#ea6d10"/>
      <rect x="124" y="22" width="92" height="80" rx="8" fill="url(#orangeGrad)"/>
      <text x="170" y="56" textAnchor="middle" fill="white" fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="800">+3 200 €</text>
      <text x="170" y="76" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10" fontFamily="system-ui, sans-serif">En attente</text>
      <text x="170" y="91" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="system-ui, sans-serif">2 factures ouvertes</text>

      {/* Barre Juin - Rouge */}
      <rect x="238" y="22" width="92" height="80" rx="8" fill="#b91c1c"/>
      <rect x="238" y="22" width="92" height="80" rx="8" fill="url(#redGrad)"/>
      <text x="284" y="56" textAnchor="middle" fill="white" fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="800">-1 800 €</text>
      <text x="284" y="76" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10" fontFamily="system-ui, sans-serif">Découvert prévu</text>
      <text x="284" y="91" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="system-ui, sans-serif">⚠ Alerte</text>

      {/* Lignes séparatrices */}
      <line x1="114" y1="22" x2="114" y2="102" stroke="#0f1923" strokeWidth="4"/>
      <line x1="228" y1="22" x2="228" y2="102" stroke="#0f1923" strokeWidth="4"/>

      {/* Barre de progression en bas */}
      <rect x="10" y="112" width="320" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
      <rect x="10" y="112" width="107" height="6" rx="3" fill="#22c55e"/>
      <rect x="117" y="112" width="107" height="6" rx="3" fill="#f97316"/>
      <rect x="224" y="112" width="106" height="6" rx="3" fill="#ef4444"/>

      {/* Légende */}
      <circle cx="22" cy="135" r="4" fill="#22c55e"/>
      <text x="30" y="139" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Encaissé</text>
      <circle cx="90" cy="135" r="4" fill="#f97316"/>
      <text x="98" y="139" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">En attente</text>
      <circle cx="168" cy="135" r="4" fill="#ef4444"/>
      <text x="176" y="139" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Découvert prévu</text>

      {/* Gradients */}
      <defs>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)"/>
        </linearGradient>
        <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const painPoints = [
  {
    icon: "💸",
    title: "Un client qui tarde à payer",
    desc: "T'avances les matériaux de ta poche. Tu fais le chantier. L'argent arrive... quand ça lui chante.",
  },
  {
    icon: "📅",
    title: "Impossible de prévoir le mois prochain",
    desc: "T'as des devis en cours, des factures impayées, des charges qui tombent. Mais tu sais jamais si le compte va tenir.",
  },
  {
    icon: "🧾",
    title: "Ton comptable te dit les mauvaises nouvelles trop tard",
    desc: "T'es dans le rouge depuis 3 mois. Ton comptable t'apprend ça en mars. Pour les chiffres de novembre.",
  },
];

export default function BatiFlowPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Une erreur s'est produite. Réessaie.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Une erreur s'est produite. Réessaie.");
      setStatus("error");
    }
  }

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif", background: "#0f1923" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.03) 0%, transparent 40%)",
        }}
      />

      {/* ── HEADER ── */}
      <header className="relative z-10 px-5 py-4 border-b border-white/[0.07]">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "#f97316" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 14L7 8l3 4 2-3 3 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.02em" }}>
            BatiFlow
          </span>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative z-10 px-5 pt-14 pb-20 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.25)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#f97316" }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#f97316",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Plombiers · Électriciens · Maçons · Peintres · Menuisiers
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 8vw, 3.8rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Tu sais jamais si t&apos;as
          <br />
          assez pour{" "}
          <span style={{ color: "#f97316" }}>finir le mois&nbsp;?</span>
        </h1>

        <p
          className="text-slate-300 mb-10"
          style={{ fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "560px" }}
        >
          <strong style={{ color: "white" }}>47% des factures BTP</strong> sont
          payées en retard.{" "}
          <strong style={{ color: "white" }}>1 faillite sur 4</strong>{" "}en
          France, c&apos;est dans le bâtiment. T&apos;es pas seul — mais t&apos;as besoin de
          voir venir.
        </p>

        <button
          onClick={scrollToWaitlist}
          className="inline-flex items-center gap-3 rounded-xl text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "#f97316",
            padding: "1rem 1.75rem",
            fontSize: "1rem",
            boxShadow: "0 0 48px rgba(249,115,22,0.35)",
          }}
        >
          Rejoindre la liste d&apos;attente
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 9h12M10 4l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p className="mt-4 text-sm" style={{ color: "#475569" }}>
          Gratuit · Aucun engagement · Tu seras prévenu en premier
        </p>
      </section>

      {/* ── PAIN POINTS ── */}
      <section
        className="relative z-10 px-5 py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "3rem",
            }}
          >
            Le problème,{" "}
            <span style={{ color: "#64748b" }}>t&apos;es pas le seul à le vivre</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {painPoints.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid #f97316",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>
                  {p.icon}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                    color: "white",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section
        className="relative z-10 px-5 py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
            }}
          >
            BatiFlow : vois ta tréso sur{" "}
            <span style={{ color: "#f97316" }}>90 jours</span>, d&apos;un coup
            d&apos;œil
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "2.5rem", fontSize: "1rem" }}>
            Depuis ton téléphone. Sans formation. Sans tableur.
          </p>

          {/* Timeline SVG */}
          <div
            style={{
              background: "#162030",
              borderRadius: "16px",
              padding: "1.5rem",
              marginBottom: "2.5rem",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "#64748b",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1rem",
              }}
            >
              Trésorerie prévisionnelle — 90 jours
            </p>
            <CashFlowTimeline />
          </div>

          <ul className="space-y-4">
            {[
              "Connecte tes factures en 2 minutes",
              "Vois exactement quand l'argent rentre (et quand ça risque de manquer)",
              "Reçois une alerte avant d'être dans le rouge",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 flex items-center justify-center rounded-full mt-0.5"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "rgba(249,115,22,0.15)",
                    border: "1px solid rgba(249,115,22,0.4)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="#f97316"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span style={{ color: "#cbd5e1", fontSize: "0.975rem", lineHeight: 1.55 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WAITLIST FORM ── */}
      <section
        id="waitlist"
        className="relative z-10 px-5 py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 rounded-full mb-6"
              style={{
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.25)",
                padding: "0.375rem 0.875rem",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#f97316", animation: "pulse 2s infinite" }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#f97316",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Lancement bientôt
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Sois parmi les premiers
              <br />
              à tester BatiFlow
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.975rem", lineHeight: 1.6 }}>
              On lance dans quelques semaines. Inscris-toi pour être prévenu en
              avant-première.
            </p>
          </div>

          {status === "success" ? (
            <div
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)",
                borderRadius: "16px",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✅</div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#4ade80",
                  marginBottom: "0.75rem",
                }}
              >
                C&apos;est bon !
              </p>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.65 }}>
                On te prévient dès que c&apos;est prêt. Tu seras parmi les premiers
                artisans à tester BatiFlow.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.fr"
                required
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "1rem 1.25rem",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(249,115,22,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />

              {status === "error" && errorMsg && (
                <p style={{ color: "#f87171", fontSize: "0.875rem", paddingLeft: "0.25rem" }}>
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "1rem 1.75rem",
                  borderRadius: "12px",
                  background: status === "loading" ? "rgba(249,115,22,0.6)" : "#f97316",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "transform 0.15s, background 0.2s",
                  boxShadow: "0 0 40px rgba(249,115,22,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLButtonElement).style.background = "#ea6d10";
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLButtonElement).style.background = "#f97316";
                }}
              >
                {status === "loading" ? "Inscription en cours..." : "Je veux être prévenu en premier"}
              </button>

              <p
                className="text-center"
                style={{ fontSize: "0.75rem", color: "#475569", marginTop: "0.25rem" }}
              >
                Pas de spam. Juste un email quand on est prêt.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="relative z-10 px-5 py-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: "#475569", fontSize: "0.875rem" }}>
            <strong style={{ color: "#64748b" }}>BatiFlow</strong> — Pour les
            artisans qui veulent garder la tête hors de l&apos;eau
          </p>
        </div>
      </footer>
    </div>
  );
}
