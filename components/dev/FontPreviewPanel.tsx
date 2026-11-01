"use client";

import { useControls } from "leva";
import { useEffect } from "react";

const FONT_OPTIONS = {
  "Golos Text": "--font-golos",
  Inter: "--font-inter",
} as const;

type FontLabel = keyof typeof FONT_OPTIONS;

export default function FontPreviewPanel() {
  const { font } = useControls("Шрифт", {
    font: {
      value: "Golos Text" satisfies FontLabel,
      options: Object.keys(FONT_OPTIONS) as FontLabel[],
    },
  });

  useEffect(() => {
    const token = FONT_OPTIONS[font as FontLabel] ?? FONT_OPTIONS["Golos Text"];
    document.documentElement.style.setProperty("--font-sans", `var(${token})`);
  }, [font]);

  return null;
}
