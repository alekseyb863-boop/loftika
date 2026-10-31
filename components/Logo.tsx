"use client";

import type { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/utils";
import { useLogoTracking } from "@/lib/logo-tracking";

type LogoProps = ComponentProps<"a"> & { as?: ElementType };

// Текстовый логотип. Интервал — класс Tailwind; на сервере и до монтирования панели это tracking-tight (значение хранилища по умолчанию),
// после монтирования класс можно менять панелью leva.
export default function Logo({ as: Tag = "a", className, ...props }: LogoProps) {
  const tracking = useLogoTracking();
  return (
    <Tag className={cn("logo", tracking, className)} {...props}>
      лофтика
    </Tag>
  );
}
