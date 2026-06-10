import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ResourceCardProps = {
  tag: string;
  title: string;
  image: string;
  href?: string;
};

export function ResourceCard({ tag, title, image, href = "#resources" }: ResourceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[14px] border border-[#EDE6DD] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-md text-[#D1842F] uppercase tracking-wider">{tag}</span>
      </Link>
      <div className="flex flex-col p-6 h-full">
        <h3 className="font-serif text-lg font-md leading-tight text-[#17202A] group-hover:text-[#D1842F] transition-colors">{title}</h3>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-md text-[#C77B21]">
          Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
