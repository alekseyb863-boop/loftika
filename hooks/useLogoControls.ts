"use client";

import { useEffect } from "react";
import { button, useControls } from "leva";

export type LogoDefaults = {
  weight: number;
  size: number; // rem, мобильные
  sizeLg: number; // rem, десктоп
  tracking: number; // em
};

const FOLDER = "Логотип";
const TRACKING_STEP = 0.025;

// Ползунок leva отсчитывает шаг от стартового значения. Стартовое -0.04em не кратно 0.025,
// поэтому после первого движения ползунка подтягиваем значение к сетке 0.025.
const snapTracking = (v: number) => Number((Math.round(v / TRACKING_STEP) * TRACKING_STEP).toFixed(3));

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
    tracking: num("--logo-tracking", -0.04),
  };
}

// useControls из leva: GUI для настройки логотипа, значения уходят в CSS-переменные.
export function useLogoControls(d: LogoDefaults) {
  const [values, set] = useControls(
    FOLDER,
    () => ({
      fontWeight: { value: d.weight, min: 400, max: 900, step: 100, label: "Жирность" },
      fontSize: { value: d.size, min: 1, max: 6, step: 0.125, pad: 3, label: "Размер (моб.), rem" },
      fontSizeLg: { value: d.sizeLg, min: 1, max: 10, step: 0.125, pad: 3, label: "Размер (деск.), rem" },
      letterSpacing: { value: d.tracking, min: -0.1, max: 0.075, step: TRACKING_STEP, pad: 3, label: "Интервал, em" },
      "Скопировать CSS": button((get) => {
        const css = [
          ".logo {",
          `  --logo-size: ${get(`${FOLDER}.fontSize`)}rem;`,
          `  --logo-size-lg: ${get(`${FOLDER}.fontSizeLg`)}rem;`,
          `  --logo-weight: ${get(`${FOLDER}.fontWeight`)};`,
          `  --logo-tracking: ${get(`${FOLDER}.letterSpacing`)}em;`,
          "}",
        ].join("\n");
        void navigator.clipboard?.writeText(css);
      }),
      "Сбросить": button(() =>
        set({
          fontWeight: d.weight,
          fontSize: d.size,
          fontSizeLg: d.sizeLg,
          letterSpacing: d.tracking,
        }),
      ),
    }),
    [d],
  );

  const { fontWeight, fontSize, fontSizeLg, letterSpacing } = values;
  useEffect(() => {
    // Пока ползунок не тронут (значение = стартовому из CSS), ничего не округляем.
    const tracking = letterSpacing === d.tracking ? letterSpacing : snapTracking(letterSpacing);

    const root = document.documentElement.style;
    root.setProperty("--logo-weight", String(fontWeight));
    root.setProperty("--logo-size", `${fontSize}rem`);
    root.setProperty("--logo-size-lg", `${fontSizeLg}rem`);
    root.setProperty("--logo-tracking", `${tracking}em`);

    // Показание ползунка подтягиваем к сетке после отпускания (во время drag значение меняется постоянно).
    if (tracking !== letterSpacing) {
      const t = setTimeout(() => set({ letterSpacing: tracking }), 150);
      return () => clearTimeout(t);
    }
  }, [fontWeight, fontSize, fontSizeLg, letterSpacing, d.tracking, set]);
}
