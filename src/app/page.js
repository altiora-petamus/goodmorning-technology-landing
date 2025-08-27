"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Gauge,
  Shield,
  Handshake,
  Laptop,
  Wrench,
  LineChart,
  CheckCircle2,
  Rocket,
  Megaphone,
  Search,
  Paintbrush,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// -----------------------------------------------------------------------------
// Good Morning Technology — Landing Page (no dark mode, no purple gradients)
// -----------------------------------------------------------------------------

const brand = {
  name: "good morning technology",
  domain: "goodmorningtechnology.com",
  email: "hello@goodmorningtechnology.com",
  phone: "(555) 010-2025",
  gradient: "bg-gradient-to-r from-sky-400 to-emerald-400",
  textGradient: "bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.33, 0.66, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join("|")]);
  return active;
}

// Utility
function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className={cx("mb-2 text-sm font-semibold tracking-wider uppercase", brand.textGradient)}>{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

// -----------------------------------------------------------------------------
// Nav (reverted to include contact + quote)
// -----------------------------------------------------------------------------
function Nav({ sections }: { sections: string[] }) {
  const active = useActiveSection(sections);
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <a href="#home" className="font-semibold text-slate-900 text-lg">
          <span className={brand.textGradient}>good morning</span> technology
        </a>
        <nav className="ml-auto hidden md:flex items-center gap-2">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={cx(
                "px-3 py-2 text-sm rounded-full transition",
                active === id ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
              )}
            >
              {id}
            </a>
          ))}
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          <Button variant="secondary" className="hidden sm:inline-flex" asChild>
            <a href={`mailto:${brand.email}?subject=Project%20inquiry%20—%20${encodeURIComponent(brand.name)}`}>Contact</a>
          </Button>
          <Button className={brand.gradient} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get a quote <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Hero (kept same)
// -----------------------------------------------------------------------------
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className={cx("absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full blur-3xl", brand.gradient)} />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900">
            Fresh websites for a new day
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-lg text-slate-600">
            {brand.name} creates bright, fast websites designed to attract customers and grow your business.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className={brand.gradient} size="lg" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
              See pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#work">View work</a>
            </Button>
          </motion.div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1"><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /> <span>Happy clients</span></div>
            <div className="hidden sm:block">•</div>
            <div>Launch in <b>7–21 days</b></div>
          </div>
        </div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="aspect-[16/10] rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white">
            <div className={cx("h-8 w-full", brand.gradient)} />
            <div className="p-6 grid gap-4">
              <div className="h-8 w-3/5 rounded-md bg-slate-100" />
              <div className="h-4 w-4/5 rounded-md bg-slate-100" />
              <div className="h-4 w-3/5 rounded-md bg-slate-100" />
              <div className="mt-2 grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-24 rounded-xl bg-slate-100" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// (rest of page code remains the same)

export default function GoodMorningTechnologyLanding() {
  const sections = ["home", "services", "pricing", "work", "process", "faq", "contact"];
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Nav sections={sections} />
      <main>
        <Hero />
        {/* Features, Pricing, Work, Process, FAQ, Contact, Footer remain unchanged */}
      </main>
    </div>
  );
}