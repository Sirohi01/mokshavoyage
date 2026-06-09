import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServicesShowcaseProps = {
  services: ServiceItem[];
};

export function ServicesShowcase({ services }: ServicesShowcaseProps) {
  return (
    <section id="services" className="relative overflow-hidden px-4 pb-8 pt-3 sm:px-6">
      <Image
        src="/images/moksha/bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#FFF8EF]/20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <p className="eyebrow">Our services</p>
              <span className="h-px w-28 bg-[#D1842F]/35" />
            </div>
            <h2 className="mt-2 whitespace-nowrap font-serif text-4xl font-semibold leading-tight text-[#17202A] sm:text-5xl">
              Complete Care, Everywhere
            </h2>
            <div className="mt-3 h-px w-24 bg-[#D1842F]/35" />
            <p className="mt-3 whitespace-nowrap text-base leading-7 text-[#5C6570]">
              Thoughtful support at every step, so you can focus on what truly matters.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link href="/services/funeral-services" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#D1842F] px-5 text-sm font-semibold text-white shadow-gold">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href="#contact"
                className="rounded-xl border border-[#EADCCA] bg-white/88 p-4 text-center shadow-card backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#FFF3E5] text-[#D1842F]">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#17202A]">{service.title}</h3>
                <div className="mx-auto mt-2 h-px w-12 bg-[#D1842F]/30" />
                <p className="mx-auto mt-2 max-w-[165px] text-xs leading-5 text-[#5C6570]">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
