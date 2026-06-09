"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Clock3, Globe2, Phone, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  image: string;
  title: string;
  highlight: string;
  description: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const heroSignals = [
  ["24/7 Support", "Always here", Clock3],
  ["Global Presence", "50+ Countries", Globe2],
  ["End-to-End Care", "From start to finish", UsersRound]
] as const;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden border-b border-[#EDE6DD] bg-[#F8F1E7]">
      <Image
        src={activeSlide.image}
        alt={activeSlide.title}
        fill
        priority
        sizes="100vw"
        className="scale-[1.04] object-cover object-[58%_center]"
      />

      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-8 sm:px-6">
        <div className="max-w-2xl translate-y-8 [text-shadow:_0_1px_18px_rgba(255,255,255,0.72)]">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#17202A] sm:text-5xl">
            {activeSlide.title} <span className="block text-[#C77B21]">{activeSlide.highlight}</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#17202A] sm:text-base">
            {activeSlide.description}
          </p>
          <div className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-3">
            {heroSignals.map(([title, subtitle, Icon]) => (
              <div key={title} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[#F0D9C1] bg-white/80 text-[#D1842F] shadow-sm backdrop-blur-sm">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{title}</span>
                  <span className="text-xs text-[#3D4652]">{subtitle}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#C77B21] px-5 text-sm font-semibold text-white shadow-sm">
              <Phone className="h-4 w-4" />
              Get Immediate Help
            </Link>
            <Link href="#services" className="inline-flex h-11 items-center justify-center rounded-md border border-[#C77B21]/45 bg-white/80 px-5 text-sm font-semibold text-[#342A20] shadow-sm backdrop-blur-sm">
              Explore Services
            </Link>
          </div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show hero slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 rounded-full bg-white/70 shadow-sm transition-all",
                  index === activeIndex ? "w-7 bg-[#C77B21]" : "w-2"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
