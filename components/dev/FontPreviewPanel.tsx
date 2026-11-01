"use client";

import { useControls } from "leva";
import { useEffect } from "react";

const LOGO_FONTS = {
  "Golos Text": "--font-golos",
  Unbounded: "--font-unbounded",
} as const;

type LogoFont = keyof typeof LOGO_FONTS;

export default function FontPreviewPanel() {
  const { font } = useControls("Логотип", {
    font: {
      label: "Шрифт",
      value: "Golos Text" satisfies LogoFont,
      options: Object.keys(LOGO_FONTS) as LogoFont[],
    },
  });

  useEffect(() => {
    const token = LOGO_FONTS[font as LogoFont] ?? LOGO_FONTS["Golos Text"];
    document.documentElement.style.setProperty("--font-logo", `var(${token})`);
  }, [font]);

  return null;
}
