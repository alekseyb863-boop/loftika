import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";
import LogoControls from "@/components/LogoControls";
import { cn } from "@/lib/utils";

const golos = Golos_Text({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "лофтика — ножки, опоры и металлические каркасы для мебели",
  description:
    "Интернет-магазин лофтика: металлические ножки, опоры и каркасы для столов, стеллажей и лофт-мебели.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={cn("h-full antialiased font-sans", golos.variable)}>
      <body className="min-h-full flex flex-col">{children}
        <LogoControls />
      </body>
    </html>
  );
}
