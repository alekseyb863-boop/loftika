"use client";

import { useControls } from "leva";
import { useEffect } from "react";

const FONT_OPTIONS = {
  "Golos Text": "--font-golos",
  Inter: "--font-inter",
} as const;

type FontLabel = keyof typeof FONT_OPTIONS;

const WEIGHTS = ["100", "200", "300", "400", "500", "600"] as const;

export default function FontPreviewPanel() {
  const { family, menu, article } = useControls("Шрифт", {
    family: {
      label: "Семейство",
      value: "Inter" satisfies FontLabel,
      options: Object.keys(FONT_OPTIONS) as FontLabel[],
    },
    menu: {
      label: "Меню",
      value: "400",
      options: [...WEIGHTS],
    },
    article: {
      label: "Артикулы",
      value: "400",
      options: [...WEIGHTS],
    },
  });

  const { stroke } = useControls("Иконки", {
    stroke: {
      label: "Толщина линий",
      value: 2,
      min: 1,
      max: 2,
      step: 0.1,
    },
  });

  useEffect(() => {
    const root = document.documentElement;
    const token = FONT_OPTIONS[family as FontLabel] ?? FONT_OPTIONS.Inter;
    root.style.setProperty("--font-sans", `var(${token})`);
    root.style.setProperty("--menu-weight", String(menu));
    root.style.setProperty("--article-weight", String(article));
    root.style.setProperty("--icon-stroke", (Math.round(Number(stroke) * 10) / 10).toString());
  }, [family, menu, article, stroke]);

  return null;
}
