import Link from "next/link";
import {
  Ambulance,
  BookOpen,
  CircleDollarSign,
  FileCheck2,
  Flower2,
  Globe2,
  HandHeart,
  HeartHandshake,
  Hotel,
  Plane,
  PlaySquare,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  type LucideIcon,
  UsersRound
} from "lucide-react";
import { AnimatedStats } from "@/components/home/animated-stats";
import { HeroCarousel, type HeroSlide } from "@/components/home/hero-carousel";
import { HowItWorksCarousel } from "@/components/home/how-it-works-carousel";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { HearseVanSection } from "@/components/home/hearse-van-section";
import { TestimonialsMarquee } from "@/components/home/testimonials-marquee";
import { PartnerMarquee } from "@/components/home/partner-marquee";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { GlobalReach } from "@/components/home/global-reach";
import { HomeFaq } from "@/components/home/home-faq";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ResourceCard } from "@/components/shared/resource-card";
import { SectionHeader } from "@/components/shared/section-header";
import { servicesData, resourcesData } from "@/lib/data";

const serviceItems = servicesData.map(s => ({
  title: s.title,
  description: s.shortDescription,
  icon: s.icon,
  slug: s.slug
})).slice(0, 10); // keep to 10 for showcase

const airlinePartners = ["BRITISH AIRWAYS", "Emirates", "QATAR AIRWAYS", "SINGAPORE AIRLINES", "TURKISH AIRLINES", "AIR INDIA"];

const trust: [string, string, LucideIcon][] = [
  ["Experienced Team", "Trained professionals with years of experience", UsersRound],
  ["Transparent Pricing", "No hidden charges, complete clarity", CircleDollarSign],
  ["Global Network", "Strong network across 50+ countries", Globe2],
  ["Personal Care", "Dedicated care manager for every family", HeartHandshake],
  ["Privacy & Respect", "We treat every family with dignity and respect", ShieldCheck]
];

const heroSlides: HeroSlide[] = [
  {
    image: "/images/moksha/hero-lotus-sunrise.png",
    title: "Compassionate Care",
    highlight: "When You Need It Most",
    description: "We are here to support you with dignified funeral services, international repatriation, spiritual care and everything in between."
  },
  {
    image: "/images/moksha/hero1.png",
    title: "Global Support",
    highlight: "For Families Everywhere",
    description: "Coordinated care for funeral services, repatriation, documentation and travel across countries."
  },
  {
    image: "/images/moksha/hero2.png",
    title: "Dignified Service",
    highlight: "Handled End-to-End",
    description: "From first call to completion, our team keeps every step calm, clear and respectful."
  },
  {
    image: "/images/moksha/hero3.png",
    title: "Trusted Guidance",
    highlight: "Across Every Step",
    description: "Our care team supports families with clear coordination, timely updates and compassionate service."
  }
];

export default function Home() {
  return (
    <PublicSiteLayout>
      <HeroCarousel slides={heroSlides} />

      <AnimatedStats />

      <PartnerMarquee />

      <HowItWorksCarousel />

      <PhilosophySection />

      <ServicesShowcase services={serviceItems} />

      <HearseVanSection />

      <section className="px-4 py-7 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why families trust us" title="Care You Can Rely On" />
          <div className="mt-4 grid gap-4 md:grid-cols-5">
            {trust.map(([title, body, Icon]) => (
              <div key={title as string} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#FFF1E8] text-[#EF7F6B]">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{title as string}</span>
                  <span className="mt-1 block text-xs leading-5 text-[#5C6570]">{body as string}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalReach />

      <TestimonialsMarquee />

      <CtaBanner />

      <HomeFaq />

      <section id="resources" className="px-4 py-7 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Resources & guides"
            title="Helpful Information for You"
            action={
              <Link href="/resources" className="hidden items-center gap-2 rounded-md border border-[#D1842F]/45 px-4 py-2 text-sm font-semibold text-[#B66D1F] sm:inline-flex">
                View All Resources <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {resourcesData.map((resource) => (
              <ResourceCard key={resource.title} tag={resource.tag} title={resource.title} image={resource.image} href={`/resources/${resource.slug}`} />
            ))}
          </div>
          {/* <div className="mt-5 grid gap-3 rounded-lg border border-[#EDE6DD] bg-white px-5 py-3 text-center text-sm font-bold text-[#7A2E2E] shadow-soft sm:grid-cols-3 lg:grid-cols-6">
            {airlinePartners.map((partner) => <span key={partner}>{partner}</span>)}
          </div> */}
        </div>
      </section>
    </PublicSiteLayout>
  );
}
