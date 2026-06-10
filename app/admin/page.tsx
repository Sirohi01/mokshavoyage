import Link from "next/link";
import { Activity, AlertTriangle, BarChart3, CalendarDays, IndianRupee, PlaneTakeoff } from "lucide-react";
import { adminModules } from "@/lib/platform-data";

export default function AdminPage() {
  const operations = [
    ["Today's cases", "18", CalendarDays],
    ["Urgent cases", "5", AlertTriangle],
    ["Airport clearances", "7", PlaneTakeoff],
    ["Pending payments", "12", IndianRupee],
    ["Conversion rate", "31%", BarChart3],
    ["Open automations", "44", Activity]
  ];

  return (
    <main className="min-h-screen bg-canvas">
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="text-sm font-md uppercase tracking-[0.18em] text-gold">Moksha Voyage Admin</p>
            <h1 className="font-serif text-3xl font-md">Operations command center</h1>
          </div>
          <Link href="/" className="rounded-full bg-ink px-4 py-2 text-sm font-md text-white">
            Public site
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {operations.map(([label, value, Icon]) => (
            <div key={label as string} className="rounded-lg border border-line bg-white p-4">
              <Icon className="mb-3 h-5 w-5 text-ocean" />
              <p className="text-sm text-ink/55">{label as string}</p>
              <p className="mt-1 text-2xl font-md">{value as string}</p>
            </div>
          ))}
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-line bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-md">Admin modules</h2>
              <span className="rounded-full border border-line px-3 py-1 text-xs font-md text-ocean">CMS driven</span>
            </div>
            <div className="grid gap-3">
              {adminModules.map((module) => {
                const Icon = module.icon;
                return (
                  <article key={module.title} className="grid gap-3 rounded-md border border-line bg-canvas p-4 sm:grid-cols-[40px_1fr_auto]">
                    <Icon className="h-6 w-6 text-ocean" />
                    <div>
                      <h3 className="font-md">{module.title}</h3>
                      <p className="mt-1 text-sm text-ink/65">{module.detail}</p>
                    </div>
                    <span className="text-sm font-md text-gold">{module.count}</span>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-line bg-ink p-5 text-white">
            <h2 className="text-xl font-md">Automation map</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              WhatsApp and email workflows are designed around lead received, booking confirmation, quote sent, document reminders, payment reminders, case updates, completion, and review requests.
            </p>
            <div className="mt-5 grid gap-3">
              {["Lead received", "Quote sent", "Document reminder", "Case update", "Completion message"].map((item) => (
                <div key={item} className="rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm font-md">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
