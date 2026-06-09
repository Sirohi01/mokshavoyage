"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircle2, ClipboardList, HandHeart, Heart, Phone, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type WorkStep = {
  number: number;
  title: string;
  shortText: string;
  details: string;
  checklist: string[];
  image: string;
  icon: LucideIcon;
};

const steps: WorkStep[] = [
  {
    number: 1,
    title: "Reach Out",
    shortText: "Contact us anytime. We are available 24/7.",
    details: "A care coordinator listens calmly, understands the situation, location, urgency, service need and preferred way to communicate with the family.",
    checklist: ["24/7 helpline response", "Urgency and location captured", "Family contact preference noted"],
    image: "/images/moksha/1.png",
    icon: Phone
  },
  {
    number: 2,
    title: "Share Details",
    shortText: "Share your requirements with our care experts.",
    details: "We collect the required details, documents, ceremony preferences, travel needs and family contacts so nothing important is missed.",
    checklist: ["Documents checklist prepared", "Ritual and service needs mapped", "Travel and family details recorded"],
    image: "/images/moksha/2.png",
    icon: ClipboardList
  },
  {
    number: 3,
    title: "We Take Care",
    shortText: "We handle everything with dignity and compassion.",
    details: "Our team coordinates vendors, rituals, documentation, transportation, embassy or airport workflows and keeps the family updated.",
    checklist: ["Coordinator assigned", "Vendors and service team aligned", "Timeline created for every task"],
    image: "/images/moksha/3.png",
    icon: HandHeart
  },
  {
    number: 4,
    title: "Stay Updated",
    shortText: "Get real-time updates at every step.",
    details: "Families receive timely updates through phone, WhatsApp and the portal, including timeline, documents, payments and coordinator notes.",
    checklist: ["WhatsApp updates enabled", "Portal timeline maintained", "Documents and payments tracked"],
    image: "/images/moksha/4.png",
    icon: CheckCircle2
  },
  {
    number: 5,
    title: "Support Beyond",
    shortText: "We are with you even after the services.",
    details: "After completion, we continue helping with memorials, remembrance ceremonies, documents, feedback and grief support resources.",
    checklist: ["Digital memorial guidance", "Annual remembrance support", "Post-service documents and feedback"],
    image: "/images/moksha/5.png",
    icon: Heart
  }
];

export function HowItWorksCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const Icon = activeStep.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="process" className="px-4 pb-5 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-1 font-serif text-2xl font-semibold text-[#222831] sm:text-3xl">
          Simple Steps. Complete Support.
        </h2>

        <div className="mt-5 grid items-center gap-6 rounded-xl border border-[#EDE6DD] bg-white p-2 shadow-sm lg:grid-cols-[1fr_420px] lg:p-5">
          <div className="flex min-h-[420px] flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#F0D9C1] bg-[#FFF9F3] text-[#D1842F]">
                <Icon className="h-6 w-6" />
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#C77B21] text-xs font-bold text-white">
                {activeStep.number}
              </span>
            </div>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-[#17202A]">{activeStep.title}</h3>
            <p className="mt-2 max-w-xl text-base leading-7 text-[#4E5661]">{activeStep.shortText}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4E5661]">{activeStep.details}</p>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {activeStep.checklist.map((item) => (
                <div key={item} className="rounded-lg border border-[#EDE6DD] bg-[#FCFBF8] px-3 py-2.5">
                  <CheckCircle2 className="mb-1.5 h-4 w-4 text-[#C77B21]" />
                  <p className="text-xs font-semibold leading-5 text-[#343B45]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg bg-[#FFF7EF] px-4 py-3 text-sm text-[#4E5661]">
              <span className="font-semibold text-[#C77B21]">Care desk:</span>
              <span>Coordinator-led support with clear next steps before any handover.</span>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-5">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "rounded-lg border px-3 py-3 text-left transition",
                      isActive ? "border-[#C77B21] bg-[#FFF7EF] shadow-sm" : "border-[#EDE6DD] bg-white hover:bg-[#FCFBF8]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <StepIcon className={cn("h-4 w-4", isActive ? "text-[#C77B21]" : "text-[#D1842F]")} />
                      <span className="text-xs font-bold text-[#C77B21]">{step.number}</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold leading-4 text-[#17202A]">{step.title}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl border border-[#EDE6DD] bg-[#FCFBF8] shadow-card">
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
