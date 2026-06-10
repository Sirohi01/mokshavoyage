import { Plane } from "lucide-react";

const partners = [
  "Emirates",
  "British Airways",
  "Qatar Airways",
  "Air India",
  "Singapore Airlines",
  "Turkish Airlines",
  "Lufthansa",
  "Cathay Pacific"
];

export function PartnerMarquee() {
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-[#EDE6DD] bg-[#FCFBF8] px-4 py-6 sm:px-6 md:py-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow">Trusted By</p>
        <h2 className="mt-2 font-serif text-2xl font-md text-[#17202A] sm:text-3xl">
          Global Airlines & Partners
        </h2>
      </div>

      <div className="relative mt-2 max-w-[1400px] mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FCFBF8] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FCFBF8] to-transparent" />

        <div className="flex w-max animate-testimonial-marquee gap-6 hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="group flex items-center justify-center shrink-0 rounded-full border border-[#EDE6DD] bg-white px-6 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D1842F]/50 hover:shadow-md cursor-default"
            >
              <Plane className="mr-3 h-4 w-4 text-[#D1842F] opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="font-md text-[#5C6570] tracking-wide text-[15px] group-hover:text-[#17202A] transition-colors">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
