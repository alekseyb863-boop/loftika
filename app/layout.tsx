import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FontPreviewPanel from "@/components/dev/FontPreviewPanel";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
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
    <html
      lang="ru"
      className={cn("h-full antialiased font-sans", golos.variable, inter.variable)}
      style={{ ["--font-sans" as string]: "var(--font-golos)" }}
    >
      <body className="min-h-full flex flex-col">
        <FontPreviewPanel />
        {children}
      </body>
    </html>
  );
}
