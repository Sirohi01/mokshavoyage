import { Quote, Star } from "lucide-react";

const testimonials = [
  ["Nitin Kumar", "London, UK", "Moksha Voyage was a blessing for our family. They handled everything with care and respect.", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"],
  ["Sadhana Chaudhary", "Dubai, UAE", "The team helped us repatriate my father's mortal remains from Dubai to India seamlessly.", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"],
  ["Anita Desai", "Toronto, Canada", "Their spiritual services gave us peace and comfort. Everything was arranged beautifully.", "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"],
  ["Vansh Chaudhary", "Melbourne, Australia", "Professional, compassionate and always available. Thank you for being there for us.", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"],
  ["Aman Chaudhary", "Mumbai, India", "The coordinator kept our family informed at every step and made the process less overwhelming.", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"],
  ["Rohit Kumar", "New York, USA", "Documentation, airport coordination and travel help were all managed with complete clarity.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"],
  ["Anna Sai", "Ahmedabad, India", "The prayer meeting and rituals were arranged with dignity and attention to every detail.", "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&q=80"],
  ["Manish Sirohi", "Singapore", "We were abroad and still felt fully supported through updates, calls and clear timelines.", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"]
];

export function TestimonialsMarquee() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-y border-[#EDE6DD] bg-[#FAF7F3] px-4 pt-1 pb-4 sm:px-6 md:pt-4">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow">Families speak</p>
        <h2 className="mt-1 font-serif text-2xl font-md text-[#222831] sm:text-3xl">
          Stories of Trust & Gratitude
        </h2>
      </div>
      <div className="relative mt-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAF7F3] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAF7F3] to-transparent" />
        <div className="flex w-max animate-testimonial-marquee gap-3 hover:[animation-play-state:paused]">
          {marqueeItems.map(([name, location, text, image], index) => (
            <article key={`${name}-${index}`} className="group relative w-[320px] shrink-0 overflow-hidden rounded-xl bg-white p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#EDE6DD] hover:border-[#D1842F]/30">
              {/* Decorative Quote Mark */}
              <div className="absolute -right-3 -top-3 text-[#FAF7F3] transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1">
                <Quote className="h-24 w-24 fill-current opacity-80" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#D1842F]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-[#D1842F]/30" />
                </div>

                <p className="mt-3.5 min-h-[72px] text-[14px] leading-relaxed text-[#4E5661]">
                  "{text}"
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#EDE6DD] shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13px] font-md text-[#17202A] leading-tight">{name}</h4>
                    <p className="text-[11px] text-[#8A94A6] mt-0.5">{location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
