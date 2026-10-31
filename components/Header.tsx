"use client";

import { useState } from "react";

const nav = [
  { label: "Новинки", href: "#novinki" },
  { label: "Каталог", href: "#katalog" },
  { label: "Ножки и опоры", href: "#nozhki" },
  { label: "О магазине", href: "#o-nas" },
  { label: "Контакты", href: "#kontakty" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="bg-surface text-center text-xs py-2 px-4">
        Бесплатная консультация по подбору ножек и опор
      </div>

      <div className="px-4 pt-6 pb-4 md:px-8 md:pt-8 md:pb-6">
        <a href="#" className="logo inline-block" aria-label="лофтика — на главную">
          лофтика
        </a>
      </div>

      <div className="sticky top-0 z-30 bg-background border-y border-line">
        <div className="flex items-center justify-between h-11 px-4 md:px-8">
          <nav className="hidden md:flex items-center gap-6" aria-label="Основная навигация">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:underline underline-offset-4">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Закрыть" : "Меню"}
          </button>

          <div className="flex items-center gap-5">
            <a href="#" className="hidden sm:inline hover:underline underline-offset-4">Поиск</a>
            <a href="#" className="hidden sm:inline hover:underline underline-offset-4">Войти</a>
            <a href="#" className="hover:underline underline-offset-4">Корзина (0)</a>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-line px-4 py-3 flex flex-col gap-3"
            aria-label="Мобильная навигация"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base">
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
