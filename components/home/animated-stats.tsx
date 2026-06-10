"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, FileCheck2, Globe2, HandHeart, HeartHandshake, MapPin, PlaneTakeoff, ShieldCheck, Sparkles, UsersRound, type LucideIcon } from "lucide-react";

type AnimatedStat = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

const statSets: AnimatedStat[][] = [
  [
    { value: 10000, suffix: "+", label: "Families Served", icon: HandHeart },
    { value: 50, suffix: "+", label: "Countries Covered", icon: Globe2 },
    { value: 500, suffix: "+", label: "Cities Worldwide", icon: UsersRound },
    { value: 24, suffix: "/7", label: "Support", icon: Clock3 },
    { value: 70, suffix: "+", label: "Services Offered", icon: ShieldCheck },
    { value: 100, suffix: "%", label: "End-to-End Care", icon: HeartHandshake }
  ],
  [
    { value: 1200, suffix: "+", label: "Cases Coordinated", icon: FileCheck2 },
    { value: 300, suffix: "+", label: "Clearances Managed", icon: PlaneTakeoff },
    { value: 2500, suffix: "+", label: "Rituals Arranged", icon: Sparkles },
    { value: 24, suffix: "/7", label: "Care Desk", icon: Clock3 },
    { value: 80, suffix: "+", label: "Partner Network", icon: Globe2 },
    { value: 30, suffix: "+", label: "Major Hubs", icon: MapPin }
  ]
];

export function AnimatedStats() {
  const [setIndex, setSetIndex] = useState(0);
  const activeStats = statSets[setIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSetIndex((current) => (current + 1) % statSets.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white px-2 py-2 sm:px-3">
      <div className="mx-auto grid max-w-[1780px] gap-2 sm:grid-cols-2 lg:grid-cols-6">
        {activeStats.map((stat) => (
          <AnimatedStatCard key={`${stat.label}-${stat.value}`} stat={stat} />
        ))}
      </div>
    </section>
  );
}

function AnimatedStatCard({ stat }: { stat: AnimatedStat }) {
  const [count, setCount] = useState(1);
  const Icon = stat.icon;

  const formattedCount = useMemo(() => {
    return count.toLocaleString("en-IN");
  }, [count]);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.max(1, Math.round(stat.value * eased));

      setCount(nextValue);

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, [stat.value]);

  return (
    <article className="flex min-h-[72px] items-center gap-3 rounded-lg border border-[#EDE6DD] bg-[#FCFBF8] px-3.5 py-2.5 shadow-sm transition-all duration-300">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#F0D9C1] bg-white text-[#D1842F]">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-xl font-md tracking-tight text-[#17202A]">
          {formattedCount}{stat.suffix}
        </span>
        <span className="block text-sm text-[#4E5661]">{stat.label}</span>
      </span>
    </article>
  );
}
