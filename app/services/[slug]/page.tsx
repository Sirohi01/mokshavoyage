import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  Headphones,
  HeartHandshake,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  BadgeCheck,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { servicesData } from "@/lib/data";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { Button } from "@/components/ui/button";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

/* ─── Category definitions (mirrors navbar) ─── */
const CATEGORIES = {
  services: {
    label: "Funeral Services",
    slugs: ["funeral-services", "memorial-services", "ambulance-services", "flower-decor", "live-streaming"],
    pills: [
      { icon: HeartHandshake, label: "Compassionate Care" },
      { icon: ShieldCheck,    label: "Trusted Coordination" },
      { icon: Clock3,         label: "24/7 Availability" },
      { icon: Users,          label: "Dedicated Manager" },
    ],
    stats: [
      { num: "10K+", label: "Families Helped" },
      { num: "500+", label: "Services Monthly" },
      { num: "24/7", label: "Care Desk" },
    ],
    whyCards: [
      { icon: HeartHandshake, title: "Compassionate Handlers", desc: "Every service is managed by staff trained in dignified, respectful care." },
      { icon: ShieldCheck,    title: "End-to-End Support",     desc: "From first call to final rite — nothing is left to chance." },
      { icon: Star,           title: "Trusted by Families",    desc: "Thousands of families have trusted us at their most difficult moment." },
    ],
    commitments: [
      { icon: HeartHandshake, label: "Compassionate handling"       },
      { icon: ShieldCheck,    label: "Privacy & dignity guaranteed" },
      { icon: Clock3,         label: "24/7 on-call care team"       },
      { icon: BadgeCheck,     label: "Verified local partners"      },
    ],
  },
  international: {
    label: "International Services",
    slugs: ["body-repatriation", "ashes-repatriation", "embassy-assistance", "air-ambulance", "international-repatriation", "travel-hospitality", "documentation-support"],
    pills: [
      { icon: Globe2,      label: "50+ Countries"        },
      { icon: FileCheck2,  label: "Embassy Clearances"   },
      { icon: Plane,       label: "Air Cargo Experts"    },
      { icon: Clock3,      label: "24/7 Coordination"    },
    ],
    stats: [
      { num: "50+",  label: "Countries Served" },
      { num: "1.2K+", label: "Cases Handled"  },
      { num: "24/7", label: "Global Desk"     },
    ],
    whyCards: [
      { icon: Globe2,     title: "Global Network",        desc: "Direct partnerships with embassies, airlines & funeral homes in 50+ countries." },
      { icon: FileCheck2, title: "Documentation Experts", desc: "We manage every clearance, NOC and customs requirement on your behalf." },
      { icon: Plane,      title: "End-to-End Transit",    desc: "From preparation to final handover — every international step is covered." },
    ],
    commitments: [
      { icon: Globe2,      label: "50+ country coverage"         },
      { icon: FileCheck2,  label: "Embassy & legal clearances"   },
      { icon: Plane,       label: "International airline experts" },
      { icon: BadgeCheck,  label: "Verified global partners"      },
    ],
  },
  spiritual: {
    label: "Spiritual Care",
    slugs: ["pandit-services", "shraddh-services", "online-rituals", "spiritual-services"],
    pills: [
      { icon: Sparkles,       label: "All Traditions"       },
      { icon: Users,          label: "Experienced Priests"  },
      { icon: Globe2,         label: "Remote & In-Person"   },
      { icon: HeartHandshake, label: "Ritual Guidance"      },
    ],
    stats: [
      { num: "500+", label: "Rituals Performed" },
      { num: "50+",  label: "Traditions Served" },
      { num: "24/7", label: "Spiritual Desk"    },
    ],
    whyCards: [
      { icon: Sparkles,       title: "All Faiths & Traditions", desc: "Pandits and priests trained in regional, linguistic, and sect-specific rites." },
      { icon: HeartHandshake, title: "Guidance at Every Step",  desc: "We walk families through every ritual requirement with clarity and patience." },
      { icon: Globe2,         title: "Remote Participation",    desc: "Online rituals ensure no family member misses their sacred duty." },
    ],
    commitments: [
      { icon: Sparkles,       label: "All traditions respected"      },
      { icon: Users,          label: "Verified, experienced Pandits" },
      { icon: Globe2,         label: "Online & in-person options"    },
      { icon: BadgeCheck,     label: "Complete ritual guidance"      },
    ],
  },
} as const;

type CategoryKey = keyof typeof CATEGORIES;

function getCategory(slug: string): CategoryKey {
  for (const [key, cat] of Object.entries(CATEGORIES)) {
    if ((cat.slugs as readonly string[]).includes(slug)) return key as CategoryKey;
  }
  return "services";
}

/* ─── Per-service overview heading + quote ─── */
const SERVICE_CONTEXT: Record<string, { overviewHeading: string; quote: string }> = {
  "funeral-services":       { overviewHeading: "Complete funeral care, handled with respect.",               quote: "We take care of every detail so your family can focus on remembering and healing." },
  "international-repatriation": { overviewHeading: "Bringing your loved one home, across borders.",          quote: "Geography should never stand between a family and a dignified farewell." },
  "spiritual-services":     { overviewHeading: "Honoring tradition with devotion and care.",                 quote: "Every ritual is performed with the same reverence we would show our own family." },
  "travel-hospitality":     { overviewHeading: "Seamless travel support during difficult times.",            quote: "We handle flights, hotels and transfers so you can be where you need to be." },
  "documentation-support":  { overviewHeading: "Every document handled with precision and urgency.",         quote: "We ensure no paperwork stands in the way of bringing your loved one home." },
  "memorial-services":      { overviewHeading: "Preserving memories that last forever.",                     quote: "A beautiful tribute keeps the spirit of your loved one alive for generations." },
  "ambulance-services":     { overviewHeading: "Prompt, dignified transport when it matters most.",          quote: "Every journey is handled with the care and respect your family deserves." },
  "body-repatriation":      { overviewHeading: "Safe, compliant transport across international borders.",    quote: "We ensure every regulation is met so your loved one travels home with full dignity." },
  "ashes-repatriation":     { overviewHeading: "Respectful transport of cremated remains, worldwide.",       quote: "We handle every clearance and package with the utmost care and sensitivity." },
  "embassy-assistance":     { overviewHeading: "Expert embassy liaison for international clearances.",       quote: "We navigate consular processes so your family doesn't have to." },
  "pandit-services":        { overviewHeading: "Experienced priests for every ceremony and tradition.",      quote: "The right Pandit ensures every rite is performed exactly as tradition requires." },
  "shraddh-services":       { overviewHeading: "Complete arrangements for ancestral rituals.",               quote: "Performed with Vedic authenticity to bring peace to the departed and the living." },
  "online-rituals":         { overviewHeading: "Participate in final rites from anywhere in the world.",     quote: "Distance should never stop a family from fulfilling their sacred duties." },
  "air-ambulance":          { overviewHeading: "Rapid air transport when time is critical.",                 quote: "Swift, professionally coordinated, and handled with complete dignity." },
  "live-streaming":         { overviewHeading: "Let every family member be present, wherever they are.",    quote: "A live connection ensures no one misses the chance to say a final goodbye." },
  "flower-decor":           { overviewHeading: "Beautiful floral tributes for a serene farewell.",           quote: "Fresh, thoughtful arrangements that reflect love, memory and cultural tradition." },
};

/* ─── Related services per category (sidebar) ─── */
const RELATED: Record<CategoryKey, string[]> = {
  services:      ["funeral-services", "memorial-services", "ambulance-services", "flower-decor", "live-streaming"],
  international: ["body-repatriation", "ashes-repatriation", "embassy-assistance", "air-ambulance", "documentation-support"],
  spiritual:     ["pandit-services", "shraddh-services", "online-rituals", "spiritual-services"],
};

/* ══════════════════════════════════════════════════════════ */

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const catKey = getCategory(slug);
  const cat = CATEGORIES[catKey];
  const ctx = SERVICE_CONTEXT[slug] ?? {
    overviewHeading: "Designed for calm, clear and dignified support.",
    quote: "Our promise is to treat your loved one with the same dignity and respect as we would our own family.",
  };

  const relatedServices = servicesData
    .filter((s) => s.slug !== slug && RELATED[catKey].includes(s.slug))
    .slice(0, 5);

  return (
    <PublicSiteLayout>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="bg-[#FAF8F4] px-4 pt-5 pb-2 sm:px-6">
        <div className="mx-auto max-w-7xl mt-9">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">

            {/* Left */}
            <div className="flex flex-col justify-between gap-5">
              <div>
                {/* Category + service badge */}
                <div className="mb-3 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DED2] bg-white px-3 py-1 text-[11px] font-md uppercase tracking-wider text-[#687684] shadow-sm">
                    {cat.label}
                  </span>
                  <span className="text-[#C8BFB4]">/</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8D4BD] bg-[#FFF1E2] px-3 py-1 text-[11px] font-md uppercase tracking-wider text-[#C77B21]">
                    <Icon className="h-3 w-3" />
                    {service.title}
                  </span>
                </div>

                <h1 className="font-serif text-[2.6rem] font-md leading-[1.08] tracking-tight text-[#17202A] sm:text-5xl lg:text-[3.2rem]">
                  {service.title}
                </h1>

                <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-[#536070]">
                  {service.shortDescription}
                </p>

                {/* Category-specific feature pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.pills.map(({ icon: I, label }) => (
                    <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DED2] bg-white px-3 py-1.5 text-[12.5px] font-medium text-[#17202A] shadow-sm">
                      <I className="h-3.5 w-3.5 text-[#C77B21]" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category-specific stats */}
              <div className="grid grid-cols-3 divide-x divide-[#E8DED2] rounded-2xl border border-[#E8DED2] bg-white overflow-hidden shadow-sm">
                {cat.stats.map(({ num, label }) => (
                  <div key={label} className="flex flex-col items-center py-4 px-2">
                    <p className="font-serif text-[1.6rem] font-md text-[#C77B21] leading-none">{num}</p>
                    <p className="mt-1 text-[11px] text-[#687684] text-center">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="tel:+919568259784" className="inline-flex items-center gap-2 rounded-full bg-[#C77B21] px-6 py-2.5 text-[13.5px] font-md text-white shadow-md shadow-[#C77B21]/25 transition hover:bg-[#A96418] no-underline">
                  <Phone className="h-4 w-4" /> Call Now
                </Link>
                <Link href="https://wa.me/919568259784" className="inline-flex items-center gap-2 rounded-full border border-[#CBBBA9] bg-white px-6 py-2.5 text-[13.5px] font-md text-[#17202A] transition hover:bg-[#FAF8F4] no-underline">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="rounded-[26px] border border-[#E8DED2] bg-white p-2 shadow-[0_18px_60px_rgba(23,32,42,0.07)]">
              <div className="relative h-full overflow-hidden rounded-[20px]">
                <Image src={service.heroImage} alt={service.title} width={900} height={620} priority className="h-full min-h-[280px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/50 via-black/10 to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 shadow-sm">
                  <BadgeCheck className="h-4 w-4 text-[#1FA463]" />
                  <span className="text-[12px] font-md text-[#17202A]">Verified Service</span>
                </div>
                {/* <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/30 bg-white/88 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#C77B21]" />
                    <div>
                      <p className="text-[13px] font-md text-[#17202A]">
                        Dedicated care coordination for {service.title.toLowerCase()}.
                      </p>
                      <p className="mt-0.5 text-[11.5px] text-[#687684]">Handled with dignity at every step</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTENT
      ══════════════════════════════════ */}
      <section className="bg-[#FAF8F4] px-4 pb-7 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_300px]">

          {/* Main */}
          <div className="space-y-4">

            {/* Overview */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-white p-5 shadow-sm">
              <span className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21]">Overview</span>
              <h2 className="mt-1.5 font-serif text-[1.6rem] font-md text-[#17202A]">
                {ctx.overviewHeading}
              </h2>
              <p className="mt-2 text-[14px] leading-[1.8] text-[#5C6570]">
                {service.content.overview}
              </p>
              <div className="mt-4 rounded-xl border border-[#E8D4BD] bg-[#FFF8EF] p-4">
                <Quote className="mb-2 h-5 w-5 text-[#C77B21]/40" />
                <p className="font-serif text-[15px] italic text-[#17202A] leading-relaxed">"{ctx.quote}"</p>
                <p className="mt-1.5 text-[12px] text-[#687684]">— Vijay Sharma, Founder & Care Director</p>
              </div>
              {/* Category trust row */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {cat.commitments.map(({ icon: I, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3 py-2.5">
                    <I className="h-3.5 w-3.5 shrink-0 text-[#C77B21]" />
                    <span className="text-[11.5px] font-medium text-[#17202A] leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-white p-5 shadow-sm">
              <span className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21]">Included</span>
              <h3 className="mt-1.5 font-serif text-[1.6rem] font-md text-[#17202A]">What's included</h3>
              <p className="mt-1 text-[13.5px] text-[#5C6570]">Every detail is managed — so your family can focus on what truly matters.</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.content.whatIsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3.5 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1FA463]" />
                    <span className="text-[13px] font-medium leading-[1.6] text-[#5C6570]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-white p-5 shadow-sm">
              <span className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21]">Process</span>
              <h3 className="mt-1.5 font-serif text-[1.6rem] font-md text-[#17202A]">How our care team handles it</h3>
              <p className="mt-1 text-[13.5px] text-[#5C6570]">A clear, compassionate process from the first call to final completion.</p>
              <div className="mt-4 space-y-3">
                {service.content.process.map((step, idx) => (
                  <div key={idx} className="grid gap-3 rounded-xl border border-[#E8DED2] bg-[#FAF8F4] p-3.5 transition hover:bg-white sm:grid-cols-[44px_1fr]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-md text-[#C77B21] shadow-sm ring-1 ring-[#E8DED2]">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-md text-[#17202A]">{step.title}</h4>
                      <p className="mt-1 text-[13px] leading-[1.6] text-[#5C6570]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why us — category-specific */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-white p-5 shadow-sm">
              <span className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21]">Why us</span>
              <h3 className="mt-1.5 font-serif text-[1.6rem] font-md text-[#17202A]">Why families choose Moksha Voyage</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {cat.whyCards.map(({ icon: I, title, desc }) => (
                  <div key={title} className="rounded-xl border border-[#E8DED2] bg-[#FAF8F4] p-4">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1E2] text-[#C77B21]">
                      <I className="h-4 w-4" />
                    </div>
                    <p className="text-[13.5px] font-md text-[#17202A] mb-1">{title}</p>
                    <p className="text-[12.5px] leading-[1.6] text-[#5C6570]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">

            {/* CTA */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1E2] text-[#C77B21]">
                <Headphones className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-[1.1rem] font-md text-[#17202A]">Need assistance?</h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5C6570]">
                Our care team is ready to guide your family with {service.title.toLowerCase()} and related support.
              </p>
              <div className="mt-4 grid gap-2">
                <Button asChild className="h-10 rounded-xl bg-[#C77B21] text-white shadow-none hover:bg-[#9B5F18] text-[13px]">
                  <Link href="tel:+919568259784"><Phone className="mr-2 h-4 w-4" />Call Care Team</Link>
                </Button>
                <Button asChild variant="outline" className="h-10 rounded-xl border-[#E8DED2] bg-[#FAF8F4] text-[#17202A] hover:bg-white text-[13px]">
                  <Link href="https://wa.me/919568259784"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Support</Link>
                </Button>
              </div>
              <p className="mt-3 text-[11.5px] leading-5 text-[#7A8490]">Available 24/7 for urgent coordination and family guidance.</p>
            </div>

            {/* Category commitments */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-[#FFF8EF] p-4 shadow-sm">
              <p className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21] mb-3">Our commitment</p>
              {cat.commitments.map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-2.5 py-2 border-b border-[#E8DED2] last:border-0">
                  <I className="h-4 w-4 shrink-0 text-[#C77B21]" />
                  <span className="text-[12.5px] font-medium text-[#17202A]">{label}</span>
                </div>
              ))}
            </div>

            {/* Related services from same category */}
            <div className="rounded-[22px] border border-[#E8DED2] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21] mb-1">Related</p>
              <h3 className="font-serif text-[1rem] font-md text-[#17202A] mb-3">{cat.label}</h3>
              <div className="grid gap-1.5">
                {relatedServices.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center justify-between rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3 py-2.5 text-[12.5px] font-medium text-[#5C6570] transition hover:bg-white hover:text-[#C77B21]">
                    <span>{s.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-50 transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
              <Link href="/services" className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-md text-[#C77B21] hover:text-[#9B5F18]">
                All services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </aside>
        </div>
      </section>

    </PublicSiteLayout>
  );
}
