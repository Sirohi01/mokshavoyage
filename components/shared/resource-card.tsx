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
    <article className="overflow-hidden rounded-lg border border-[#EDE6DD] bg-white shadow-sm">
      <div className="relative aspect-square">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
        <span className="absolute left-3 top-3 rounded bg-[#F28A35] px-2 py-1 text-xs font-semibold text-white">{tag}</span>
      </div>
      <div className="p-3.5">
        <h3 className="min-h-10 text-sm font-semibold leading-5">{title}</h3>
        <Link href={href} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#C77B21]">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
