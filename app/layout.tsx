import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/lib/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "Moksha Voyage | Global Funeral, Repatriation & Spiritual Care",
  description:
    "A premium global platform for funeral services, international repatriation, spiritual care, family support, and case management.",
  openGraph: {
    title: "Moksha Voyage",
    description: "Trusted global funeral, repatriation, travel, and spiritual care platform.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(playfair.variable, inter.variable)}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
