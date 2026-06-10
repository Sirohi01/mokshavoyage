import { PublicSiteLayout } from "@/components/public-site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is international repatriation?",
    answer:
      "International repatriation is the process of returning a deceased person's body or ashes to their home country. This involves coordinating with embassies, airlines, and local authorities to ensure all legal and logistical requirements are met.",
  },
  {
    question: "How long does the repatriation process take?",
    answer:
      "The timeline varies depending on the countries involved, the cause of death, and embassy procedures. On average, it can take anywhere from 4 to 10 days. Our team works to coordinate the process as smoothly and quickly as possible.",
  },
  {
    question: "What documents are required for repatriation?",
    answer:
      "Commonly required documents include the original death certificate, embalming certificate, no-objection certificate from the embassy, police clearance if applicable, and the deceased person's passport. We assist in gathering, translating, and coordinating all necessary paperwork.",
  },
  {
    question: "Do you provide embalming services?",
    answer:
      "Yes, professional embalming is usually required for international air transport of mortal remains. We coordinate with certified facilities that follow aviation, health, and destination-country requirements.",
  },
  {
    question: "Can family members travel on the same flight?",
    answer:
      "Yes, in most cases, we can help coordinate passenger tickets for family members on the same flight, depending on airline policy and seat availability.",
  },
  {
    question: "How much does repatriation cost?",
    answer:
      "Costs depend on the destination country, airline charges, documentation, embassy fees, and transport requirements. We provide a transparent, itemized estimate before proceeding.",
  },
];

export default function FAQPage() {
  return (
    <PublicSiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FAF8F4] px-4 py-5 sm:px-6 md:py-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,123,33,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(23,32,42,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_380px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-4 py-1.5 text-xs font-md uppercase tracking-[0.16em] text-[#C77B21] shadow-sm mt-4">
                <HelpCircle className="h-3.5 w-3.5" />
                Help Center
              </span>

              <h1 className="mt-2 max-w-3xl font-serif text-3xl font-md leading-[1.1] tracking-tight text-[#17202A] sm:text-4xl md:text-5xl">
                Answers for families who need clear guidance.
              </h1>

              <p className="mt-3 max-w-xl text-[14.5px] leading-[1.75] text-[#5C6570]">
                Find helpful information about international repatriation,
                documentation, rituals, funeral planning and family assistance.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Documentation support", "Global coordination", "24/7 care assistance"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-[#E8DED2] bg-white px-3.5 py-2 shadow-sm">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#C77B21]" />
                    <span className="text-[12.5px] font-medium text-[#17202A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-[#E8DED2] bg-white p-2 shadow-[0_18px_60px_rgba(23,32,42,0.07)]">
              <div className="relative overflow-hidden rounded-[20px]">
                <img
                  src="/images/moksha/hero1.png"
                  alt="Moksha Voyage Help Center"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#FAF8F4] px-4 pb-7 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_300px]">

          {/* FAQ list */}
          <div className="rounded-[24px] border border-[#E8DED2] bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-4">
              <span className="text-[11px] font-md uppercase tracking-[0.16em] text-[#C77B21]">
                Common Questions
              </span>
              <h2 className="mt-1.5 font-serif text-2xl font-md text-[#17202A]">
                Frequently asked questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-4 shadow-none transition-all data-[state=open]:bg-white data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="py-3.5 text-left font-serif text-[15px] font-md leading-snug text-[#17202A] hover:text-[#C77B21] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3.5 text-[13px] leading-[1.75] text-[#5C6570]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="rounded-[24px] border border-[#E8DED2] bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF1E6] text-[#C77B21]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-md text-[#17202A]">
                Still need guidance?
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5C6570]">
                Our care team can help your family understand the right next step with clarity and compassion.
              </p>
              <div className="mt-4 grid gap-2">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-[#C77B21] px-4 text-[13px] font-md text-white transition hover:bg-[#9B5F18] no-underline"
                >
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="tel:+919568259784"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-4 text-[13px] font-md text-[#17202A] transition hover:bg-white no-underline"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Care Team
                </Link>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#E8DED2] bg-white p-4 shadow-sm">
              <h3 className="font-serif text-[1rem] font-md text-[#17202A] mb-3">
                Quick support areas
              </h3>
              <div className="grid gap-1.5">
                {[
                  "International Repatriation",
                  "Embassy Documentation",
                  "Funeral Arrangements",
                  "Travel & Hospitality",
                  "Spiritual Services",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3.5 py-2.5 text-[12.5px] font-medium text-[#5C6570]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>
    </PublicSiteLayout>
  );
}
