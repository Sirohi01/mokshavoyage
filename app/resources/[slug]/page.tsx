import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
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

  if (!resource) {
    notFound();
  }

  // A very simple Markdown rendering approach using dangerouslySetInnerHTML,
  // but since we control the text, we can do a simple paragraph split or use a generic markdown renderer.
  // We'll use a simple parser for the basic markdown we added (## and ###).
  
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, idx) => {
      if (block.startsWith('### ')) {
        return <h3 key={idx} className="font-serif text-2xl font-semibold text-[#17202A] mt-8 mb-4">{block.replace('### ', '')}</h3>;
      }
      if (block.startsWith('- **')) {
        const listItems = block.split('\n').map(item => item.replace('- ', ''));
        return (
          <ul key={idx} className="list-disc pl-5 mt-4 space-y-2 text-[#5C6570]">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
      }
      return <p key={idx} className="mt-4 text-lg leading-8 text-[#5C6570]">{block}</p>;
    });
  };

  return (
    <PublicSiteLayout>
      <article className="bg-[#FCFBF8]">
        {/* Article Header */}
        <header className="mx-auto max-w-3xl px-4 pb-8 pt-16 sm:px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C77B21] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="rounded bg-[#FFF1E8] px-2.5 py-1 text-xs font-semibold text-[#EF7F6B] uppercase tracking-wider">
              {resource.tag}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-[#5C6570]">
              <Calendar className="h-4 w-4" /> Today
            </span>
          </div>
          
          <h1 className="font-serif text-5xl font-semibold leading-[1.15] text-[#17202A] sm:text-6xl lg:text-[72px]">
            {resource.title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 relative">
          <div className="absolute -left-12 -top-12 -z-10 h-64 w-64 rounded-full bg-[#FFF1E8]/50 blur-3xl" />
          <div className="absolute -right-12 -bottom-12 -z-10 h-64 w-64 rounded-full bg-[#E5F5ED]/50 blur-3xl" />
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-white">
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <div className="prose prose-xl prose-[#5C6570] max-w-none prose-headings:font-serif prose-headings:text-[#17202A] prose-a:text-[#C77B21] hover:prose-a:text-[#B66D1F] prose-li:marker:text-[#D1842F]">
            {renderContent(resource.content)}
          </div>
          
          <div className="mt-20 border-t border-[#EDE6DD] pt-12">
            <div className="relative overflow-hidden rounded-3xl bg-[#17202A] p-10 text-center shadow-2xl">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D1842F]/20 blur-3xl" />
              <h3 className="relative font-serif text-3xl font-semibold text-white">Need Personalized Guidance?</h3>
              <p className="relative mt-4 text-lg text-[#EADCCA] max-w-xl mx-auto">Our care managers are available 24/7 to help you navigate through your specific situation.</p>
              <Link href="/contact" className="relative mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#D1842F] px-10 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#B66D1F] hover:shadow-xl">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PublicSiteLayout>
  );
}
