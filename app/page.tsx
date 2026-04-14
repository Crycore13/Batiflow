import Link from "next/link";

const PAYMENT_LINK = "https://buy.stripe.com/6oU6oI91y6qP7mG3WreOE09";

const features = [
  {
    icon: "⚡",
    title: "Stripe webhook monitoring",
    desc: "Know the instant your payment webhooks go silent. Never miss a failed charge again.",
  },
  {
    icon: "🗄️",
    title: "DB query health checks",
    desc: "Run a test query on your database every minute. Get alerted before your app throws 500s.",
  },
  {
    icon: "🌐",
    title: "Custom HTTP checks",
    desc: "Monitor any endpoint, API, or login page with configurable response code checks.",
  },
  {
    icon: "🔔",
    title: "Discord & Twitter alerts",
    desc: "Instant alerts to your Discord server or Twitter DMs — wherever you actually look.",
  },
  {
    icon: "📊",
    title: "Public status page",
    desc: "A clean, hosted status page for your products. Build trust before users report issues.",
  },
  {
    icon: "🕐",
    title: "1-minute check intervals",
    desc: "Pro checks run every 60 seconds. Be the first to know, every time.",
  },
];

const steps = [
  {
    num: "01",
    title: "Add your checks",
    desc: "Connect Stripe, paste your DB connection string, or add any HTTP endpoint. Setup takes under 2 minutes.",
  },
  {
    num: "02",
    title: "Get a public status page",
    desc: "Instantly get a hosted status page at pagehush.app/yourproduct. Share it with users and cut support emails.",
  },
  {
    num: "03",
    title: "Get alerted instantly",
    desc: "When something breaks, you get a Discord message or Twitter DM within 60 seconds — before any user notices.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen dot-grid">
      {/* Nav */}
      <nav className="relative z-10 border-b border-white/5 bg-[#07090d]/80 backdrop-blur-sm sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00d97e] status-dot inline-block" />
            <span className="font-mono font-semibold text-sm tracking-tight text-slate-100">
              PageHush
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#pricing"
              className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#features"
              className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
            >
              Features
            </a>
            <Link
              href={PAYMENT_LINK}
              className="text-xs font-mono font-medium px-3.5 py-1.5 rounded bg-[#00d97e] text-[#07090d] hover:bg-[#00c470] transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-20 px-6">
        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,217,126,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d97e] status-dot" />
            <span className="text-xs font-mono text-slate-400">
              For solo devs running 1–5 micro-SaaS products
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-mono font-bold text-5xl sm:text-6xl md:text-7xl text-slate-50 leading-[1.08] tracking-tight mb-6 animate-slide-up opacity-0 delay-100">
            Know before
            <br />
            <span className="text-[#00d97e]">your users do.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-sans font-light animate-slide-up opacity-0 delay-200">
            PageHush watches your Stripe webhooks, DB connections, and HTTP
            endpoints — then alerts you on Discord or Twitter the moment
            something breaks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up opacity-0 delay-300">
            <Link
              href={PAYMENT_LINK}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#00d97e] text-[#07090d] font-mono font-semibold text-sm hover:bg-[#00c470] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(0,217,126,0.25)]"
            >
              Start Free — no card needed
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 text-slate-300 font-mono text-sm hover:border-white/20 hover:text-slate-100 transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Terminal preview card */}
          <div className="mt-16 max-w-2xl mx-auto rounded-xl border border-white/[0.08] bg-[#0d1117] overflow-hidden shadow-2xl animate-slide-up opacity-0 delay-400">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a0d12]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs font-mono text-slate-500">
                pagehush — incident log
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-5 text-left space-y-2.5 font-mono text-sm">
              <div className="flex items-start gap-3">
                <span className="text-slate-600 shrink-0 text-xs mt-0.5">14:22:01</span>
                <span className="text-[#00d97e]">✓</span>
                <span className="text-slate-400">
                  stripe/webhooks <span className="text-slate-500">— 12ms</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-600 shrink-0 text-xs mt-0.5">14:22:01</span>
                <span className="text-[#00d97e]">✓</span>
                <span className="text-slate-400">
                  postgres/query <span className="text-slate-500">— 8ms</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-600 shrink-0 text-xs mt-0.5">14:23:01</span>
                <span className="text-red-400">✗</span>
                <span className="text-red-300">
                  stripe/webhooks <span className="text-red-500">— timeout</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-600 shrink-0 text-xs mt-0.5">14:23:02</span>
                <span className="text-yellow-400">!</span>
                <span className="text-yellow-300">
                  alert sent → Discord #alerts{" "}
                  <span className="text-yellow-500">— 0.4s</span>
                </span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-slate-600 shrink-0 text-xs">14:23:04</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-300 text-xs">
                  <span className="animate-blink">▌</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative z-10 py-24 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-xs font-mono text-[#00d97e] tracking-widest uppercase">
              How it works
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-mono font-bold text-slate-100">
              Up and running in minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl border border-white/[0.07] bg-[#0d1117]/60 hover:border-[#00d97e]/20 transition-colors group"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-4xl font-bold text-white/5 group-hover:text-[#00d97e]/20 transition-colors">
                    {step.num}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-mono font-semibold text-slate-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 py-24 px-6 border-t border-white/[0.04]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-xs font-mono text-[#00d97e] tracking-widest uppercase">
              Features
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-mono font-bold text-slate-100">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-white/[0.07] bg-[#0d1117]/40 hover:bg-[#0d1117]/80 hover:border-white/[0.12] transition-all group"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-mono font-semibold text-sm text-slate-200 mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative z-10 py-24 px-6 border-t border-white/[0.04]"
      >
        <div
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,217,126,0.3), transparent)",
          }}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-xs font-mono text-[#00d97e] tracking-widest uppercase">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-mono font-bold text-slate-100">
              Simple, honest pricing
            </h2>
            <p className="mt-3 text-slate-400 font-sans text-sm">
              No seat fees. No usage limits that sneak up on you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* Free tier */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0d1117]/60">
              <div className="mb-5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Free
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-mono font-bold text-4xl text-slate-100">$0</span>
                  <span className="text-slate-500 font-mono text-sm">/mo</span>
                </div>
                <p className="text-xs text-slate-500 font-sans mt-1">Forever free</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm font-sans">
                {[
                  "1 product",
                  "HTTP endpoint checks",
                  "5-minute check intervals",
                  "Public status page",
                  "Email alerts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-400">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke="#00d97e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={PAYMENT_LINK}
                className="block text-center px-4 py-2.5 rounded-lg border border-white/10 text-slate-300 font-mono text-sm hover:border-white/20 hover:text-slate-100 transition-all"
              >
                Get started free
              </Link>
            </div>

            {/* Pro tier */}
            <div className="relative p-6 rounded-xl border border-[#00d97e]/30 bg-[#0d1117]/80 shadow-[0_0_40px_rgba(0,217,126,0.06)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#00d97e] text-[#07090d]">
                  Most popular
                </span>
              </div>

              <div className="mb-5">
                <span className="text-xs font-mono text-[#00d97e] uppercase tracking-widest">
                  Pro
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-mono font-bold text-4xl text-slate-100">$9</span>
                  <span className="text-slate-500 font-mono text-sm">/mo</span>
                </div>
                <p className="text-xs text-slate-500 font-sans mt-1">Billed monthly</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm font-sans">
                {[
                  "5 products",
                  "Stripe webhook monitoring",
                  "DB query checks",
                  "Custom HTTP checks",
                  "1-minute check intervals",
                  "Discord & Twitter alerts",
                  "Public status page",
                  "Incident history (90 days)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke="#00d97e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={PAYMENT_LINK}
                className="block text-center px-4 py-2.5 rounded-lg bg-[#00d97e] text-[#07090d] font-mono font-semibold text-sm hover:bg-[#00c470] transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(0,217,126,0.2)]"
              >
                Start with Pro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            Stop finding out from your users.
          </h2>
          <p className="text-slate-400 font-sans mb-8 text-lg leading-relaxed">
            Join solo developers who sleep better knowing PageHush is watching
            their products 24/7.
          </p>
          <Link
            href={PAYMENT_LINK}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#00d97e] text-[#07090d] font-mono font-bold text-base hover:bg-[#00c470] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_32px_rgba(0,217,126,0.3)]"
          >
            Start Free Today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 8h12M9 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="mt-4 text-xs font-mono text-slate-600">
            Free plan available · No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d97e] status-dot" />
            <span className="font-mono text-sm text-slate-500">PageHush</span>
          </div>
          <p className="text-xs font-mono text-slate-600">
            © 2026 PageHush · Built for solo developers
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="mailto:hello@pagehush.app"
              className="text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
