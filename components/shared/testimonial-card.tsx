import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  location: string;
  text: string;
};

export function TestimonialCard({ name, location, text }: TestimonialCardProps) {
  return (
    <article className="rounded-lg border border-[#EDE6DD] bg-white p-4 shadow-sm">
      <div className="flex gap-1 text-[#D1842F]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <Quote className="mt-3 h-4 w-4 text-[#E7C19A]" />
      <p className="mt-2 text-sm leading-6 text-[#4E5661]">{text}</p>
      <p className="mt-4 text-sm font-md">- {name}</p>
      <p className="text-xs text-[#5C6570]">{location}</p>
    </article>
  );
}
