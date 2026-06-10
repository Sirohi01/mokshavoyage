import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  FileText,
  Globe2,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { resourcesData } from "@/lib/data";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { ResourceCard } from "@/components/shared/resource-card";

export default function ResourcesPage() {
  return (
    <PublicSiteLayout>
      <section className="relative overflow-hidden bg-[#FAF8F4] px-4 py-10 sm:px-6 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,123,33,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(23,32,42,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-4 py-1.5 text-xs font-md uppercase tracking-[0.16em] text-[#C77B21] shadow-sm">
              <BookOpenText className="h-4 w-4" />
              Resources & Guides
            </span>

            <h1 className="mt-1 max-w-4xl font-serif text-2xl font-md leading-[1] tracking-tight text-[#17202A] sm:text-3xl md:text-5xl">
              Clear guidance for families, wherever they are.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5C6570]">
              Practical guides, documentation support, ritual information and
              family care resources designed to help you make decisions with
              clarity and calm.
            </p>

            <div className="mt-1 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                { icon: FileText, label: "Process Guides" },
                { icon: Globe2, label: "Global Support" },
                { icon: ShieldCheck, label: "Trusted Information" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-[#E8DED2] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(23,32,42,0.04)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF1E6] text-[#C77B21]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium text-[#17202A]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#E8DED2] bg-white p-2 shadow-[0_18px_60px_rgba(23,32,42,0.07)]">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="/images/moksha/hero1.png"
                alt="Moksha Voyage Resources"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/35 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/90 p-4 backdrop-blur-md">
                <p className="text-sm font-md text-[#17202A]">
                  Helpful information for rituals, documents, travel and global
                  coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F4] px-4 pb-12 sm:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-md uppercase tracking-[0.16em] text-[#C77B21]">
                Knowledge Library
              </span>

              <h2 className="mt-1 font-serif text-3xl font-md text-[#17202A] md:text-4xl">
                Helpful resources
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5C6570] md:text-base">
                Read carefully prepared resources that explain important steps in
                a simple, respectful and practical way.
              </p>
            </div>

            <div className="hidden rounded-2xl border border-[#E8DED2] bg-white px-4 py-3 text-sm text-[#5C6570] shadow-sm md:block">
              <span className="font-md text-[#17202A]">
                {resourcesData.length}+
              </span>{" "}
              curated guides
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-2 rounded-[30px] border border-[#E8DED2] bg-white p-5 shadow-[0_16px_50px_rgba(23,32,42,0.05)] md:p-7">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>

                <h3 className="font-serif text-2xl font-md text-[#17202A]">
                  Need personal guidance?
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-[#5C6570]">
                  Our care team can help your family understand documents,
                  timelines, rituals, travel and service coordination.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#C77B21] px-6 text-sm font-md text-white transition hover:bg-[#9B5F18]"
              >
                Speak to Care Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}