import { ElementType } from "react";
import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ElementType;
};

export function EmptyState({ title, description, icon: Icon = Inbox }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-[#EDE6DD] bg-white p-8 text-center">
      <Icon className="mx-auto h-8 w-8 text-[#C77B21]" />
      <h3 className="mt-3 text-base font-md">{title}</h3>
      {description && <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#5C6570]">{description}</p>}
    </div>
  );
}
