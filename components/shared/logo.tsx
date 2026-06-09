import Image from "next/image";
import Link from "next/link";

type LogoMarkProps = {
  compact?: boolean;
};

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <Link href="/" className="flex items-center" aria-label="Moksha Voyage home">
      <Image
        src="/images/moksha/moksha.png"
        alt="Moksha Voyage"
        width={compact ? 78 : 118}
        height={compact ? 62 : 94}
        priority
        className={compact ? "h-11 w-auto object-contain" : "h-[78px] w-auto object-contain drop-shadow-sm"}
      />
    </Link>
  );
}
