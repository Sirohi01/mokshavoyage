"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Headphones,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/lib/data";

/* ── Category definitions ── */
const categories = [
  {
    key: "services",
    label: "Funeral Services",
    eyebrow: "Local & domestic",
    desc: "Complete care for families arranging funerals, memorials, transportation and tributes.",
    icon: HeartHandshake,
    color: "#C77B21",
    bg: "#FFF8EF",
    border: "#E8D4BD",
    slugs: ["funeral-services", "memorial-services", "ambulance-services", "flower-decor", "live-streaming"],
  },
  {
    key: "international",
    label: "International Services",
    eyebrow: "Cross-border support",
    desc: "Repatriation, embassy clearances, air ambulance and documentation for families worldwide.",
    icon: Globe2,
    color: "#1A7A9B",
    bg: "#EDF6FA",
    border: "#B8DCE8",
    slugs: ["body-repatriation", "ashes-repatriation", "embassy-assistance", "air-ambulance", "international-repatriation", "travel-hospitality", "documentation-support"],
  },
  {
    key: "spiritual",
    label: "Spiritual Care",
    eyebrow: "Rituals & ceremonies",
    desc: "Pandits, Shraddh, online rituals and spiritual guidance for all traditions and communities.",
    icon: Sparkles,
    color: "#7B5EA7",
    bg: "#F5F0FA",
    border: "#D5C8EC",
    slugs: ["pandit-services", "shraddh-services", "online-rituals", "spiritual-services"],
  },
] as const;

type CatKey = "services" | "international" | "spiritual";

const ALL_KEYS: CatKey[] = ["services", "international", "spiritual"];

export function ServicesClient() {
  const [activeKey, setActiveKey] = useState<CatKey | null>(null);
  const pathname = usePathname();

  const read = () => {
    const hash = window.location.hash.replace("#", "") as CatKey;
    setActiveKey(ALL_KEYS.includes(hash) ? hash : null);
  };

  // Re-read hash whenever pathname changes (covers Next.js client navigation)
  useEffect(() => {
    read();
  }, [pathname]);

  // Also handle hash-only changes on the same page
  useEffect(() => {
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const activeCat = activeKey ? categories.find((c) => c.key === activeKey) : null;
  const visibleCategories = activeCat ? [activeCat] : categories;

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#FAF8F4] px-4 py-5 sm:px-6 md:py-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,123,33,0.10),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(23,32,42,0.05),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1.1fr_.9fr]">

          <div>
            <span className="inline-flex rounded-full border border-[#E8DED2] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C77B21]">
              {activeCat ? activeCat.label : "Our Services"}
            </span>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[#17202A] sm:text-5xl md:text-[3.4rem]">
              {activeCat
                ? activeCat.desc
                : "Comprehensive care for families, across every step."}
            </h1>
            {!activeCat && (
              <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-[#5C6570]">
                From funeral arrangements and spiritual rituals to global repatriation and embassy clearances — Moksha Voyage handles every detail with dignity and compassion.
              </p>
            )}

            {/* Category filter tabs */}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => { window.location.hash = ""; setActiveKey(null); }}
                className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition"
                style={{
                  borderColor: !activeKey ? "#C77B21" : "#E8DED2",
                  backgroundColor: !activeKey ? "#FFF1E2" : "#fff",
                  color: !activeKey ? "#C77B21" : "#5C6570",
                }}
              >
                All Services
              </button>
              {categories.map((cat) => {
                const I = cat.icon;
                const isActive = activeKey === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => { window.location.hash = cat.key; setActiveKey(cat.key); }}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition"
                    style={{
                      borderColor: isActive ? cat.border : "#E8DED2",
                      backgroundColor: isActive ? cat.bg : "#fff",
                      color: isActive ? cat.color : "#5C6570",
                    }}
                  >
                    <I className="h-3.5 w-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Trust pills */}
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { icon: Globe2, label: "50+ Countries" },
                { icon: ShieldCheck, label: "Trusted Coordination" },
                { icon: Headphones, label: "24/7 Care Team" },
                { icon: HeartHandshake, label: "10K+ Families Helped" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DED2] bg-white px-3 py-1.5 text-[12px] font-medium text-[#17202A]">
                  <Icon className="h-3.5 w-3.5 text-[#C77B21]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="rounded-[28px] border border-[#E8DED2] bg-white p-2 shadow-[0_18px_60px_rgba(23,32,42,0.08)]">
            <div className="relative overflow-hidden rounded-[22px]">
              <img
                src="/images/moksha/hero2.png"
                alt="Moksha Voyage Services"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/40 bg-white/90 px-4 py-3 backdrop-blur-md">
                <p className="text-[13px] font-semibold text-[#17202A]">
                  One trusted care team for rituals, logistics, documentation and global family assistance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      {visibleCategories.map((cat) => {
        const CatIcon = cat.icon;
        const services = servicesData.filter((s) => cat.slugs.includes(s.slug));

        return (
          <section key={cat.key} className="px-4 py-6 sm:px-6 border-t border-[#E8DED2]">
            <div className="mx-auto max-w-7xl">

              {/* Section header */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border"
                    style={{ backgroundColor: cat.bg, borderColor: cat.border }}>
                    <CatIcon className="h-5 w-5" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: cat.color }}>{cat.eyebrow}</p>
                    <h2 className="font-serif text-[1.6rem] font-semibold text-[#17202A] leading-tight">{cat.label}</h2>
                    <p className="mt-0.5 max-w-lg text-[13.5px] text-[#5C6570]">{cat.desc}</p>
                  </div>
                </div>
                <span className="hidden w-fit shrink-0 rounded-full border px-3 py-1 text-[12px] font-semibold sm:inline-block"
                  style={{ borderColor: cat.border, backgroundColor: cat.bg, color: cat.color }}>
                  {services.length} services
                </span>
              </div>

              {/* Cards */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group overflow-hidden rounded-[24px] border border-[#E8DED2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="p-2">
                        <div className="relative overflow-hidden rounded-[18px]">
                          <img
                            src={service.heroImage}
                            alt={service.title}
                            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/40 via-transparent to-transparent" />
                          <span className="absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10.5px] font-semibold backdrop-blur-sm"
                            style={{ borderColor: cat.border + "88", backgroundColor: cat.bg + "cc", color: cat.color }}>
                            {cat.label}
                          </span>
                          <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/50 bg-white/90 text-[#C77B21] shadow-sm backdrop-blur-md">
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                        </div>
                      </div>
                      <div className="px-4 pb-3.5 pt-2">
                        <div className="mb-1.5 flex items-start justify-between gap-3">
                          <h3 className="font-serif text-[18px] font-semibold leading-snug text-[#17202A] transition-colors group-hover:text-[#C77B21]">
                            {service.title}
                          </h3>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#C77B21] transition-transform group-hover:translate-x-1" />
                        </div>
                        <p className="line-clamp-2 text-[13px] leading-[1.6] text-[#5C6570]">
                          {service.shortDescription}
                        </p>
                        <div className="mt-2.5 flex items-center gap-1.5 border-t border-[#E8DED2] pt-2.5 text-[12px] font-medium text-[#17202A]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#1FA463]" />
                          Managed with care & coordination
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

            </div>
          </section>
        );
      })}

      {/* ── BOTTOM CTA ── */}
      <section className="px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[26px] border border-[#E8DED2] bg-[#FFF8EF] p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C77B21]">Need help choosing?</p>
              <h2 className="mt-1 font-serif text-[1.5rem] font-semibold text-[#17202A] sm:text-[1.8rem]">
                Not sure which service you need?
              </h2>
              <p className="mt-1 text-[13.5px] text-[#5C6570] max-w-md">
                Our care team is available 24/7 to guide you to the right service and start coordination immediately.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="tel:+919568259784" className="inline-flex items-center gap-2 rounded-full bg-[#C77B21] px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition hover:bg-[#A96418]">
                <Headphones className="h-4 w-4" /> Talk to Us
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#CBBBA9] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#17202A] no-underline transition hover:bg-[#FAF8F4]">
                Send a Message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
