import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { LogoMark } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    title: "International Services",
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
    <footer className="border-t border-[#EDE6DD] bg-white px-4 pt-12 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-12 pb-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_1.1fr] lg:gap-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#5C6570]">
            Compassionate care. Global reach. End-to-end support for you and your loved ones.
          </p>
          <Link href="#top" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C77B21]">
            Back to top <ArrowUp className="h-4 w-4" />
          </Link>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
            <ul className="space-y-2 text-sm text-[#5C6570]">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#C77B21] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
          <div className="space-y-3 text-sm text-[#5C6570]">
            <p className="flex gap-2">
              <Phone className="h-4 w-4 text-[#C77B21]" />
              <span>24/7 Helpline<br />+91 9568259784</span>
            </p>
            <p className="flex gap-2">
              <Mail className="h-4 w-4 text-[#C77B21]" />
              <span>info@mokshavoyage.com</span>
            </p>
            <p className="flex gap-2">
              <MapPin className="h-4 w-4 text-[#C77B21]" />
              <span>New Delhi, India</span>
            </p>
          </div>
          <form className="mt-5 flex gap-2">
            <Input aria-label="Newsletter email" placeholder="Email updates" className="h-10 bg-[#FCFBF8]" />
            <Button type="button" className="h-10 bg-[#C77B21] text-white hover:bg-[#B66D1F]">Join</Button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-[#EDE6DD] py-4 text-xs text-[#5C6570] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 Moksha Voyage. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}
