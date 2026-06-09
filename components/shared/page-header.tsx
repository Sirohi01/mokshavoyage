import { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-[#EDE6DD] bg-[#FCFBF8] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl font-serif text-4xl font-semibold text-[#222831] sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5C6570]">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
