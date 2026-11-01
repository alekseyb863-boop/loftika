"use client";

import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { logoClass } from "@/lib/logo";
import { cn } from "@/lib/utils";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";

const nav = [
  { label: "Новинки", href: "#novinki" },
  { label: "Каталог", href: "#katalog" },
  { label: "Ножки и опоры", href: "#nozhki" },
  { label: "О магазине", href: "#o-nas" },
  { label: "Контакты", href: "#kontakty" },
];

function SearchButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="ghost" size="icon" className={className}>
      <a href="#" aria-label="Поиск">
        <SearchIcon className="size-5" />
      </a>
    </Button>
  );
}

export default function Header() {
  const hidden = useHideOnScroll();

  return (
    <header
      data-hidden={hidden}
      className={cn(
        "sticky top-0 z-30 border-b bg-background transition-transform duration-300 ease-out motion-reduce:transition-none",
        // Пока фокус внутри шапки (навигация с клавиатуры), она не прячется
        "data-[hidden=true]:-translate-y-full data-[hidden=true]:focus-within:translate-y-0",
      )}
    >
      <div className="relative flex h-15 items-center px-2 lg:h-17 lg:gap-6 lg:px-8">
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Открыть меню">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className={logoClass}>лофтика</SheetTitle>
                <SheetDescription className="sr-only">Навигация по сайту</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-4" aria-label="Мобильная навигация">
                {nav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Button asChild variant="ghost" size="lg" className="justify-start text-base font-normal">
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <SearchButton />
        </div>

        <a
          href="#"
          className={cn(
            logoClass,
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:-translate-y-1",
          )}
          aria-label="лофтика — на главную"
        >
          лофтика
        </a>

        <NavigationMenu className="hidden lg:flex" aria-label="Основная навигация">
          <NavigationMenuList>
            {nav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "font-normal")}>
                  <a href={item.href}>{item.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center">
          <SearchButton className="hidden lg:inline-flex" />
          <Button asChild variant="ghost" size="icon">
            <a href="#" aria-label="Войти">
              <UserIcon className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="#" aria-label="Корзина, товаров: 0" className="relative">
              <ShoppingBagIcon className="size-5" />
              <Badge aria-hidden className="absolute top-0.5 right-0.5 h-4 min-w-4 rounded-full bg-[var(--cart-badge)] px-0.5 text-white tabular-nums">
                0
              </Badge>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
