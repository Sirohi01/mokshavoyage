import Image from "next/image";
import { Heart } from "lucide-react";

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EF] px-4 py-10 sm:px-6 md:py-12">
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#1FA463]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#D1842F]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-[#EDE6DD] bg-white shadow-xl relative">
              <Image
                src="/images/moksha/philosphy.png"
                alt="Our Philosophy"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating badge removed as requested */}
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-[#17202A] sm:text-4xl md:text-5xl">
              Empathy Before Everything.
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-[#5C6570]">
              <p>
                At Moksha Voyage, we understand that losing a loved one is one of life's most profound challenges. That is why our approach is rooted not just in logistics, but in deep, unwavering empathy.
              </p>
              <p>
                We don't just arrange services; we hold your hand through the process. Whether it is bringing a family member home across international borders or arranging a dignified farewell locally, we handle the complexities so you have the space to grieve, remember, and heal.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#D1842F] pl-6 italic text-[#17202A]">
              "Our promise is simple: to treat your loved one with the same dignity and respect as we would our own family."
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-[#EDE6DD] bg-[#FCFBF8]">
                {/* Placeholder for founder avatar */}
                <Image src="/images/moksha/1.png" alt="Founder" width={48} height={48} className="object-cover grayscale" />
              </div>
              <div>
                <p className="font-md text-[#17202A]">Vijay Sharma</p>
                <p className="text-sm text-[#5C6570]">Founder & Care Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
