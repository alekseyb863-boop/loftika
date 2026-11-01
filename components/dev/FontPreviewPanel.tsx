"use client";

import { useControls } from "leva";
import { useEffect } from "react";

const LOGO_FONTS = {
  "Golos Text": "--font-golos",
  Unbounded: "--font-unbounded",
} as const;

type LogoFont = keyof typeof LOGO_FONTS;

const LOGO_WEIGHTS = ["400", "500", "600", "700", "800"] as const;

export default function FontPreviewPanel() {
  const { font, weight, size } = useControls("Логотип", {
    font: {
      label: "Шрифт",
      value: "Golos Text" satisfies LogoFont,
      options: Object.keys(LOGO_FONTS) as LogoFont[],
    },
    weight: {
      label: "Начертание",
      value: "800",
      options: [...LOGO_WEIGHTS],
    },
    size: {
      label: "Размер",
      value: 36,
      min: 24,
      max: 40,
      step: 2,
    },
  });

  useEffect(() => {
    const root = document.documentElement;
    const token = LOGO_FONTS[font as LogoFont] ?? LOGO_FONTS["Golos Text"];
    root.style.setProperty("--font-logo", `var(${token})`);
    root.style.setProperty("--logo-weight", String(weight));
    root.style.setProperty("--logo-size", `${Math.round(Number(size))}px`);
  }, [font, weight, size]);

  return null;
}
