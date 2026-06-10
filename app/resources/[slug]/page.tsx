import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Calendar,
  Clock3,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { resourcesData } from "@/lib/data";
import { PublicSiteLayout } from "@/components/public-site-layout";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return resourcesData.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) notFound();

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, idx) => {
      if (block.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="mb-3 mt-8 font-serif text-2xl font-md leading-tight text-[#17202A]"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }

      if (block.startsWith("- **")) {
        const listItems = block.split("\n").map((item) => item.replace("- ", ""));

        return (
          <ul key={idx} className="mt-5 space-y-3">
            {listItems.map((item, i) => (
              <li
                key={i}
                className="rounded-2xl border border-[#E8DED2] bg-[#FAF8F4] px-4 py-3 text-sm leading-6 text-[#5C6570]"
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="font-md text-[#17202A]">$1</strong>'
                  ),
                }}
              />
            ))}
          </ul>
        );
      }

      return (
        <p key={idx} className="mt-4 text-base leading-8 text-[#5C6570]">
          {block}
        </p>
      );
    });
  };

  return (
    <PublicSiteLayout>
      <article className="bg-[#FAF8F4]">
        <section className="relative overflow-hidden px-4 py-8 sm:px-6 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,123,33,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(23,32,42,0.05),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl">
            

            <div className="mt-1 grid gap-8 lg:grid-cols-[1fr_460px] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-4 py-1.5 text-xs font-md uppercase tracking-[0.16em] text-[#C77B21] shadow-sm">
                    <BookOpenText className="h-4 w-4" />
                    {resource.tag}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-4 py-1.5 text-xs font-medium text-[#5C6570]">
                    <Calendar className="h-4 w-4 text-[#C77B21]" />
                    Updated recently
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-4 py-1.5 text-xs font-medium text-[#5C6570]">
                    <Clock3 className="h-4 w-4 text-[#C77B21]" />
                    4 min read
                  </span>
                </div>

                <h1 className="mt-1 max-w-4xl font-serif text-4xl font-md leading-[1.06] tracking-tight text-[#17202A] sm:text-5xl md:text-6xl">
                  {resource.title}
                </h1>

                <p className="mt-1 max-w-2xl text-base leading-7 text-[#5C6570]">
                  A carefully prepared guide to help families understand the
                  process, documents and next steps with clarity and calm.
                </p>
              </div>

              <div className="rounded-[30px] border border-[#E8DED2] bg-white p-2 shadow-[0_18px_60px_rgba(23,32,42,0.07)]">
                <div className="relative overflow-hidden rounded-[24px]">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={760}
                    height={540}
                    priority
                    className="aspect-[4/3] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/35 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/90 p-4 backdrop-blur-md">
                    <p className="text-sm font-md text-[#17202A]">
                      Guidance prepared for sensitive family decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 md:pb-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[250px_1fr_330px]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[28px] border border-[#E8DED2] bg-white p-5 shadow-[0_12px_40px_rgba(23,32,42,0.04)]">
                <span className="text-xs font-md uppercase tracking-[0.16em] text-[#C77B21]">
                  Article
                </span>

                <div className="mt-4 space-y-3 text-sm text-[#5C6570]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#C77B21]" />
                    Verified guidance
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#C77B21]" />
                    Quick reading
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpenText className="h-4 w-4 text-[#C77B21]" />
                    Family support
                  </div>
                </div>
              </div>
            </aside>

            <main className="rounded-[30px] border border-[#E8DED2] bg-white p-5 shadow-[0_16px_50px_rgba(23,32,42,0.05)] sm:p-7 md:p-9">
              <div className="border-b border-[#E8DED2] pb-5">
                <span className="text-xs font-md uppercase tracking-[0.16em] text-[#C77B21]">
                  Guide Details
                </span>
                <h2 className="mt-2 font-serif text-3xl font-md text-[#17202A]">
                  What families should know
                </h2>
              </div>

              <div className="mt-6">{renderContent(resource.content)}</div>
            </main>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[30px] border border-[#E8DED2] bg-white p-5 shadow-[0_16px_50px_rgba(23,32,42,0.06)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF1E6] text-[#C77B21]">
                  <Headphones className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-2xl font-md text-[#17202A]">
                  Need personal guidance?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#5C6570]">
                  Our care managers can help your family understand the process
                  and coordinate the next steps.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#C77B21] px-5 text-sm font-md text-white transition hover:bg-[#9B5F18]"
                >
                  Talk to Care Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </PublicSiteLayout>
  );
}