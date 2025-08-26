"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur border-b transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Junova home" className="flex items-center gap-2">
          {/* Icon-only lockup so the big hero logo doesn’t feel duplicated */}
          <Image
            src="/junova-logo.png"
            alt="Junova"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
            <span className="font-bold text-xl text-gray-900">junova</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-80">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full px-3 py-1.5 text-white
                       bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] shadow-sm hover:shadow-md transition"
          >
            Start a scope
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center rounded-lg border px-3 py-1.5 text-sm"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-7xl px-4 md:px-6 py-3 grid gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center rounded-full px-3 py-1.5 text-white
                         bg-gradient-to-r from-[#6E3AFF] to-[#21D07A] shadow-sm"
            >
              Start a scope
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
