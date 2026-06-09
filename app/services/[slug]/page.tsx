import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/data";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <PublicSiteLayout>
      {/* Immersive Hero Section */}
      <section className="relative flex min-h-[35vh] items-center overflow-hidden bg-[#FFF8EF] px-4 py-12 sm:px-6">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-[0.03] mix-blend-multiply"
          priority
        />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D1842F]/10 blur-3xl" />
        
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="flex max-w-3xl flex-col items-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
              <Icon className="h-4 w-4 text-[#D1842F]" />
              {service.title}
            </span>
            <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#5C6570] sm:text-xl max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_350px]">
          
          {/* Left Column: Content */}
          <div className="space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#17202A]">Overview</h2>
              <div className="mt-4 h-px w-16 bg-[#D1842F]/35" />
              <p className="mt-6 text-base leading-8 text-[#5C6570]">
                {service.content.overview}
              </p>
            </div>

            {/* What's Included */}
            <div className="group rounded-3xl border border-[#EDE6DD] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 -translate-y-20 translate-x-20 rounded-full bg-[#E5F5ED] opacity-30 transition-transform duration-500 group-hover:scale-150" />
              <h3 className="relative font-serif text-2xl font-semibold text-[#17202A]">What's Included</h3>
              <ul className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {service.content.whatIsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-xl bg-[#FCFBF8] p-4 border border-transparent transition-colors hover:border-[#1FA463]/30">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1FA463]" />
                    <span className="text-sm font-medium leading-6 text-[#5C6570]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Timeline */}
            <div>
              <h3 className="font-serif text-3xl font-semibold text-[#17202A]">Our Process</h3>
              <div className="mt-4 h-px w-16 bg-[#D1842F]/35" />
              <div className="mt-12 space-y-12">
                {service.content.process.map((step, idx) => (
                  <div key={idx} className="group relative flex gap-8">
                    {/* Timeline Line */}
                    {idx !== service.content.process.length - 1 && (
                      <div className="absolute left-[23px] top-14 h-full w-0.5 bg-gradient-to-b from-[#D1842F] to-transparent opacity-30" />
                    )}
                    {/* Step Number */}
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3E5] border border-[#D1842F]/20 text-lg font-bold text-[#D1842F] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D1842F] group-hover:text-white">
                      {step.step}
                    </div>
                    {/* Step Content */}
                    <div className="flex-1 rounded-2xl bg-white p-6 border border-[#EDE6DD] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[#D1842F]/30">
                      <h4 className="text-lg font-bold text-[#17202A]">{step.title}</h4>
                      <p className="mt-3 leading-7 text-[#5C6570]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="relative">
            <div className="sticky top-24 space-y-6">
              
              {/* Contact Card */}
              <div className="overflow-hidden rounded-3xl bg-[#17202A] text-white shadow-2xl border border-white/10 relative group">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D1842F]/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative bg-[#D1842F] px-8 py-5">
                  <h3 className="text-xl font-serif font-semibold">Need Immediate Assistance?</h3>
                </div>
                <div className="relative p-8">
                  <p className="mb-8 text-sm leading-6 text-[#EADCCA]">
                    Our care team is available 24/7 to support you with {service.title.toLowerCase()}.
                  </p>
                  <div className="grid gap-4">
                    <Button asChild className="h-14 w-full rounded-xl bg-white text-[#17202A] font-bold shadow-lg hover:bg-[#F8F9FA] hover:-translate-y-0.5 transition-all">
                      <Link href="tel:+919568259784">
                        <Phone className="mr-2 h-5 w-5" /> Call +91 9568259784
                      </Link>
                    </Button>
                    <Button asChild className="h-14 w-full rounded-xl bg-[#1FA463] text-white font-bold shadow-lg hover:bg-[#1A8B54] hover:-translate-y-0.5 transition-all">
                      <Link href="https://wa.me/919568259784">
                        <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Other Services Link */}
              <div className="rounded-2xl border border-[#EDE6DD] bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#17202A]">Explore Other Services</h3>
                <div className="mt-4 grid gap-3">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((otherService) => (
                      <Link
                        key={otherService.slug}
                        href={`/services/${otherService.slug}`}
                        className="group flex items-center justify-between text-sm text-[#5C6570] transition-colors hover:text-[#C77B21]"
                      >
                        {otherService.title}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    ))}
                </div>
                <Link href="/services" className="mt-6 block text-sm font-semibold text-[#C77B21] hover:underline">
                  View all services →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </PublicSiteLayout>
  );
}
