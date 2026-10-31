"use client";

import { useEffect, useState } from "react";
import { Leva } from "leva";
import { readLogoDefaults, useLogoControls, type LogoDefaults } from "@/hooks/useLogoControls";

function Panel({ defaults }: { defaults: LogoDefaults }) {
  useLogoControls(defaults);
  return null;
}

// Панель leva рисуется только на клиенте — после монтирования.
export default function LogoControls() {
  const [defaults, setDefaults] = useState<LogoDefaults | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setDefaults(readLogoDefaults());
    setCollapsed(window.innerWidth < 768);
  }, []);

  if (!defaults) return null;
  return (
    <>
      <Leva
        collapsed={collapsed}
        titleBar={{ title: "Настройка логотипа", drag: true }}
        theme={{ sizes: { rootWidth: "21rem", controlWidth: "8.5rem" } }}
        hideCopyButton
      />
      <Panel defaults={defaults} />
    </>
  );
}
