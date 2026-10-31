"use client";

import { useEffect } from "react";
import { button, useControls } from "leva";
import { DEFAULT_TRACKING, TRACKING_OPTIONS, setLogoTracking } from "@/lib/logo-tracking";

export type LogoDefaults = {
  weight: number;
  size: number; // rem, мобильные
  sizeLg: number; // rem, десктоп
};

const FOLDER = "Логотип";

// Читает значения по умолчанию из CSS-переменных в globals.css (они — источник правды).
export function readLogoDefaults(): LogoDefaults {
  const cs = getComputedStyle(document.documentElement);
  const num = (name: string, fallback: number) => {
    const v = parseFloat(cs.getPropertyValue(name));
    return Number.isFinite(v) ? v : fallback;
  };
  return {
    weight: num("--logo-weight", 600),
    size: num("--logo-size", 1.875),
    sizeLg: num("--logo-size-lg", 3.25),
  };
}

// useControls из leva: GUI для настройки логотипа.
// Вес и размеры уходят в CSS-переменные, интервал — классом Tailwind на элементе логотипа.
export function useLogoControls(d: LogoDefaults) {
  const [values, set] = useControls(
    FOLDER,
    () => ({
      fontWeight: { value: d.weight, min: 400, max: 900, step: 100, label: "Жирность" },
      fontSize: { value: d.size, min: 1, max: 6, step: 0.125, pad: 3, label: "Размер (моб.), rem" },
      fontSizeLg: { value: d.sizeLg, min: 1, max: 10, step: 0.125, pad: 3, label: "Размер (деск.), rem" },
      letterSpacing: { value: DEFAULT_TRACKING as string, options: [...TRACKING_OPTIONS], label: "Интервал" },
      "Скопировать CSS": button((get) => {
        const css = [
          ".logo {",
          `  --logo-size: ${get(`${FOLDER}.fontSize`)}rem;`,
          `  --logo-size-lg: ${get(`${FOLDER}.fontSizeLg`)}rem;`,
          `  --logo-weight: ${get(`${FOLDER}.fontWeight`)};`,
          "}",
          `/* Интервал: класс ${get(`${FOLDER}.letterSpacing`)} на элементе логотипа */`,
        ].join("\n");
        void navigator.clipboard?.writeText(css);
      }),
      "Сбросить": button(() =>
        set({
          fontWeight: d.weight,
          fontSize: d.size,
          fontSizeLg: d.sizeLg,
          letterSpacing: DEFAULT_TRACKING,
        }),
      ),
    }),
    [d],
  );

  const { fontWeight, fontSize, fontSizeLg, letterSpacing } = values;
  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--logo-weight", String(fontWeight));
    root.setProperty("--logo-size", `${fontSize}rem`);
    root.setProperty("--logo-size-lg", `${fontSizeLg}rem`);
  }, [fontWeight, fontSize, fontSizeLg]);

  useEffect(() => {
    setLogoTracking(letterSpacing as (typeof TRACKING_OPTIONS)[number]);
  }, [letterSpacing]);
}
