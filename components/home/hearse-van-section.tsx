"use client";

import { useState, useEffect } from "react";
import { Phone, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/images/moksha/h1.png",
    eyebrow: "Our Specialized Fleet",
    title: "Purpose-Built Hearse Vans",
    description:
      "Our specially designed hearse vans are purpose-built for dignified and secure transit. Each vehicle is maintained to the highest standards, ensuring a smooth and respectful journey for your loved one.",
    features: [
      "Fully AC & sanitized before every trip",
      "Dedicated driver & care coordinator",
      "Available for local & outstation routes",
    ],
  },
  {
    image: "/images/moksha/h2.png",
    eyebrow: "Safe & Comfortable",
    title: "Temperature Controlled Transport",
    description:
      "We provide temperature-controlled and freezer-equipped vehicles where required, ensuring the mortal remains are preserved and transported with the utmost care and dignity.",
    features: [
      "Freezer van available on request",
      "Sealed & secure compartment",
      "Compliant with health & transport guidelines",
    ],
  },
  {
    image: "/images/moksha/h3.png",
    eyebrow: "Family-First Approach",
    title: "Space for the Family, Always",
    description:
      "Our vans include comfortable seating for accompanying family members, so your loved ones are never alone on their final journey. Our trained, compassionate staff are with you at every step.",
    features: [
      "Seating for family members",
      "Trained & sensitive support staff",
      "24/7 emergency availability across India",
    ],
  },
];

export function HearseVanSection() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  // Auto-play: change slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F3] px-4 pt-4 pb-2 sm:px-6 border-t border-[#EDE6DD]/60">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#E7C19A] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#EF7F6B] opacity-10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-6 text-center">
          <p className="eyebrow">Transport Services</p>
          <h2 className="mt-1.5 font-serif text-2xl font-md text-[#222831] sm:text-3xl">
            Premium Hearse Van Services
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-4 py-2 text-sm font-md transition-all duration-200",
                active === i
                  ? "bg-[#D1842F] text-white shadow-md"
                  : "border border-[#EDE6DD] bg-white text-[#5C6570] hover:border-[#D1842F]/40 hover:text-[#D1842F]",
              ].join(" ")}
            >
              {s.eyebrow}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:items-center lg:gap-12">

          {/* Content */}
          <div className="flex-1">
            <p className="eyebrow">{slide.eyebrow}</p>
            <h3 className="mt-2 font-serif text-2xl font-md text-[#222831] sm:text-3xl">
              {slide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4E5661]">
              {slide.description}
            </p>

            <ul className="mt-5 space-y-2.5">
              {slide.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1842F]/10 text-[#D1842F]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-[#17202A]">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="tel:+919568259784"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#D1842F] to-[#B06B22] px-5 text-sm font-md text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Truck className="h-4 w-4" />
                Book a Hearse Van
              </Link>
              <div className="flex items-center gap-2 text-sm font-md text-[#17202A]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1FA463]/10 text-[#1FA463]">
                  <Phone className="h-4 w-4" />
                </div>
                +91-9654900525
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[260px] w-full max-w-[400px] shrink-0 overflow-hidden rounded-2xl shadow-lg sm:h-[280px] lg:w-[480px] lg:max-w-none">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={[
                "rounded-full transition-all duration-300",
                active === i
                  ? "h-2 w-8 bg-[#D1842F]"
                  : "h-2 w-2 bg-[#D1842F]/30 hover:bg-[#D1842F]/60",
              ].join(" ")}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
