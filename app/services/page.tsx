import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/data";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { SectionHeader } from "@/components/shared/section-header";

export default function ServicesPage() {
  return (
    <PublicSiteLayout>
      {/* Hero Section */}
      <section className="relative flex min-h-[30vh] items-center justify-center overflow-hidden bg-[#FFF8EF] px-4 py-12 text-center sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/moksha/hero2.png')] opacity-[0.03] bg-cover bg-center mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F28A35]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
            Our Services
          </span>
          <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
            Compassionate Care,<br />Comprehensive Support
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C6570] sm:text-xl">
            From funeral arrangements and spiritual rituals to international repatriation and family support, we handle every detail with dignity, care, and precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 py-12 sm:px-6 md:py-16">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#E5F5ED]/30 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center md:text-left">
            <SectionHeader
              eyebrow="What we offer"
              title="Explore Our Services"
              subtitle="We provide end-to-end support tailored to your family's specific needs and cultural traditions."
            />
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#EDE6DD] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#F8F9FA]">
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#D1842F] backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#17202A] group-hover:text-[#C77B21] transition-colors">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5C6570]">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C77B21]">
                      Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}
