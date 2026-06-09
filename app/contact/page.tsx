import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PublicSiteLayout } from "@/components/public-site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <PublicSiteLayout>
      {/* Hero */}
      <section className="relative flex min-h-[30vh] items-center overflow-hidden bg-[#FFF8EF] px-4 py-12 sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/moksha/hero3.png')] opacity-[0.03] bg-cover bg-center mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1FA463]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D1842F]/10 blur-3xl" />
        
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#D1842F] shadow-sm border border-[#EDE6DD]">
              <Phone className="h-4 w-4" />
              Support Team
            </span>
            <h1 className="font-serif text-4xl font-normal leading-tight text-[#17202A] sm:text-5xl md:text-6xl lg:text-[72px]">
              We're Here When <br/> You Need Us.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#5C6570] sm:text-xl">
              Our compassionate care team is available 24/7 to support you with immediate assistance, funeral planning, and international repatriation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 py-12 sm:px-6 md:py-16">
        <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#FFF1E8]/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          
          {/* Contact Info */}
          <div className="relative space-y-8 rounded-3xl bg-white/60 p-8 backdrop-blur-xl border border-white shadow-xl">
            <div className="absolute top-0 left-0 -z-10 h-full w-full rounded-3xl bg-gradient-to-b from-[#FFF1E8]/30 to-transparent" />
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#17202A]">Get in Touch</h2>
              <div className="mt-4 h-px w-16 bg-[#D1842F]/40" />
              <p className="mt-4 text-[#5C6570] leading-7">Reach out to us anytime. We ensure a swift and respectful response to all inquiries.</p>
            </div>

            <div className="grid gap-6">
              <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-[#EDE6DD] hover:bg-white hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#EF7F6B] transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#17202A] group-hover:text-[#EF7F6B] transition-colors">24/7 Helpline</h3>
                  <p className="mt-1 font-medium text-[#5C6570]">+91 9568259784</p>
                  <p className="mt-1 text-sm text-[#5C6570]">Available round the clock for emergencies.</p>
                </div>
              </div>

              <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-[#EDE6DD] hover:bg-white hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E5F5ED] text-[#1FA463] transition-transform group-hover:scale-110">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#17202A] group-hover:text-[#1FA463] transition-colors">WhatsApp Support</h3>
                  <p className="mt-1 font-medium text-[#5C6570]">+91 9568259784</p>
                  <a href="https://wa.me/919568259784" className="mt-1 inline-flex text-sm font-semibold text-[#1FA463] hover:underline">Chat with us now →</a>
                </div>
              </div>

              <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-[#EDE6DD] hover:bg-white hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F4F4F5] text-[#5C6570] transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#17202A] group-hover:text-[#5C6570] transition-colors">Email Us</h3>
                  <p className="mt-1 font-medium text-[#5C6570]">info@mokshavoyage.com</p>
                  <p className="mt-1 text-sm text-[#5C6570]">We aim to reply within an hour.</p>
                </div>
              </div>

              <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-[#EDE6DD] hover:bg-white hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3E5] text-[#D1842F] transition-transform group-hover:scale-110">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#17202A] group-hover:text-[#D1842F] transition-colors">Global Headquarters</h3>
                  <p className="mt-1 font-medium text-[#5C6570]">New Delhi, India</p>
                  <p className="mt-1 text-sm text-[#5C6570]">Serving families across 50+ countries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white bg-white/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10 relative">
            <h3 className="font-serif text-2xl font-semibold text-[#17202A]">Send a Message</h3>
            <p className="mt-2 text-sm text-[#5C6570]">Fill out the form below and our team will get back to you promptly.</p>
            
            <form className="mt-8 space-y-6" action="#">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-[#343B45]">First Name</label>
                  <Input id="firstName" placeholder="John" className="h-12 border-[#EDE6DD] bg-white/50 focus:border-[#D1842F] focus:ring-[#D1842F] transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-[#343B45]">Last Name</label>
                  <Input id="lastName" placeholder="Doe" className="h-12 border-[#EDE6DD] bg-white/50 focus:border-[#D1842F] focus:ring-[#D1842F] transition-all" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#343B45]">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 border-[#EDE6DD] bg-white/50 focus:border-[#D1842F] focus:ring-[#D1842F] transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#343B45]">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+91 00000 00000" className="h-12 border-[#EDE6DD] bg-white/50 focus:border-[#D1842F] focus:ring-[#D1842F] transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-[#343B45]">Service Required</label>
                <select id="service" className="flex h-12 w-full items-center justify-between rounded-md border border-[#EDE6DD] bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-[#D1842F] focus:ring-1 focus:ring-[#D1842F] transition-all disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select a service</option>
                  <option value="funeral">Funeral Services</option>
                  <option value="repatriation">International Repatriation</option>
                  <option value="spiritual">Spiritual Care</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#343B45]">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you?" className="flex w-full rounded-md border border-[#EDE6DD] bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-[#D1842F] focus:ring-1 focus:ring-[#D1842F] transition-all disabled:cursor-not-allowed disabled:opacity-50" />
              </div>

              <Button type="submit" className="h-14 w-full rounded-xl bg-[#D1842F] text-base font-semibold text-white shadow-lg transition-all hover:bg-[#B66D1F] hover:shadow-xl hover:-translate-y-0.5">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </section>
    </PublicSiteLayout>
  );
}
