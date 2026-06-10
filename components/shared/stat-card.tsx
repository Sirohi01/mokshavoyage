import { ElementType } from "react";

type StatCardProps = {
  value: string;
  label: string;
  icon: ElementType;
};

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#F0D9C1] bg-[#FFF9F3] text-[#D1842F]">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xl font-md">{value}</span>
        <span className="text-xs text-[#5C6570]">{label}</span>
      </span>
    </div>
  );
}
