import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, action, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between", align === "center" && "items-center text-center md:block", className)}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-1.5 font-serif text-2xl font-md text-[#222831] sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5C6570]">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
