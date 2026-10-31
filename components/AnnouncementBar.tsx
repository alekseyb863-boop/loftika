import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnnouncementBarProps = {
  /** Текст анонса. По умолчанию — консультация по подбору ножек и опор. */
  children?: ReactNode;
  className?: string;
};

export default function AnnouncementBar({
  children = "Бесплатная консультация по подбору ножек и опор",
  className,
}: AnnouncementBarProps) {
  return (
    <div className={cn("bg-muted px-4 py-2 text-center text-xs", className)}>
      {children}
    </div>
  );
}
