import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";

const homeFaqs = [
  {
    question: "How long does international repatriation take?",
    answer: "The timeline depends on the country of origin, embassy regulations, and available flights. Generally, it takes between 3 to 7 days. Our team begins the documentation process immediately to ensure the fastest possible return."
  },
  {
    question: "Do you handle all the embassy and customs paperwork?",
    answer: "Yes, we provide end-to-end assistance. Our experts coordinate with local hospitals, police, embassies, and airlines to secure all necessary clearances, NOCs, and health certificates on your behalf."
  },
  {
    question: "Are you available 24/7 for immediate assistance?",
    answer: "Absolutely. We understand that emergencies can happen at any time. Our care team is available 24 hours a day, 7 days a week, 365 days a year to guide you from the very first call."
  },
  {
    question: "Can you arrange spiritual rituals according to our customs?",
    answer: "Yes. We respect all cultural and religious traditions. We can arrange specialized pandits, priests, and specific rituals like Shraddh, Antim Sanskar, or custom memorial services according to your family's beliefs."
  }
];

export function HomeFaq() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-16 bg-[#FCFBF8] relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#D1842F]/5 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20 items-start">
          
          {/* Header Side */}
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Quick Answers</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#17202A] sm:text-4xl md:text-5xl">
              Questions Families Often Ask
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5C6570]">
              We understand that the process can be overwhelming. Here are quick answers to help bring some clarity. If you need more details, we are always here to talk.
            </p>
            
            <Link 
              href="/faq" 
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white border border-[#EDE6DD] px-6 py-3 text-sm font-semibold text-[#17202A] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#D1842F]"
            >
              Read All FAQs <ArrowRight className="h-4 w-4 text-[#D1842F]" />
            </Link>
          </div>
          
          {/* Accordion Side */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {homeFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="rounded-2xl border border-[#EDE6DD] bg-white px-6 shadow-sm transition-all data-[state=open]:border-[#C77B21] data-[state=open]:shadow-md hover:border-[#D1842F]/50"
                >
                  <AccordionTrigger className="text-left font-serif text-[17px] font-semibold text-[#17202A] hover:no-underline hover:text-[#C77B21] py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 shrink-0 text-[#E7C19A]" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-[#5C6570] pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
