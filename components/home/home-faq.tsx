"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, HelpCircle, ImageIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const homeFaqs = [
  {
    question: "How long does international repatriation take?",
    answer: "The timeline depends on the country of origin, embassy regulations, and available flights. Generally, it takes between 3 to 7 days. Our team begins the documentation process immediately to ensure the fastest possible return.",
    image: "/images/moksha/faq-1.png",
  },
  {
    question: "Do you handle all the embassy and customs paperwork?",
    answer: "Yes, we provide end-to-end assistance. Our experts coordinate with local hospitals, police, embassies, and airlines to secure all necessary clearances, NOCs, and health certificates on your behalf.",
    image: "/images/moksha/faq-2.png",
  },
  {
    question: "Are you available 24/7 for immediate assistance?",
    answer: "Absolutely. We understand that emergencies can happen at any time. Our care team is available 24 hours a day, 7 days a week, 365 days a year to guide you from the very first call.",
    image: "/images/moksha/faq-3.png",
  },
  {
    question: "Can you arrange spiritual rituals according to our customs?",
    answer: "Yes. We respect all cultural and religious traditions. We can arrange specialized pandits, priests, and specific rituals like Shraddh, Antim Sanskar, or custom memorial services according to your family's beliefs.",
    image: "/images/moksha/faq-4.png",
  }
];

export function HomeFaq() {
  const [activeFaq, setActiveFaq] = useState("item-0");
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const activeIndex = parseInt(activeFaq.replace("item-", ""));
  const currentFaq = homeFaqs[activeIndex] || homeFaqs[0];

  return (
    <section className="px-4 pt-4 pb-5 sm:px-6 md:pt-8 md:pb-8 bg-[#FCFBF8] relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#D1842F]/5 blur-3xl" />
      <div className="mx-auto max-w-7xl">

        {/* Header on Top */}
        <div className="text-center mb-2 max-w-3xl mx-auto">
          <p className="eyebrow">Quick Answers</p>
          <h2 className="mt-2 font-serif text-3xl font-md leading-tight text-[#17202A] sm:text-4xl">
            Questions Families Often Ask
          </h2>
          <p className="mt-4 text-lg text-[#5C6570]">
            We understand that the process can be overwhelming. Here are quick answers to help bring some clarity. If you need more details, we are always here to talk.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-start">

          {/* Left Side: 1:1 Image */}
          <div className="w-full max-w-[360px] mx-auto lg:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F9F5F0] border border-[#EDE6DD] shadow-sm flex items-center justify-center">
              {!imgError[activeFaq] ? (
                <Image
                  key={activeFaq} // Force remount for animation
                  src={currentFaq.image}
                  alt="FAQ Image"
                  fill
                  className="object-cover animate-in fade-in zoom-in-95 duration-500"
                  onError={() => setImgError((prev) => ({ ...prev, [activeFaq]: true }))}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 text-[#D1842F]/40 animate-in fade-in duration-500">
                  <ImageIcon className="h-16 w-16 opacity-50" />
                  <p className="text-sm font-medium text-center px-4">
                    Add image:<br />
                    <code className="text-xs">{currentFaq.image}</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full flex flex-col h-full justify-center">
            <Accordion
              type="single"
              collapsible
              value={activeFaq}
              onValueChange={(val) => {
                // If user clicks the active one to close it, val is empty.
                // We can either keep it open or let it close. 
                // Let's force one to always be open to show an image, so if val is empty, keep current.
                if (val) setActiveFaq(val);
              }}
              className="w-full space-y-4"
            >
              {homeFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-[#EDE6DD] bg-white px-6 shadow-sm transition-all data-[state=open]:border-[#C77B21] data-[state=open]:shadow-md hover:border-[#D1842F]/50"
                >
                  <AccordionTrigger className="text-left font-serif text-[17px] font-md text-[#17202A] hover:no-underline hover:text-[#C77B21] py-5">
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

            <div className="mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#EDE6DD] px-6 py-3 text-sm font-md text-[#17202A] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#D1842F]"
              >
                Read All FAQs <ArrowRight className="h-4 w-4 text-[#D1842F]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
