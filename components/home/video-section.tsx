"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

const videos = [
  { id: "W0t229Fs_Bc", title: "Repatriation Service" },
  { id: "kf2yNlyqNLU", title: "Family Support" },
  { id: "9DsvMS7q_AA", title: "Spiritual Care" },
  { id: "NyW1G5LW8AQ", title: "Our Team" },
  { id: "xEY8MiznV-w", title: "Compassionate Care" },
  { id: "XskwmJg1YR8", title: "Our Services" },
  { id: "a_ctD8w_2C0", title: "Client Story" },
];

export function VideoSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

  // Duplicate for seamless marquee loop
  const marqueeItems = [...videos, ...videos];

  return (
    <section className="overflow-hidden bg-white px-0 py-10 border-y border-[#EDE6DD]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-7 text-center">
          <p className="eyebrow">Watch Us Work</p>
          <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#222831] sm:text-3xl">
            Stories of Care & Compassion
          </h2>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        {/* Scrolling row */}
        <div className="flex w-max animate-video-marquee gap-3 px-3 hover:[animation-play-state:paused]">
          {marqueeItems.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              onClick={() => setActiveId(video.id)}
              className="group relative w-[140px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-[#EDE6DD] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[160px]"
            >
              {/* 9:16 thumbnail */}
              <div className="aspect-[9/16] w-full bg-[#F0EBE3]">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                  <Play className="h-4 w-4 fill-[#D1842F] text-[#D1842F] ml-0.5" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent p-2.5 pt-5">
                <p className="text-[11px] font-semibold leading-tight text-white">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal — rendered via portal so it's always viewport-centered */}
      {activeId && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setActiveId(null)}
        >
          <div className="relative w-full max-w-[340px]">
            <button
              onClick={() => setActiveId(null)}
              className="absolute -top-9 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                title="Moksha Voyage Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
