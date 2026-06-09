import { PublicSiteLayout } from "@/components/public-site-layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is international repatriation?",
    answer: "International repatriation is the process of returning a deceased person's body or ashes to their home country. This involves coordinating with embassies, airlines, and local authorities to ensure all legal and logistical requirements are met."
  },
  {
    question: "How long does the repatriation process take?",
    answer: "The timeline varies significantly depending on the countries involved, the cause of death, and embassy procedures. On average, it can take anywhere from 4 to 10 days. Our team works tirelessly to expedite the process wherever possible."
  },
  {
    question: "What documents are required for repatriation?",
    answer: "Commonly required documents include the original death certificate, embalming certificate, no-objection certificate (NOC) from the embassy, police clearance (if applicable), and the deceased's passport. We assist in gathering and translating all necessary paperwork."
  },
  {
    question: "Do you provide embalming services?",
    answer: "Yes, professional embalming is a mandatory requirement for international air transport of mortal remains. We have certified embalming facilities that comply with international aviation and health regulations."
  },
  {
    question: "Can family members travel on the same flight?",
    answer: "Yes, in most cases, we can coordinate with the airline to book passenger tickets for family members on the same flight carrying the remains. This depends on seat availability and airline policies."
  },
  {
    question: "How much does repatriation cost?",
    answer: "Costs vary based on the destination country, flight charges, embassy fees, and the type of casket required for international transport. We provide a transparent, itemized quote upfront with no hidden charges."
  }
];

export default function FAQPage() {
  return (
    <PublicSiteLayout>
      {/* Hero Section */}
      <section className="relative flex min-h-[30vh] items-center justify-center overflow-hidden bg-[#FFF8EF] px-4 py-12 text-center sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/moksha/hero1.png')] opacity-[0.03] bg-cover bg-center mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D1842F]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
            Help Center
          </span>
          <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C6570] sm:text-xl">
            Find answers to common questions about funeral planning, international repatriation, and our support services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#FFF1E8]/40 blur-3xl" />
        
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="rounded-[2.5rem] border border-white bg-white/80 p-8 shadow-2xl backdrop-blur-xl sm:p-14 relative">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-[#EDE6DD] rounded-2xl px-6 bg-white shadow-sm data-[state=open]:border-[#D1842F]/30 data-[state=open]:shadow-md transition-all">
                  <AccordionTrigger className="text-left font-serif text-xl font-semibold text-[#17202A] hover:text-[#C77B21] hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-[#5C6570] pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 relative overflow-hidden rounded-[2.5rem] bg-[#17202A] p-10 text-center shadow-2xl sm:p-14 border border-white/10">
            <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[#1FA463]/20 blur-3xl" />
            
            <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-xl">
              <MessageCircle className="h-10 w-10" />
            </div>
            <h3 className="relative font-serif text-3xl font-semibold text-white drop-shadow-md">Still have questions?</h3>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-[#EADCCA] drop-shadow-md">
              If you couldn't find the answer you were looking for, our care team is available 24/7 to assist you.
            </p>
            <Link href="/contact" className="relative mt-10 inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-[#17202A] shadow-xl transition-all hover:-translate-y-0.5 hover:bg-[#F8F9FA] hover:shadow-2xl">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}
