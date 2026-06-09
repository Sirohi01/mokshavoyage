import Link from "next/link";
import { Download, FileText, MessageSquareText, Receipt, UserRoundCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-shell";
import { portalTimeline } from "@/lib/platform-data";

export default function PortalPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-canvas px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Family portal</p>
              <h1 className="font-serif text-4xl font-semibold">Case MV-2026-0148</h1>
              <p className="mt-2 text-sm text-ink/65">International repatriation from London to Mumbai.</p>
            </div>
            <Link href="/" className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              Back to site
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="space-y-4">
              {[
                ["Coordinator", "Ananya Rao", UserRoundCheck],
                ["Documents", "2 pending", FileText],
                ["Payments", "Invoice awaiting approval", Receipt],
                ["Messages", "4 unread updates", MessageSquareText]
              ].map(([label, value, Icon]) => (
                <div key={label as string} className="rounded-lg border border-line bg-white p-5">
                  <Icon className="mb-3 h-6 w-6 text-ocean" />
                  <p className="text-sm text-ink/55">{label as string}</p>
                  <p className="mt-1 font-semibold">{value as string}</p>
                </div>
              ))}
            </aside>

            <section className="rounded-lg border border-line bg-white p-5">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">Case timeline</h2>
                  <p className="text-sm text-ink/60">Live operational updates visible to approved family members.</p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
                  <Download className="h-4 w-4" />
                  Downloads
                </button>
              </div>
              <div className="space-y-3">
                {portalTimeline.map((item) => (
                  <article key={`${item.time}-${item.title}`} className="grid gap-3 rounded-md border border-line bg-canvas p-4 sm:grid-cols-[80px_1fr_auto]">
                    <time className="text-sm font-semibold text-ocean">{item.time}</time>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink/65">{item.detail}</p>
                    </div>
                    <span className="h-fit rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold">{item.status}</span>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
