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

const nav = [
  { label: "Новинки", href: "#novinki" },
  { label: "Каталог", href: "#katalog" },
  { label: "Ножки и опоры", href: "#nozhki" },
  { label: "О магазине", href: "#o-nas" },
  { label: "Контакты", href: "#kontakty" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="mx-auto flex h-13 lg:h-15 max-w-7xl items-center gap-6 px-4 md:px-8">
        <a href="#" className={cn(logoClass, "shrink-0 -translate-y-1 lg:-translate-y-1")} aria-label="лофтика — на главную">
          лофтика
        </a>

        {/* Десктопная навигация (от lg) — в той же строке справа от лого */}
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

        <div className="ml-auto flex items-center gap-0">
          <Button asChild variant="ghost" size="icon">
            <a href="#" aria-label="Поиск">
              <SearchIcon className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="#" aria-label="Войти">
              <UserIcon className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="#" aria-label="Корзина, товаров: 0" className="relative">
              <ShoppingBagIcon className="size-5" />
              <Badge aria-hidden className="absolute top-0.5 right-0.5 h-4 min-w-4 rounded-full px-0.5 tabular-nums">
                0
              </Badge>
            </a>
          </Button>

          {/* Мобильное меню (до lg) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Открыть меню">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
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
        </div>
      </div>
    </header>
  );
}
