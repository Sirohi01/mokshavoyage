import { PublicSiteLayout } from "@/components/public-site-layout";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "Understanding the Repatriation Process",
    excerpt: "A comprehensive guide to the steps involved in bringing a loved one home from abroad.",
    date: "October 15, 2023",
    author: "Moksha Voyage Care Team",
    image: "/images/moksha/travel-assistance.png",
    slug: "international-repatriation-guide" // Points to an existing resource for now
  },
  {
    title: "The Importance of Shraddh Rituals",
    excerpt: "Exploring the spiritual significance and traditions behind the Shraddh ceremony.",
    date: "November 2, 2023",
    author: "Moksha Voyage Spiritual Team",
    image: "/images/moksha/spiritual-diya.png",
    slug: "shraddh-rituals-importance"
  },
  {
    title: "How to Support Someone Who is Grieving",
    excerpt: "Practical advice and empathetic ways to be there for a friend or family member experiencing loss.",
    date: "December 10, 2023",
    author: "Moksha Voyage Support",
    image: "/images/moksha/grief-support.png",
    slug: "grief-support-guide"
  }
];

export default function BlogPage() {
  return (
    <PublicSiteLayout>
      {/* Hero Section */}
      <section className="relative flex min-h-[30vh] items-center justify-center overflow-hidden bg-[#FFF8EF] px-4 py-12 text-center sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/moksha/hero3.png')] opacity-[0.03] bg-cover bg-center mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D1842F]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
            Our Journal
          </span>
          <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
            Moksha Voyage Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C6570] sm:text-xl">
            Insights, guides, and thoughtful articles on funeral care, repatriation, and supporting loved ones.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="group flex flex-col overflow-hidden rounded-3xl border border-[#EDE6DD] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Link href={`/resources/${post.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F8F9FA]">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-xs font-medium text-[#5C6570]">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#17202A] group-hover:text-[#C77B21] transition-colors">
                    <Link href={`/resources/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#5C6570]">
                    {post.excerpt}
                  </p>
                  <div className="mt-6">
                    <Link href={`/resources/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#C77B21]">
                      Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}
