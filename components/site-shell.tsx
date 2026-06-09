import Link from "next/link";
import { ChevronDown, Menu, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: [
    { label: "Funeral Services", href: "/services/funeral-services" },
    { label: "Memorial Services", href: "/services/memorial-services" },
    { label: "Ambulance Services", href: "/services/ambulance-services" }
  ] },
  { label: "International Services", href: "/services", children: [
    { label: "Body Repatriation", href: "/services/body-repatriation" },
    { label: "Ashes Repatriation", href: "/services/ashes-repatriation" },
    { label: "Embassy Assistance", href: "/services/embassy-assistance" },
    { label: "Air Ambulance", href: "/services/air-ambulance" }
  ] },
  { label: "Spiritual Care", href: "/services", children: [
    { label: "Pandit Services", href: "/services/pandit-services" },
    { label: "Shraddh Services", href: "/services/shraddh-services" },
    { label: "Online Rituals", href: "/services/online-rituals" }
  ] },
  { label: "Resources", href: "/resources", children: [
    { label: "Guides", href: "/resources/international-repatriation-guide" },
    { label: "FAQs", href: "/faq" },
    { label: "Blog", href: "/blog" }
  ] },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

export function SiteHeader() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <header id="top" className="sticky top-0 z-40 overflow-visible border-b border-[#EDE6DD] bg-white/96 backdrop-blur-xl">
        <div className="relative mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[170px_1fr_150px] lg:gap-4">
          <div className="relative h-full w-[110px] shrink-0">
            <div className="absolute top-2 left-0 z-50 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-[#EDE6DD]">
              <LogoMark />
            </div>
          </div>
          <nav className="hidden items-center justify-center gap-5 whitespace-nowrap text-[15px] font-medium leading-5 text-[#343B45] lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="inline-flex items-center justify-center gap-1 text-center outline-none">
                    {item.label} <ChevronDown className="h-3.5 w-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-56">
                    <DropdownMenuItem asChild>
                      <Link href={item.href}>Overview</Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.label} href={item.href}>{item.label}</Link>
              )
            )}
          </nav>
          <div className="flex items-center justify-end">
            <Button asChild className="hidden h-7 rounded-sm bg-[#F28A35] px-2 text-sm font-semibold text-white shadow-sm hover:bg-[#D97724] sm:inline-flex">
              <Link href="/#contact">Request a Callback</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle>
            <LogoMark compact />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-5 grid gap-1">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#343B45] hover:bg-[#FFF7EF]">
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 border-l border-[#EDE6DD] pl-2">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className="block rounded-md px-3 py-2 text-sm text-[#5C6570] hover:bg-[#FFF7EF] hover:text-[#C77B21]">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-2">
          <Button asChild className="h-10 bg-[#C77B21] text-white hover:bg-[#B66D1F]">
            <Link href="tel:+919568259784"><Phone className="mr-2 h-4 w-4" />Call Now</Link>
          </Button>
          <Button asChild variant="outline" className="h-10">
            <Link href="https://wa.me/919568259784"><MessageCircle className="mr-2 h-4 w-4 text-[#1FA463]" />WhatsApp Us</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
