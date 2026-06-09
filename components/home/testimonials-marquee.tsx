import { Quote, Star } from "lucide-react";

const testimonials = [
  ["Rajesh Kumar", "London, UK", "Moksha Voyage was a blessing for our family. They handled everything with care and respect."],
  ["Priya Sharma", "Dubai, UAE", "The team helped us repatriate my father's mortal remains from Dubai to India seamlessly."],
  ["Anita Desai", "Toronto, Canada", "Their spiritual services gave us peace and comfort. Everything was arranged beautifully."],
  ["Arvind Patel", "Melbourne, Australia", "Professional, compassionate and always available. Thank you for being there for us."],
  ["Meera Iyer", "Mumbai, India", "The coordinator kept our family informed at every step and made the process less overwhelming."],
  ["Karan Mehta", "New York, USA", "Documentation, airport coordination and travel help were all managed with complete clarity."],
  ["Nisha Shah", "Ahmedabad, India", "The prayer meeting and rituals were arranged with dignity and attention to every detail."],
  ["Vikram Rao", "Singapore", "We were abroad and still felt fully supported through updates, calls and clear timelines."]
];

export function TestimonialsMarquee() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-y border-[#EDE6DD] bg-[#FAF7F3] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow">Families speak</p>
        <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#222831] sm:text-3xl">
          Stories of Trust & Gratitude
        </h2>
      </div>
      <div className="relative mt-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAF7F3] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAF7F3] to-transparent" />
        <div className="flex w-max animate-testimonial-marquee gap-3 hover:[animation-play-state:paused]">
          {marqueeItems.map(([name, location, text], index) => (
            <article key={`${name}-${index}`} className="w-[310px] shrink-0 rounded-lg border border-[#EDE6DD] bg-white p-4 shadow-sm">
              <div className="flex gap-1 text-[#D1842F]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <Quote className="mt-3 h-4 w-4 text-[#E7C19A]" />
              <p className="mt-2 min-h-[78px] text-sm leading-6 text-[#4E5661]">{text}</p>
              <p className="mt-3 text-sm font-semibold text-[#17202A]">- {name}</p>
              <p className="text-xs text-[#5C6570]">{location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
