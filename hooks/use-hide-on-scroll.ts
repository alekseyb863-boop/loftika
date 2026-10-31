"use client";

import { useEffect, useState } from "react";

/**
 * Скрывает элемент при прокрутке вниз и показывает при прокрутке вверх.
 * - у верха страницы (меньше `offset`) элемент всегда виден;
 * - мелкие колебания меньше `threshold` игнорируются;
 * - обработчик пассивный и считается не чаще одного раза за кадр.
 */
export function useHideOnScroll({ offset = 80, threshold = 8 } = {}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (y < offset) {
        setHidden(false);
        lastY = y;
      } else if (Math.abs(delta) >= threshold) {
        setHidden(delta > 0);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, threshold]);

  return hidden;
}
