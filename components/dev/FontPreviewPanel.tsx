"use client";

import { useControls } from "leva";
import { useEffect } from "react";

const BADGE_COLORS = {
  Чёрный: "#111111",
  Красный: "var(--destructive)",
} as const;

type BadgeColor = keyof typeof BADGE_COLORS;

export default function FontPreviewPanel() {
  const { color } = useControls("Корзина", {
    color: {
      label: "Бейдж",
      value: "Красный" satisfies BadgeColor,
      options: Object.keys(BADGE_COLORS) as BadgeColor[],
    },
  });

  useEffect(() => {
    const value = BADGE_COLORS[color as BadgeColor] ?? BADGE_COLORS["Красный"];
    document.documentElement.style.setProperty("--cart-badge", value);
  }, [color]);

  return null;
}
