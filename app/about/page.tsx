import Image from "next/image";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { CheckCircle2, Globe2, HeartHandshake, UsersRound } from "lucide-react";

export default function AboutPage() {
  return (
    <PublicSiteLayout>
      {/* Hero */}
      <section className="relative flex min-h-[30vh] items-center overflow-hidden bg-[#FCFBF8] px-4 py-12 sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/moksha/hero3.png')] opacity-[0.03] bg-cover bg-center mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D1842F]/10 blur-3xl" />
        
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
                <Globe2 className="h-4 w-4" />
                Our Story
              </span>
              <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
                Compassion <br/> Across Borders.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#5C6570] sm:text-xl">
                Moksha Voyage was founded with a singular purpose: to ease the burden on families during their most difficult moments. We provide dignified, transparent, and globally connected funeral and repatriation services.
              </p>
            </div>
            
            {/* Glassmorphic Stats Panel in Hero */}
            <div className="hidden lg:block relative mx-auto w-full max-w-sm rounded-3xl border border-[#EDE6DD] bg-white/70 p-8 backdrop-blur-xl shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-[#EDE6DD] pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3E5] text-[#D1842F] shadow-sm">
                    <Globe2 className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-[#17202A]">50+</p>
                    <p className="text-sm font-medium text-[#5C6570]">Countries Served</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F5ED] text-[#1FA463] shadow-sm">
                    <UsersRound className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-[#17202A]">10K+</p>
                    <p className="text-sm font-medium text-[#5C6570]">Families Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative px-4 py-12 sm:px-6 md:py-16">
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#FFF1E8]/30 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#17202A] sm:text-4xl md:text-5xl">Our Mission & Vision</h2>
              <div className="mt-4 h-px w-24 bg-[#D1842F]/40" />
              <div className="mt-8 space-y-6 text-lg leading-8 text-[#5C6570]">
                <p>
                  We believe that every life deserves to be honored with respect, regardless of where they pass away. Our mission is to bridge geographical gaps and administrative hurdles to bring loved ones home.
                </p>
                <p>
                  We envision a world where families don't have to navigate complex embassy rules or logistics while grieving. We step in as your trusted care managers, handling everything from start to finish.
                </p>
              </div>
              <div className="mt-10 lg:hidden grid grid-cols-2 gap-6 border-t border-[#EDE6DD] pt-8">
                <div>
                  <p className="text-4xl font-serif font-bold text-[#C77B21]">50+</p>
                  <p className="mt-2 text-sm font-semibold text-[#17202A]">Countries Covered</p>
                </div>
                <div>
                  <p className="text-4xl font-serif font-bold text-[#C77B21]">10K+</p>
                  <p className="mt-2 text-sm font-semibold text-[#17202A]">Families Supported</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl border border-[#EDE6DD]">
              <Image src="/images/moksha/hero-lotus-sunrise.png" alt="Mission" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-[#17202A] sm:text-4xl">Why Families Trust Us</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[#D1842F]/40" />
            <p className="mt-4 text-lg text-[#5C6570]">The principles that guide every interaction we have.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Value 1 */}
            <div className="group rounded-3xl border border-[#EDE6DD] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#D1842F]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-[#FFF3E5] opacity-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3E5] text-[#D1842F] transition-colors group-hover:bg-[#D1842F] group-hover:text-white">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <h3 className="relative text-xl font-bold text-[#17202A] group-hover:text-[#C77B21] transition-colors">Deep Empathy</h3>
              <p className="relative mt-4 leading-7 text-[#5C6570]">
                We treat every family like our own. Our care managers are trained to provide emotional support alongside logistical efficiency.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group rounded-3xl border border-[#EDE6DD] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#1FA463]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-[#E5F5ED] opacity-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F5ED] text-[#1FA463] transition-colors group-hover:bg-[#1FA463] group-hover:text-white">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="relative text-xl font-bold text-[#17202A] group-hover:text-[#1FA463] transition-colors">Global Network</h3>
              <p className="relative mt-4 leading-7 text-[#5C6570]">
                With connections in over 50 countries, we seamlessly navigate international laws, embassies, and airline regulations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group rounded-3xl border border-[#EDE6DD] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#EF7F6B]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-[#FFF1E8] opacity-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#EF7F6B] transition-colors group-hover:bg-[#EF7F6B] group-hover:text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="relative text-xl font-bold text-[#17202A] group-hover:text-[#EF7F6B] transition-colors">Transparency</h3>
              <p className="relative mt-4 leading-7 text-[#5C6570]">
                No hidden charges or confusing clauses. We provide clear communication and precise updates at every step of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Closing CTA */}
      <section className="relative overflow-hidden bg-[#17202A] px-4 py-16 sm:px-6 md:py-20">
        <Image src="/images/moksha/bg.png" alt="" fill className="object-cover opacity-10 mix-blend-overlay" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#D1842F]/20 text-[#D1842F]">
            <UsersRound className="h-10 w-10" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">A Team Dedicated to You</h2>
          <p className="mt-6 text-lg leading-8 text-[#EADCCA]">
            From our 24/7 support staff to our ground handlers and legal experts, every member of Moksha Voyage is dedicated to ensuring a peaceful, respectful farewell for your loved one.
          </p>
          <div className="mt-10">
            <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-[#D1842F] px-8 text-lg font-semibold text-white shadow-lg hover:bg-[#B66D1F]">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </PublicSiteLayout>
  );
}
