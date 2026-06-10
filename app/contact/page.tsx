import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactMethods = [
  {
    icon: Phone,
    title: "24/7 Helpline",
    value: "+91-9654900525",
    sub: "Immediate assistance anytime",
    tone: "gold",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    value: "+91-9654900525",
    sub: "Quick updates and coordination",
    tone: "green",
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "info@mokshavoyage.com",
    sub: "We aim to reply within an hour",
    tone: "neutral",
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    value: "Namo Gange Wellness Pvt Ltd, 12/29, Site-II, Sunrise Industrial Area, Mohan Nagar",
    sub: "Serving families across 50+ countries",
    tone: "gold",
  },
];

const trustItems = [
  { icon: Clock, title: "24/7 Care Desk", sub: "Always available" },
  { icon: Globe2, title: "50+ Countries", sub: "Global assistance" },
  { icon: UserCheck, title: "Care Manager", sub: "Dedicated support" },
  { icon: ShieldCheck, title: "Privacy First", sub: "Handled with dignity" },
];

export default function ContactPage() {
  return (
    <PublicSiteLayout>
      <main className="bg-[#FAF8F4] text-[#17202A]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#E8DED2] px-4 py-5 sm:px-6 lg:py-7">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#C77B21]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-[360px] w-[360px] rounded-full bg-[#567C8D]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end mt-7">
              <div>
                <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-[#E8D4BD] bg-white/80 px-3 py-1 text-[11px] font-md uppercase tracking-[0.22em] text-[#C77B21] shadow-sm">
                  <Phone className="h-3.5 w-3.5" />
                  Contact Moksha Voyage
                </span>

                <h1 className="mt-3 font-serif text-[38px] font-md leading-[1.04] tracking-[-0.03em] text-[#121A24] sm:text-[52px] lg:text-[62px]">
                  We are here when your family needs support.
                </h1>

                <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.75] text-[#536070]">
                  Reach our care team for funeral arrangements, international
                  repatriation, documentation, travel support, and spiritual
                  services — handled with clarity, dignity, and compassion.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E8DED2] bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#E8D4BD] bg-[#FFF1E2] text-[#C77B21]">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-md text-[#17202A]">
                      Immediate care desk available 24/7
                    </p>
                    <p className="mt-1 text-[12.5px] leading-[1.6] text-[#5C6570]">
                      For urgent cases, call or WhatsApp our team directly.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="tel:+919568259784"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#C77B21] px-4 py-2 text-[12px] font-md text-white no-underline shadow-sm transition hover:bg-[#A96418]"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/919568259784"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#CBBBA9] bg-[#FAF8F4] px-4 py-2 text-[12px] font-md text-[#17202A] no-underline transition hover:bg-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-[#E8DED2] bg-white/70 p-3 shadow-sm backdrop-blur"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF1E2] text-[#C77B21]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[12.5px] font-md text-[#17202A]">{title}</p>
                    <p className="text-[11.5px] text-[#687684]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN */}
        <section className="px-4 py-4 sm:px-6 lg:py-5">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            {/* LEFT CONTACT METHODS */}
            <div className="flex h-full flex-col rounded-[26px] border border-[#E8DED2] bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-4">
                <p className="mb-1.5 text-[11px] font-md uppercase tracking-[0.24em] text-[#C77B21]">
                  Reach Out
                </p>
                <h2 className="font-serif text-[26px] font-md leading-tight tracking-[-0.02em] text-[#121A24] sm:text-[32px]">
                  Choose the support channel that works best.
                </h2>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#5C6570]">
                  Our team responds with care, privacy, and clear next steps.
                </p>
              </div>

              <div className="grid flex-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
                {contactMethods.map(({ icon: Icon, title, value, sub, tone }) => (
                  <div
                    key={title}
                    className="group rounded-[18px] border border-[#E8DED2] bg-[#FAF8F4] p-3.5 transition hover:-translate-y-0.5 hover:border-[#C77B21]/40 hover:bg-[#FFF9F2] hover:shadow-md"
                  >
                    <div className="flex gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                          tone === "green"
                            ? "border-[#BFE6D0] bg-[#E9F8EF] text-[#1FA463]"
                            : "border-[#E8D4BD] bg-[#FFF1E2] text-[#C77B21]"
                        }`}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-md text-[#17202A]">{title}</p>
                        <p className="mt-0.5 break-words text-[12.5px] font-medium text-[#536070]">{value}</p>
                        <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#687684]">{sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex h-full flex-col rounded-[26px] border border-[#E8DED2] bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-4 flex flex-col gap-2.5 border-b border-[#E8DED2] pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-1.5 text-[11px] font-md uppercase tracking-[0.24em] text-[#C77B21]">
                    Send a Message
                  </p>
                  <h3 className="font-serif text-[26px] font-md leading-tight tracking-[-0.02em] text-[#121A24] sm:text-[32px]">
                    Tell us how we can help.
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[13px] leading-[1.7] text-[#5C6570]">
                    Share a few details and our care team will contact you shortly.
                  </p>
                </div>
                <div className="w-fit shrink-0 rounded-full border border-[#E8D4BD] bg-[#FFF8EF] px-3 py-1.5 text-[11.5px] font-md text-[#C77B21]">
                  Private & Confidential
                </div>
              </div>

              <form className="grid gap-3" action="#">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Full Name">
                    <Input
                      placeholder="Enter your name"
                      className="h-11 rounded-xl border-[#E8DED2] bg-[#FAF8F4] text-[13px] focus-visible:ring-[#C77B21]"
                    />
                  </Field>
                  <Field label="Phone Number">
                    <Input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="h-11 rounded-xl border-[#E8DED2] bg-[#FAF8F4] text-[13px] focus-visible:ring-[#C77B21]"
                    />
                  </Field>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Email Address">
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="h-11 rounded-xl border-[#E8DED2] bg-[#FAF8F4] text-[13px] focus-visible:ring-[#C77B21]"
                    />
                  </Field>
                  <Field label="Country / City">
                    <Input
                      placeholder="Delhi, India"
                      className="h-11 rounded-xl border-[#E8DED2] bg-[#FAF8F4] text-[13px] focus-visible:ring-[#C77B21]"
                    />
                  </Field>
                </div>

                <Field label="Service Required">
                  <select className="flex h-11 w-full rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3 text-[13px] text-[#17202A] outline-none transition focus:border-[#C77B21] focus:ring-1 focus:ring-[#C77B21]">
                    <option value="">Select a service</option>
                    <option value="funeral">Funeral Services</option>
                    <option value="repatriation">International Repatriation</option>
                    <option value="ambulance">Ambulance / Hearse Van</option>
                    <option value="air-ambulance">Air Ambulance</option>
                    <option value="spiritual">Pandit / Spiritual Services</option>
                    <option value="documentation">Documentation Support</option>
                    <option value="travel">Travel & Hospitality</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    rows={4}
                    placeholder="Please share your requirement..."
                    className="w-full resize-none rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3 py-2.5 text-[13px] text-[#17202A] outline-none transition placeholder:text-[#9AA3AF] focus:border-[#C77B21] focus:ring-1 focus:ring-[#C77B21]"
                  />
                </Field>

                <label className="flex gap-2 text-[12px] leading-[1.6] text-[#687684]">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-[#E8DED2] accent-[#C77B21]"
                  />
                  I agree to be contacted by Moksha Voyage via call, WhatsApp, and email regarding my request.
                </label>

                <Button
                  type="submit"
                  className="h-12 rounded-2xl bg-[#C77B21] text-[13.5px] font-md text-white shadow-lg shadow-[#C77B21]/20 transition hover:-translate-y-0.5 hover:bg-[#A96418]"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 pb-6 sm:px-6">
          <div className="mx-auto max-w-7xl rounded-[26px] border border-[#E8DED2] bg-[#FFF8EF] p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-md uppercase tracking-[0.24em] text-[#C77B21]">
                  Immediate Assistance
                </p>
                <h2 className="mt-1 font-serif text-[24px] font-md leading-tight text-[#17202A] sm:text-[30px]">
                  You focus on your family. We'll handle the rest.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="tel:+919568259784"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C77B21] px-5 py-2.5 text-[13px] font-md text-white no-underline transition hover:bg-[#A96418]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919568259784"
                  className="inline-flex items-center gap-2 rounded-full border border-[#CBBBA9] bg-white px-5 py-2.5 text-[13px] font-md text-[#17202A] no-underline transition hover:bg-[#FAF8F4]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicSiteLayout>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-md text-[#343B45]">
        {label}
      </span>
      {children}
    </label>
  );
}
