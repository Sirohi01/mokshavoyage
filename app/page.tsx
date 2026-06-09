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
import { TestimonialsMarquee } from "@/components/home/testimonials-marquee";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ResourceCard } from "@/components/shared/resource-card";
import { SectionHeader } from "@/components/shared/section-header";

const services: [string, string, LucideIcon][] = [
  ["Funeral Services", "Complete funeral arrangements", HandHeart],
  ["International Repatriation", "Body and ashes repatriation worldwide", Plane],
  ["Spiritual Services", "Pandit services, rituals and ceremonies", Sparkles],
  ["Travel & Hospitality", "Flights, hotels and family travel support", Hotel],
  ["Documentation Support", "All documentation and embassy assistance", FileCheck2],
  ["Memorial Services", "Digital memorials and tribute pages", BookOpen],
  ["Live Streaming", "Live telecast of rituals and ceremonies", PlaySquare],
  ["Ambulance Services", "Local and international transport", Ambulance],
  ["Flower & Decor", "Floral arrangements and decorations", Flower2],
  ["More Services", "Explore our wide range of support services", ClipboardList]
];

const serviceItems = services.map(([title, description, icon]) => ({ title, description, icon }));

const trust: [string, string, LucideIcon][] = [
  ["Experienced Team", "Trained professionals with years of experience", UsersRound],
  ["Transparent Pricing", "No hidden charges, complete clarity", CircleDollarSign],
  ["Global Network", "Strong network across 50+ countries", Globe2],
  ["Personal Care", "Dedicated care manager for every family", HeartHandshake],
  ["Privacy & Respect", "We treat every family with dignity and respect", ShieldCheck]
];

const resources: [string, string, string][] = [
  ["Guide", "International Repatriation Process Explained", "/images/moksha/travel-assistance.png"],
  ["Spiritual", "Understanding Shraddh Rituals & Their Importance", "/images/moksha/spiritual-diya.png"],
  ["Guide", "Documents Required for Repatriation", "/images/moksha/documentation-guide.png"],
  ["Support", "How to Support Someone Who is Grieving", "/images/moksha/grief-support.png"]
];

const airlinePartners = ["BRITISH AIRWAYS", "Emirates", "QATAR AIRWAYS", "SINGAPORE AIRLINES", "TURKISH AIRLINES", "AIR INDIA"];

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

      <HowItWorksCarousel />

      <ServicesShowcase services={serviceItems} />

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

      <TestimonialsMarquee />

      <CtaBanner />

      <section id="resources" className="px-4 py-7 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Resources & guides"
            title="Helpful Information for You"
            action={
              <Link href="#resources" className="hidden items-center gap-2 rounded-md border border-[#D1842F]/45 px-4 py-2 text-sm font-semibold text-[#B66D1F] sm:inline-flex">
                View All Resources <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="grid gap-4 md:grid-cols-4">
            {resources.map(([tag, title, src]) => (
              <ResourceCard key={title} tag={tag} title={title} image={src} />
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
