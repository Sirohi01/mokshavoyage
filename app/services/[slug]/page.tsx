import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { servicePillars } from "@/lib/platform-data";
import { PublicSiteLayout } from "@/components/public-site-layout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePillars.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicePillars.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <PublicSiteLayout className="bg-canvas text-ink">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
            <Link href="/#services" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ocean">
              <ArrowLeft className="h-4 w-4" />
              Services
            </Link>
            <Icon className="mb-5 h-10 w-10 text-gold" />
            <h1 className="font-serif text-5xl font-semibold">{service.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/68">{service.description}</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2">
          {service.features.map((feature) => (
            <div key={feature} className="rounded-lg border border-line bg-white p-5">
              <CheckCircle2 className="mb-3 h-5 w-5 text-success" />
              <h2 className="font-semibold">{feature}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/64">
                Configurable through service CMS with pricing logic, required documents, country rules, city availability, vendors, SEO, and operational task templates.
              </p>
            </div>
          ))}
        </section>
    </PublicSiteLayout>
  );
}
