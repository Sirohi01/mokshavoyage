import Link from "next/link";
import { resourcesData } from "@/lib/data";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { SectionHeader } from "@/components/shared/section-header";
import { ResourceCard } from "@/components/shared/resource-card";

export default function ResourcesPage() {
  return (
    <PublicSiteLayout>
      {/* Hero Section */}
      <section className="relative flex min-h-[30vh] items-center justify-center overflow-hidden bg-[#FFF8EF] px-4 py-12 text-center sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/moksha/hero1.png')] opacity-[0.03] bg-cover bg-center mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D1842F]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
            Resources & Guides
          </span>
          <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
            Helpful Information for You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C6570] sm:text-xl">
            Expert guidance, process overviews, and emotional support articles to help you navigate through challenging times.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#FFF1E8]/40 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourcesData.map((resource) => (
              <ResourceCard
                key={resource.slug}
                tag={resource.tag}
                title={resource.title}
                image={resource.image}
                href={`/resources/${resource.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}
