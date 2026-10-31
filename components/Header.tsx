import { MenuIcon } from "lucide-react";
import Logo from "@/components/Logo";
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
import { Separator } from "@/components/ui/separator";

const nav = [
  { label: "Новинки", href: "#novinki" },
  { label: "Каталог", href: "#katalog" },
  { label: "Ножки и опоры", href: "#nozhki" },
  { label: "О магазине", href: "#o-nas" },
  { label: "Контакты", href: "#kontakty" },
];

export default function Header() {
  return (
    <header>
      <div className="bg-muted px-4 py-2 text-center text-xs">
        Бесплатная консультация по подбору ножек и опор
      </div>

      <div className="px-4 pt-6 pb-4 md:px-8 md:pt-8 md:pb-6">
        <Logo href="#" className="inline-block" aria-label="лофтика — на главную" />
      </div>

      <div className="sticky top-0 z-30 bg-background">
        <Separator />
        <div className="flex h-11 items-center justify-between px-4 md:px-8">
          {/* Мобильное меню */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Открыть меню">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle asChild>
                  <Logo as="span" />
                </SheetTitle>
                <SheetDescription className="sr-only">Навигация по сайту</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-4" aria-label="Мобильная навигация">
                {nav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Button asChild variant="ghost" size="lg" className="justify-start text-base">
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Десктопная навигация */}
          <NavigationMenu className="hidden md:flex" aria-label="Основная навигация">
            <NavigationMenuList>
              {nav.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <a href={item.href}>{item.label}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="#">Поиск</a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="#">Войти</a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="#">
                Корзина <Badge variant="secondary">0</Badge>
              </a>
            </Button>
          </div>
        </div>
        <Separator />
      </div>
    </header>
  );
}
