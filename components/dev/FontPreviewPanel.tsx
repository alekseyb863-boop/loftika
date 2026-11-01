"use client";

import { useControls } from "leva";
import { useEffect } from "react";

const HEADER_HEIGHTS = {
  "h-10": "2.5rem",
  "h-11": "2.75rem",
  "h-12": "3rem",
  "h-13": "3.25rem",
  "h-14": "3.5rem",
  "h-15": "3.75rem",
  "h-16": "4rem",
  "h-17": "4.25rem",
  "h-18": "4.5rem",
} as const;

type HeaderHeight = keyof typeof HEADER_HEIGHTS;

const HEIGHT_OPTIONS = Object.keys(HEADER_HEIGHTS) as HeaderHeight[];

const sizeControl = (value: number) => ({
  value,
  min: 24,
  max: 40,
  step: 2,
});

export default function FontPreviewPanel() {
  const { sizeMobile, sizeDesktop } = useControls("Логотип", {
    sizeMobile: { label: "Размер, мобильный", ...sizeControl(28) },
    sizeDesktop: { label: "Размер, десктоп", ...sizeControl(32) },
  });

  const { heightMobile, heightDesktop } = useControls("Хедер", {
    heightMobile: {
      label: "Высота, мобильный",
      value: "h-13" satisfies HeaderHeight,
      options: HEIGHT_OPTIONS,
    },
    heightDesktop: {
      label: "Высота, десктоп",
      value: "h-15" satisfies HeaderHeight,
      options: HEIGHT_OPTIONS,
    },
  });

  useEffect(() => {
    const root = document.documentElement;
    const mobileHeight = HEADER_HEIGHTS[heightMobile as HeaderHeight] ?? HEADER_HEIGHTS["h-13"];
    const desktopHeight = HEADER_HEIGHTS[heightDesktop as HeaderHeight] ?? HEADER_HEIGHTS["h-15"];
    root.style.setProperty("--logo-size", `${Math.round(Number(sizeMobile))}px`);
    root.style.setProperty("--logo-size-desktop", `${Math.round(Number(sizeDesktop))}px`);
    root.style.setProperty("--header-height", mobileHeight);
    root.style.setProperty("--header-height-desktop", desktopHeight);
  }, [sizeMobile, sizeDesktop, heightMobile, heightDesktop]);

  return null;
}
