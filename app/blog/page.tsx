import { PublicSiteLayout } from "@/components/public-site-layout";
import { ArrowRight, Calendar, Feather } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "Understanding the Repatriation Process",
    excerpt:
      "A comprehensive guide to the steps involved in bringing a loved one home from abroad.",
    date: "October 15, 2023",
    author: "Moksha Voyage Care Team",
    image: "/images/moksha/travel-assistance.png",
    slug: "international-repatriation-guide",
  },
  {
    title: "The Importance of Shraddh Rituals",
    excerpt:
      "Exploring the spiritual significance and traditions behind the Shraddh ceremony.",
    date: "November 2, 2023",
    author: "Moksha Voyage Spiritual Team",
    image: "/images/moksha/spiritual-diya.png",
    slug: "shraddh-rituals-importance",
  },
  {
    title: "How to Support Someone Who is Grieving",
    excerpt:
      "Practical advice and empathetic ways to be there for a friend or family member experiencing loss.",
    date: "December 10, 2023",
    author: "Moksha Voyage Support",
    image: "/images/moksha/grief-support.png",
    slug: "grief-support-guide",
  },
];

export default function BlogPage() {
  return (
    <PublicSiteLayout>
      <section className="bg-[#FAF8F4] px-4 py-9 sm:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#C77B21]">
                <Feather className="h-3.5 w-3.5" />
                Moksha Journal
              </span>

              <h1 className="mt-1 font-serif text-2xl font-medium leading-[1.08] text-[#17202A] sm:text-5xl md:text-[56px]">
                Thoughtful guidance for families.
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-[#5C6570] md:text-base">
                Articles on repatriation, rituals, documentation and family
                support — written with clarity and care.
              </p>
            </div>

            <Link
              href="/resources"
              className="inline-flex h-11 w-fit items-center justify-center rounded-2xl border border-[#E8DED2] bg-white px-5 text-sm font-medium text-[#17202A] transition hover:bg-[#FAF1E6] hover:text-[#C77B21]"
            >
              View Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[24px] border border-[#E8DED2] bg-white p-2 shadow-[0_10px_30px_rgba(23,32,42,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(23,32,42,0.06)]"
              >
                <Link
                  href={`/resources/${post.slug}`}
                  className="relative block overflow-hidden rounded-[18px] bg-[#F5EFE7]"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={520}
                    height={340}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="px-2.5 pb-3 pt-4">
                  <div className="mb-2.5 flex items-center gap-2 text-[11px] font-medium text-[#6A737D]">
                    <Calendar className="h-3.5 w-3.5 text-[#C77B21]" />
                    {post.date}
                  </div>

                  <h2 className="font-serif text-[22px] font-medium leading-[1.18] text-[#17202A] transition group-hover:text-[#C77B21]">
                    <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-[#5C6570]">
                    {post.excerpt}
                  </p>

                  {/* <Link
                    href={`/resources/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#C77B21]"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}