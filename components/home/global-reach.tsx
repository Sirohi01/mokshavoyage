"use client";

import { Globe2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const regions = [
  {
    region: "India",
    tagline: "Serving All States & Union Territories",
    description: "Extensive domestic network ensuring rapid response, comprehensive legal documentation, and seamless transportation across the entire nation via road, rail, and air.",
    countries: "All Major Cities",
    hubs: ["Mumbai", "Delhi", "Kolkata", "Chennai", "Hyderabad", "Bengaluru"],
    image: "/images/moksha/map-india.png",
    flag: "🇮🇳",
    accent: "#E2773B",
  },
  {
    region: "Middle East",
    tagline: "Deeply Rooted in the Gulf Region",
    description: "Specialized in handling complex embassy procedures, local customs, and direct airline coordination to ensure swift and respectful repatriation.",
    countries: "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman",
    hubs: ["Dubai", "Riyadh", "Doha", "Kuwait City", "Muscat"],
    image: "/images/moksha/map-middle-east.png",
    flag: "🌍",
    accent: "#C9A227",
  },
  {
    region: "North America",
    tagline: "Coast-to-Coast Coverage",
    description: "Partnering with top-tier funeral homes and consulates across the US and Canada for dignified cross-border transport and full logistical compliance.",
    countries: "USA & Canada",
    hubs: ["New York", "Los Angeles", "Chicago", "Toronto", "Vancouver"],
    image: "/images/moksha/map-north-america.png",
    flag: "🌎",
    accent: "#5B8FD4",
  },
  {
    region: "Europe & UK",
    tagline: "Pan-European Network",
    description: "Navigating strict European regulations with ease. We manage apostille attestations, translations, and direct cargo flights out of major European hubs.",
    countries: "UK, Germany, France, Italy, Netherlands, Ireland",
    hubs: ["London", "Frankfurt", "Paris", "Amsterdam", "Dublin"],
    image: "/images/moksha/map-europe.png",
    flag: "🇬🇧",
    accent: "#9B7FD4",
  },
  {
    region: "Asia Pacific",
    tagline: "Spanning the Pacific Rim",
    description: "Dedicated local agents providing culturally sensitive care, rapid clearances, and continuous family support throughout the entire journey.",
    countries: "Australia, Singapore, Malaysia, New Zealand, Japan",
    hubs: ["Sydney", "Singapore", "Kuala Lumpur", "Auckland"],
    image: "/images/moksha/map-asia-pacific.png",
    flag: "🌏",
    accent: "#2BA898",
  },
  {
    region: "Africa",
    tagline: "Growing Across the Continent",
    description: "Overcoming geographical and bureaucratic challenges with strong local alliances, ensuring safe and legally sound transit from major African centers.",
    countries: "South Africa, Kenya, Nigeria, Tanzania, Ghana",
    hubs: ["Johannesburg", "Nairobi", "Lagos", "Accra"],
    image: "/images/moksha/map-africa.png",
    flag: "🌍",
    accent: "#3DAA60",
  },
];



export function GlobalReach() {
  const [active, setActive] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});
  const [animating, setAnimating] = useState(false);

  const area = regions[active];

  const goTo = useCallback((idx: number) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 220);
  }, [active, animating]);

  const prev = () => goTo((active - 1 + regions.length) % regions.length);
  const next = () => goTo((active + 1) % regions.length);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % regions.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FCFBF8] px-4 pt-2 pb-3 sm:px-6 md:pt-4 md:pb-4">
      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#D1842F 1px,transparent 1px),linear-gradient(90deg,#D1842F 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[120px] opacity-10 transition-colors duration-700"
        style={{ backgroundColor: area.accent }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <div className="mb-5 text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#F0D9C1] bg-[#FFF1E8] px-3 py-1 text-[11px] font-semibold tracking-widest text-[#D1842F] uppercase">
            <Globe2 className="h-3 w-3" /> Global Footprint
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#17202A] sm:text-4xl leading-tight">
            Bringing Loved Ones Home,{" "}
            <br className="hidden sm:block" />
            <span
              className="transition-colors duration-700"
              style={{ color: area.accent }}
            >
              Anywhere in the World.
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#7A8590]">
            Full legal, logistical &amp; spiritual support across 50+ countries.
          </p>
        </div>

        {/* ── Tab Selector ── */}
        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {regions.map((r, i) => (
            <button
              key={r.region}
              onClick={() => goTo(i)}
              className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all duration-300"
              style={{
                borderColor: i === active ? r.accent : "#EDE6DD",
                backgroundColor:
                  i === active ? r.accent + "15" : "#FFFFFF",
                color: i === active ? r.accent : "#7A8590",
                boxShadow: i === active ? `0 0 12px ${r.accent}33` : "none",
              }}
            >
              <span>{r.flag}</span> {r.region}
            </button>
          ))}
        </div>

        {/* ── Main Card ── */}
        <div
          className="relative overflow-hidden rounded-2xl border border-[#EDE6DD] bg-white shadow-lg transition-all duration-500"
          style={{ boxShadow: `0 4px 40px ${area.accent}18` }}
        >
          {/* top accent line */}
          <div
            className="h-[2px] w-full transition-colors duration-700"
            style={{ backgroundColor: area.accent }}
          />

          <div className="flex flex-col md:flex-row">
            {/* Map image — left */}
            <div className="relative flex min-h-[280px] w-full items-center justify-center overflow-hidden bg-[#F9F5F0] md:min-h-[360px] md:w-1/2">
              <div
                className={`relative h-full w-full transition-opacity duration-300 ${
                  animating ? "opacity-0" : "opacity-100"
                }`}
              >
                {!imgError[active] ? (
                  <Image
                    key={active}
                    src={area.image}
                    alt={`Map of ${area.region}`}
                    fill
                    className="object-contain p-4 md:p-6"
                    onError={() =>
                      setImgError((prev) => ({ ...prev, [active]: true }))
                    }
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3">
                    <Globe2
                      className="h-16 w-16 opacity-15"
                      style={{ color: area.accent }}
                    />
                    <p className="text-[11px] text-white/30 px-6 text-center">
                      Add image:{" "}
                      <code className="text-[10px] text-white/20">
                        {area.image}
                      </code>
                    </p>
                  </div>
                )}
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#EDE6DD] bg-white shadow-sm hover:bg-[#FFF1E8] transition-colors z-10"
              >
                <ChevronLeft className="h-4 w-4 text-[#D1842F]" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#EDE6DD] bg-white shadow-sm hover:bg-[#FFF1E8] transition-colors z-10"
              >
                <ChevronRight className="h-4 w-4 text-[#D1842F]" />
              </button>
            </div>

            {/* Info panel — right */}
            <div
              className={`flex w-full flex-col justify-center p-6 md:p-8 md:w-1/2 transition-opacity duration-300 ${
                animating ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Region title */}
              <div className="flex items-center gap-2 mb-1">
                <MapPin
                  className="h-5 w-5 shrink-0"
                  style={{ color: area.accent }}
                />
                <h3 className="font-serif text-2xl font-semibold text-[#17202A]">
                  {area.region}
                </h3>
              </div>
              <p className="text-[14px] text-[#7A8590] mb-2 pl-7 font-medium">{area.tagline}</p>
              <p className="text-[13px] text-[#5C6570] mb-5 pl-7 leading-relaxed">{area.description}</p>

              {/* Divider */}
              <div
                className="mb-5 h-px w-12 rounded-full"
                style={{ backgroundColor: area.accent }}
              />

              {/* Countries */}
              <p
                className="text-[12px] font-bold tracking-widest uppercase mb-1"
                style={{ color: area.accent }}
              >
                Countries Covered
              </p>
              <p className="text-[16px] text-[#3D4A54] mb-5 leading-relaxed font-medium">
                {area.countries}
              </p>

              {/* Hubs */}
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A8590] mb-2">
                Major Hubs
              </p>
              <div className="flex flex-wrap gap-1.5">
                {area.hubs.map((hub) => (
                  <span
                    key={hub}
                    className="rounded-full border px-3 py-1 text-[13px] font-medium"
                    style={{
                      borderColor: area.accent + "44",
                      color: area.accent,
                      backgroundColor: area.accent + "10",
                    }}
                  >
                    {hub}
                  </span>
                ))}
              </div>

              {/* Progress dots */}
              <div className="mt-4 flex items-center gap-1.5">
                {regions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="h-1.5 rounded-full transition-all duration-400"
                    style={{
                      width: i === active ? "28px" : "6px",
                      backgroundColor:
                        i === active ? area.accent : "#E5DDD5",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
