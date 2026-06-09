import Link from "next/link";
import { ElementType } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: ElementType;
};

export function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={href} className="rounded-lg border border-[#EDE6DD] bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#E8C299] hover:shadow-card">
      <Icon className="mx-auto h-7 w-7 text-[#D1842F]" />
      <h3 className="mt-3 text-sm font-semibold">{title}</h3>
      <p className="mx-auto mt-1.5 max-w-[160px] text-xs leading-5 text-[#5C6570]">{description}</p>
    </Link>
  );
}
