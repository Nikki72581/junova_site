import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* Sticky glass header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/junova-wordmark.svg" alt="Junova" width={140} height={28} />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
            <a href="#process" className="opacity-80 hover:opacity-100">Process</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            <a href="#contact"
               className="px-3 py-1.5 rounded-lg text-white"
               style={{ background: "var(--brand-gradient)" }}>
              Start a scope
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block text-xs font-medium px-3 py-1 rounded-full"
               style={{ border: "1px solid var(--border-muted)", color: "var(--brand-ink)", background: "var(--surface-2)" }}>
              Independent, human-first consulting
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ background: "var(--brand-gradient)" }}>
                Human. Clear. Shipped.
              </span>
            </h1>
            <p className="mt-4 text-lg max-w-xl opacity-80">
              We untangle ecommerce, ERP, and AI workflows with senior hands on keyboards.
              Advisory that actually implements.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg text-white font-medium"
                 style={{ background: "var(--brand-gradient)", boxShadow: "var(--shadow-md)" }}>
                Talk to us
              </a>
              <Link href="#services" className="px-5 py-3 rounded-lg font-medium border"
                    style={{ borderColor:"var(--border-strong)", background:"var(--surface-2)" }}>
                See how we work
              </Link>
            </div>
          </div>

          {/* Decorative gradient orb */}
          <div className="relative h-[320px] md:h-[420px]">
            <div className="absolute inset-0 rounded-2xl"
                 style={{ background: "var(--gradient-conic)", filter:"blur(30px)", opacity:.9 }} />
            <div className="absolute inset-6 rounded-2xl bg-white/60 backdrop-blur border"
                 style={{ borderColor:"var(--border-muted)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="icon-chip">
                {/* minimal robot face */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="4.5" y="7" width="15" height="10" rx="4" stroke="white" strokeWidth="2"/>
                  <circle cx="10" cy="12" r="1.6" fill="white"/>
                  <circle cx="14" cy="12" r="1.6" fill="white"/>
                  <path d="M12 7V4.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="4.5" r="1.1" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Services */}
      <section id="services" className="section" style={{ background: "var(--surface-3)" }}>
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6" style={{ color:"var(--brand-ink)" }}>What we do</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Advisory",
                body: "Audits, roadmaps, vendor-neutral selection. Clear scope, honest trade-offs, real timelines.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16M12 4v16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: "Implementation",
                body: "ERP/ecommerce integration, payments, and data flows. Clean, well-documented systems.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M6 8h12v8H6z" stroke="white" strokeWidth="2"/><path d="M9 12h6" stroke="white" strokeWidth="2"/>
                  </svg>
                )
              },
              {
                title: "AI & Automation",
                body: "AR/AP automation and internal tools that save hours, not just impress a slide deck.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((c) => (
              <div key={c.title} className="card p-6">
                <div className="icon-chip">{c.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm opacity-80">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">How we work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title:"1. Clarity", body:"Short discovery. Ruthless scope. Visible decisions." },
              { title:"2. Build", body:"Senior hands on keyboards. Prototype early, iterate fast." },
              { title:"3. Value", body:"Ship, measure, improve. If it doesn’t move a KPI, it doesn’t ship." }
            ].map(s => (
              <div key={s.title} className="card p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-80">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl p-8 md:p-10 text-white"
               style={{ background:"var(--brand-gradient)", boxShadow:"var(--shadow-lg)" }}>
            <h3 className="text-2xl md:text-3xl font-extrabold">The calm in your stack.</h3>
            <p className="mt-2 opacity-95">Bring us the messy threads. We’ll leave you with systems your team actually likes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg font-medium bg-white/10 backdrop-blur"
                 style={{ border:"1px solid rgba(255,255,255,0.25)" }}>
                Start a scope
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg font-medium bg-white text-black">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ background:"var(--surface-3)" }}>
        <div className="container">
          <div className="card p-6 md:p-8">
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-sm opacity-80">Drop a note and we’ll reply with next steps.</p>
            <form className="mt-4 grid gap-3 md:grid-cols-2">
              <input className="w-full rounded-lg border px-3 py-2 bg-white" placeholder="Name"
                     style={{ borderColor:"var(--border-strong)" }}/>
              <input className="w-full rounded-lg border px-3 py-2 bg-white" placeholder="Email" type="email"
                     style={{ borderColor:"var(--border-strong)" }}/>
              <textarea className="md:col-span-2 w-full rounded-lg border px-3 py-2 min-h-[120px] bg-white"
                        placeholder="What do you want to build or fix?"
                        style={{ borderColor:"var(--border-strong)" }}/>
              <button type="submit" className="md:col-span-2 rounded-lg text-white px-4 py-3 font-medium"
                      style={{ background:"var(--brand-gradient)" }}>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t" style={{ borderColor:"var(--border-muted)" }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/junova-wordmark.svg" alt="Junova" width={110} height={22}/>
            <span className="text-sm opacity-70">© {new Date().getFullYear()} Junova</span>
          </div>
          <div className="text-sm opacity-70">Modern systems, human sense.</div>
        </div>
      </footer>
    </main>
  );
}
