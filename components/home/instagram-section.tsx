"use client";

import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const posts = [
  { url: "https://www.instagram.com/p/DZWkkYAiEtL/", isReel: false },
  { url: "https://www.instagram.com/p/DZHGusDM5mg/", isReel: false },
  { url: "https://www.instagram.com/p/DYv8ygukv_8/", isReel: false },
  { url: "https://www.instagram.com/p/DUX79iMCU6f/", isReel: false },
  { url: "https://www.instagram.com/p/DUAL-JaElwV/", isReel: false },
  { url: "https://www.instagram.com/p/DTubS4XiljC/", isReel: false },
  { url: "https://www.instagram.com/p/DTzx59vD2te/", isReel: false },
  { url: "https://www.instagram.com/p/DS_8azajf9W/", isReel: false },
  { url: "https://www.instagram.com/p/DSJy2akkmOf/", isReel: false },
  { url: "https://www.instagram.com/p/DSB3Z5IEgjd/", isReel: false },
];

export function InstagramSection() {
  const processed = useRef(false);

  useEffect(() => {
    if (processed.current) return;
    processed.current = true;

    const tryProcess = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (window.instgrm) {
      // script already loaded
      setTimeout(tryProcess, 100);
    } else {
      const existing = document.querySelector('script[src*="instagram.com/embed"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => setTimeout(tryProcess, 300);
        document.body.appendChild(script);
      } else {
        setTimeout(tryProcess, 500);
      }
    }
  }, []);

  // Duplicate for seamless loop
  const marqueeItems = [...posts, ...posts];

  return (
    <section className="overflow-hidden bg-[#FAF7F3] pt-1 pb-5 border-b border-[#EDE6DD]/60">
      {/* Header */}
      <div className="mx-auto mb-7 max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-[#222831] sm:text-3xl">
              Follow Us on Instagram
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/mokshavoyage.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex shrink-0 items-center gap-2 rounded-full border border-[#EDE6DD] bg-white px-4 py-2 text-sm font-semibold text-[#17202A] shadow-sm transition-all hover:border-[#D1842F]/40 hover:text-[#D1842F] hover:shadow-md"
          >
            <Instagram className="h-4 w-4" />
            @mokshavoyage.in
          </Link>
        </div>
      </div>

      {/* Marquee Track — left to right */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF7F3] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF7F3] to-transparent sm:w-24" />

        {/* GPU-accelerated scrolling row */}
        <div
          className="flex gap-4 px-4 hover:[animation-play-state:paused]"
          style={{
            width: "max-content",
            animation: "insta-marquee 45s linear infinite",
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {marqueeItems.map(({ url }, i) => (
            <div
              key={i}
              className="h-[460px] w-[340px] shrink-0 overflow-hidden rounded-xl border border-[#EDE6DD] bg-white shadow-sm"
              style={{ contain: "layout" }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "12px",
                  margin: "0 auto",
                  maxWidth: "340px",
                  minWidth: "300px",
                  padding: "0",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
