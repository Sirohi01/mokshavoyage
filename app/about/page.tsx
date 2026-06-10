import Image from "next/image";
import Link from "next/link";
import { PublicSiteLayout } from "@/components/public-site-layout";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Clock,
  FileCheck,
  FileText,
  Globe2,
  Heart,
  HeartHandshake,
  Lock,
  Phone,
  PhoneCall,
  Quote,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UsersRound,
} from "lucide-react";

const stats = [
  { icon: Globe2, num: "50+", label: "Countries Served" },
  { icon: UsersRound, num: "10K+", label: "Families Supported" },
  { icon: FileCheck, num: "1,200+", label: "Cases Coordinated" },
  { icon: Clock, num: "24/7", label: "Care Desk" },
];

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "Reach Out",
    desc: "Contact us anytime. We are available 24/7.",
    image: "/images/moksha/reach-out.png",
  },
  {
    icon: FileText,
    num: "02",
    title: "Share Details",
    desc: "Share your requirements with our care experts.",
    image: "/images/moksha/share-details.png",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "We Take Care",
    desc: "We handle everything with dignity and compassion.",
    image: "/images/moksha/we-take-care.png",
  },
  {
    icon: Bell,
    num: "04",
    title: "Stay Updated",
    desc: "Get real-time updates at every step.",
    image: "/images/moksha/stay-updated.png",
  },
  {
    icon: Heart,
    num: "05",
    title: "Support Beyond",
    desc: "We are with you even after the services.",
    image: "/images/moksha/support.png",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Empathy First",
    desc: "We support families with patience, warmth, and emotional sensitivity.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "International support for repatriation, travel, and documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Dignity Always",
    desc: "Every farewell is handled with care, respect, and complete privacy.",
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "Transparent Pricing", sub: "No hidden charges" },
  { icon: UserCheck, label: "Personal Care Manager", sub: "Dedicated support" },
  { icon: Lock, label: "Privacy First", sub: "Secure & respectful" },
  { icon: BadgeCheck, label: "Verified Network", sub: "Trusted partners" },
];

export default function AboutPage() {
  return (
    <PublicSiteLayout>
      <main className="bg-[#FAF8F4] text-[#17202A]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#E8DED2]">
          <div className="absolute inset-0">
            <Image
              src="/images/moksha/about-hero-bg.png"
              alt="Moksha Voyage"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/70 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-9">
            <div className="max-w-2xl">
              {/* <span className="mb-1 mt-2 inline-flex items-center gap-2 rounded-full border border-[#E8D4BD] bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C27A24]">
                <Globe2 className="h-3.5 w-3.5" />
                About Moksha Voyage
              </span> */}

              <h1 className="font-serif mt-3 text-[42px] font-md leading-[1.05] text-[#121A24] sm:text-[56px] lg:text-[68px]">
                Compassion across borders.
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#536070]">
                We help families arrange dignified funeral, spiritual,
                repatriation, travel, and care services with clarity, empathy,
                and complete support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C77B21] px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-[#C77B21]/20 transition hover:bg-[#A96418] no-underline"
                >
                  <Phone className="h-4 w-4" />
                  Get Immediate Help
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#CBBBA9] bg-white/70 px-5 py-3 text-[13px] font-semibold text-[#17202A] transition hover:bg-white no-underline"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(({ icon: Icon, num, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#E8DED2] bg-white/82 p-4 shadow-sm backdrop-blur"
                >
                  <Icon className="mb-2 h-5 w-5 text-[#C77B21]" />
                  <p className="font-serif text-[28px] font-semibold leading-none text-[#17202A]">
                    {num}
                  </p>
                  <p className="mt-1 text-[12px] text-[#617080]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="border-b border-[#E8DED2] bg-white px-4 py-5 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[#E8DED2] bg-[#F7EFE6] shadow-sm lg:aspect-auto">
              <Image
                src="/images/moksha/our-philosophy.png"
                alt="Our Philosophy"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-[28px] border border-[#E8DED2] bg-[#FAF8F4] p-4 sm:p-6 flex flex-col justify-center">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C77B21]">
                Our Philosophy
              </p>

              <h2 className="font-serif text-[32px] font-md leading-tight text-[#121A24] sm:text-[42px]">
                More than logistics. A hand to hold.
              </h2>

              <p className="mt-4 text-[14px] leading-[1.85] text-[#536070]">
                At Moksha Voyage, we understand that losing a loved one is one
                of life's most profound challenges. That is why our approach is
                rooted not just in logistics, but in deep, unwavering empathy.
              </p>

              <p className="mt-3 text-[14px] leading-[1.85] text-[#536070]">
                Whether it is bringing a family member home across international
                borders or arranging a dignified farewell locally, we handle the
                complexities so you have the space to grieve, remember, and heal.
              </p>

              <div className="mt-5 rounded-2xl border border-[#E8D4BD] bg-white p-5">
                <Quote className="mb-3 h-6 w-6 text-[#C77B21]/45" />
                <p className="font-serif text-[20px] italic leading-[1.55] text-[#17202A]">
                  “Our promise is simple: to treat your loved one with the same
                  dignity and respect as we would our own family.”
                </p>
                <div className="mt-4">
                  <p className="text-[13px] font-semibold text-[#17202A]">
                    Vijay Sharma
                  </p>
                  <p className="text-[12px] text-[#687684]">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-b border-[#E8DED2] px-4 py-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 max-w-2xl">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C77B21]">
                What guides us
              </p>
              <h2 className="font-serif text-[32px] font-md leading-tight sm:text-[42px]">
                Built on care, trust and dignity.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-[#E8DED2] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E2] text-[#C77B21]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#17202A]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5C6570]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-b border-[#E8DED2] bg-white px-4 py-5 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C77B21]">
                  How it works
                </p>
                <h2 className="font-serif text-[32px] font-md leading-tight sm:text-[42px]">
                  Simple steps. Complete support.
                </h2>
              </div>

              <p className="max-w-md text-[13px] leading-[1.7] text-[#5C6570]">
                From the first call to post-service care, every step is handled
                with clarity and compassion.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map(({ icon: Icon, num, title, desc, image }) => (
                <div
                  key={title}
                  className="group overflow-hidden rounded-[22px] border border-[#E8DED2] bg-[#FAF8F4] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold text-[#C77B21] backdrop-blur">
                      {num}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#C77B21]" />
                      <h3 className="text-[15px] font-semibold text-[#17202A]">
                        {title}
                      </h3>
                    </div>
                    <p className="text-[12.5px] leading-[1.65] text-[#5C6570]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-[#E8DED2] bg-[#FFF8EF] px-4 py-5 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1E2] border border-[#E8D4BD]">
                  <Icon className="h-5 w-5 text-[#C77B21]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#17202A]">
                    {label}
                  </p>
                  <p className="text-[12px] text-[#687684]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-5 sm:px-6">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#E8DED2] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-5 sm:p-6 lg:p-7">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C77B21]">
                  We are here for you
                </p>

                <h2 className="font-serif text-[34px] font-md leading-tight sm:text-[46px]">
                  Support when your family needs it most.
                </h2>

                <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-[#5C6570]">
                  Our care team is available 24/7 for funeral arrangements,
                  international repatriation, travel support, documentation, and
                  spiritual services.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C77B21] px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-[#C77B21]/20 transition hover:bg-[#A96418] no-underline"
                  >
                    <Phone className="h-4 w-4" />
                    Request Help
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-[#CBBBA9] bg-[#FAF8F4] px-5 py-3 text-[13px] font-semibold text-[#17202A] transition hover:bg-white no-underline"
                  >
                    View Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[280px]">
                <Image
                  src="/images/moksha/cta-care.png"
                  alt="Moksha Voyage Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicSiteLayout>
  );
}