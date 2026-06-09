import { Globe2 } from "lucide-react";

type CountryBadgeProps = {
  name: string;
};

export function CountryBadge({ name }: CountryBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#EDE6DD] bg-white px-4 py-2 text-sm font-semibold text-[#343B45] shadow-sm">
      <Globe2 className="h-4 w-4 text-[#567C8D]" />
      {name}
    </span>
  );
}
