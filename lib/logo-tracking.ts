import { useSyncExternalStore } from "react";

// Допустимые классы межбуквенного интервала — литералы, чтобы Tailwind включил их в CSS.
export const TRACKING_OPTIONS = [
  "tracking-tight",
  "tracking-normal",
  "tracking-wide",
  "tracking-wider",
  "tracking-widest",
] as const;

export type LogoTracking = (typeof TRACKING_OPTIONS)[number];
export const DEFAULT_TRACKING: LogoTracking = "tracking-tight";

// Минимальное хранилище между панелью leva и логотипом.
let current: LogoTracking = DEFAULT_TRACKING;
const listeners = new Set<() => void>();

export function setLogoTracking(value: LogoTracking) {
  if (value === current) return;
  current = value;
  listeners.forEach((l) => l());
}

export function useLogoTracking(): LogoTracking {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
    () => DEFAULT_TRACKING,
  );
}
