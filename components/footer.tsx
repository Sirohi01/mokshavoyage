import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LogoMark } from "@/components/shared/logo";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Funeral Services", href: "/services/funeral-services" },
      { label: "Repatriation Services", href: "/services/international-repatriation" },
      { label: "Spiritual Services", href: "/services/spiritual-services" },
      { label: "Travel & Hospitality", href: "/services/travel-hospitality" },
      { label: "More Services", href: "/services" }
    ]
  },
  {
    title: "International",
    links: [
      { label: "Body Repatriation", href: "/services/body-repatriation" },
      { label: "Ashes Repatriation", href: "/services/ashes-repatriation" },
      { label: "Documentation Support", href: "/services/documentation-support" },
      { label: "Air Ambulance", href: "/services/air-ambulance" },
      { label: "Embassy Assistance", href: "/services/embassy-assistance" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact Us", href: "/contact" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#EDE6DD] bg-[#FCFBF8] px-4 pt-6 sm:px-6 md:pt-6 text-[#17202A]">
      {/* Background Graphic / Texture */}
      <div className="absolute -bottom-40 -right-40 opacity-[0.03] pointer-events-none">
        <Image src="/images/moksha/hero2.png" alt="" width={800} height={800} className="grayscale object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] border-b border-[#EDE6DD] pb-4">
          
          {/* Brand & Description */}
          <div className="pr-0 md:pr-8">
            <LogoMark />
            <p className="mt-4 text-[14px] leading-6 text-[#5C6570]">
              Compassionate care with a global reach. We provide end-to-end support for repatriation and funeral services, ensuring your loved ones are treated with the utmost dignity.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EDE6DD] bg-white text-[#5C6570] transition-all hover:-translate-y-1 hover:bg-[#D1842F] hover:text-white hover:border-[#D1842F] shadow-sm">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EDE6DD] bg-white text-[#5C6570] transition-all hover:-translate-y-1 hover:bg-[#D1842F] hover:text-white hover:border-[#D1842F] shadow-sm">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EDE6DD] bg-white text-[#5C6570] transition-all hover:-translate-y-1 hover:bg-[#D1842F] hover:text-white hover:border-[#D1842F] shadow-sm">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EDE6DD] bg-white text-[#5C6570] transition-all hover:-translate-y-1 hover:bg-[#D1842F] hover:text-white hover:border-[#D1842F] shadow-sm">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-serif text-lg font-md text-[#17202A]">{column.title}</h3>
              <ul className="space-y-2.5 text-[14px] text-[#5C6570]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-[#D1842F]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-md text-[#17202A]">Emergency Support</h3>
            <div className="space-y-3 rounded-xl border border-[#EDE6DD] bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#D1842F]" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#5C6570]">24/7 Helpline</p>
                  <p className="mt-1 text-base font-md text-[#17202A] tracking-wide">+91 9568259784</p>
                </div>
              </div>
              <div className="h-px bg-[#EDE6DD]" />
              <div className="flex items-center gap-3 text-sm text-[#5C6570]">
                <Mail className="h-4 w-4 shrink-0 text-[#D1842F]" />
                <a href="mailto:info@mokshavoyage.com" className="hover:text-[#D1842F] transition-colors">info@mokshavoyage.com</a>
              </div>
            </div>

            <form className="mt-6 flex flex-col gap-2">
              <p className="text-sm font-medium text-[#17202A]">Stay updated with our news</p>
              <div className="flex">
                <Input aria-label="Newsletter email" placeholder="Enter your email" className="h-10 rounded-r-none border-[#EDE6DD] bg-white text-[#17202A] placeholder:text-[#A0AAB5] focus-visible:ring-[#D1842F] focus-visible:ring-offset-0 shadow-sm" />
                <Button type="button" className="h-10 rounded-l-none bg-[#D1842F] px-4 text-white hover:bg-[#C77B21] shadow-sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-4 pb-4 sm:flex-row">
          <p className="text-sm text-[#5C6570]">
            © {new Date().getFullYear()} Moksha Voyage. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#5C6570]">
            <Link href="#" className="hover:text-[#D1842F] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D1842F] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#D1842F] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
