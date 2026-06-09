import { ReactNode } from "react";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-shell";
import { cn } from "@/lib/utils";

type PublicSiteLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function PublicSiteLayout({ children, className }: PublicSiteLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className={cn("min-h-screen bg-[#FCFBF8] text-[#222831]", className)}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
