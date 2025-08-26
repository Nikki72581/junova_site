"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <section className="relative pt-10"> {/* pt-10 to breathe under sticky header */}
        {/* Soft brand blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(45% 45% at 30% 30%, #6E3AFF 0%, rgba(110,58,255,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(45% 45% at 70% 70%, #21D07A 0%, rgba(33,208,122,0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          {/* REMOVED the tiny logo/wordmark row that sat here */}

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] bg-clip-text text-transparent">
              Human. Clear. Shipped.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-700">
            Independent, senior help for ecommerce, ERP, and AI—delivered with real-world
            pragmatism. No publishers pulling strings. No fluff.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-white bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] shadow-sm hover:shadow-md transition"
            >
              Start a scope
            </a>
            <a
              href="#process"
              className="inline-flex items-center rounded-full px-5 py-2.5 border hover:bg-white transition"
            >
              See how we work
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-16">
        <h2 className="text-[22px] md:text-3xl font-semibold">What we do</h2>
        <p className="mt-2 text-neutral-700 max-w-2xl text-[15px] md:text-base">
          Focused, vendor-neutral work across strategy and execution.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Advisory",
              desc: "Audits, roadmaps, and vendor-neutral selection. Clear decisions, faster.",
            },
            {
              title: "Implementation",
              desc: "ERP & ecommerce integration, payments, and data flows that actually balance.",
            },
            {
              title: "AI & Automation",
              desc: "AR/AP automation and internal tools that save hours—not another dashboard.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] opacity-90 mb-4" />
              <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-neutral-700 text-[15px] md:text-base">{item.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm underline decoration-2 underline-offset-4 decoration-[#6E3AFF] hover:decoration-[#21D07A]"
              >
                Start a scope →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-5xl px-4 md:px-6 py-14 md:py-16">
        <h2 className="text-[22px] md:text-3xl font-semibold">How we work</h2>
        <ol className="relative mt-8 border-s pl-6 space-y-10">
          {[
            { t: "Clarity", d: "Short discovery. Ruthless scope. Visible tradeoffs and decisions." },
            { t: "Build", d: "Senior hands on keyboards. Prototype early, iterate fast, ship often." },
            { t: "Value", d: "Measure impact. If it doesn’t move a KPI, it doesn’t ship." },
          ].map((s, i) => (
            <li key={s.t} className="relative">
              <span
                aria-hidden
                className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]"
              />
              <h3 className="font-semibold text-base md:text-lg">
                {i + 1}. {s.t}
              </h3>
              <p className="text-neutral-700 text-[15px] md:text-base">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-3xl px-4 md:px-6 py-14 md:py-16">
        <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
          <div aria-hidden className="h-1 bg-gradient-to-r from-[#6E3AFF] to-[#21D07A]" />
          <div className="p-6">
            <h2 className="text-[22px] md:text-2xl font-semibold">Get in touch</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Tell us what’s going on and we’ll reply with next steps (usually within 1–2 business days).
            </p>

            {!sent ? (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <label className="text-sm">
                  Name
                  <input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2" />
                </label>
                <label className="text-sm">
                  Email
                  <input type="email" name="email" required className="mt-1 w-full rounded-lg border px-3 py-2" />
                </label>
                <label className="text-sm">
                  What’s going on?
                  <textarea rows={4} name="message" className="mt-1 w-full rounded-lg border px-3 py-2" />
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center rounded-full px-5 py-2.5 text-white
                               bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] shadow-sm hover:shadow-md transition"
                  >
                    Send
                  </button>
                  <a href="mailto:hello@junova.co" className="mt-2 text-sm underline decoration-2 underline-offset-4">
                    Or email hello@junova.co
                  </a>
                </div>
              </form>
            ) : (
              <div role="status" aria-live="polite" className="mt-6 rounded-lg border bg-neutral-50 p-4">
                <p className="font-medium">Thanks! We got your message.</p>
                <p className="text-sm text-neutral-700">
                  We’ll reach out shortly. If it’s urgent, email <a className="underline" href="mailto:hello@junova.co">hello@junova.co</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER unchanged */}
    </div>
  );
}
