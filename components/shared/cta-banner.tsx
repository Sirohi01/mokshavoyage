import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-4 text-center sm:px-6">
      <Image src="/images/moksha/assistance-flowers.png" alt="Soft flowers for immediate assistance" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-white/68" />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl font-semibold">Need Immediate Assistance?</h2>
        <p className="mt-2 text-sm text-[#4E5661]">We are here 24/7 to support you in your difficult time.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link href="tel:+919568259784" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#C77B21] px-4 text-sm font-semibold text-white shadow-sm">
            <Phone className="h-4 w-4" /> +91 9568259784
          </Link>
          <Link href="https://wa.me/919568259784" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-[#1F2933] shadow-sm">
            <MessageCircle className="h-4 w-4 text-[#1FA463]" /> WhatsApp Us
          </Link>
          <Link href="#contact" className="inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-[#1F2933] shadow-sm">
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
}
