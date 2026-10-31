"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import type { Product } from "@/lib/products";

export default function Carousel({ items, title, href = "#" }: { items: Product[]; title: string; href?: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width : el.clientWidth;
    el.scrollBy({ left: dir * step * (window.innerWidth >= 1024 ? 2 : 1), behavior: "smooth" });
  };

  const arrow =
    "h-9 w-9 flex items-center justify-center border border-line bg-background text-lg leading-none transition-opacity disabled:opacity-30 enabled:hover:bg-surface";

  return (
    <div>
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 mb-4">
        <h2 className="text-xl md:text-2xl font-medium tracking-tight">{title}</h2>
        <div className="flex items-center gap-4">
          <a href={href} className="hidden sm:inline underline underline-offset-4 hover:no-underline">
            Смотреть все
          </a>
          <div className="flex gap-2">
            <button type="button" className={arrow} onClick={() => scrollByPage(-1)} disabled={!canPrev} aria-label="Назад">
              ←
            </button>
            <button type="button" className={arrow} onClick={() => scrollByPage(1)} disabled={!canNext} aria-label="Вперёд">
              →
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={ref}
        onScroll={update}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        aria-label="Товары категории «Ножки и опоры»"
      >
        {items.map((p) => (
          <li
            key={p.id}
            className="snap-start shrink-0 basis-[70%] sm:basis-1/2 lg:basis-1/4 border-l border-line first:border-l-0"
          >
            <a href="#" className="block group">
              <div className="relative aspect-square bg-surface overflow-hidden">
                <Image
                  src={asset(p.image)}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 70vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="px-4 md:px-5 py-3">{p.article}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
