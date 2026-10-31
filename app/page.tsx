import Image from "next/image";
import { asset } from "@/lib/asset";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { legs } from "@/lib/products";

const tiles = [
  { title: "Вешалки и стойки", caption: "Металлические стойки для гардероба", image: "/images/hero.jpg", alt: "Чёрная металлическая стойка для одежды" },
  { title: "Каркасы для мебели", caption: "Подстолья и рамы под заказ", image: "/images/product-4.jpg", alt: "Прямоугольный металлический каркас" },
];

const perks = [
  { title: "Порошковая окраска", text: "Стойкое матовое покрытие чёрного и других цветов RAL." },
  { title: "Размеры под заказ", text: "Изготовим ножки и каркасы по вашим чертежам." },
  { title: "Доставка по России", text: "Надёжная упаковка и отправка в любой регион." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="novinki" className="grid bg-muted md:grid-cols-2">
          <div className="md:order-2">
          <AspectRatio ratio={1} className="overflow-hidden">
            <Image
              src={asset("/images/hero.jpg")}
              alt="Чёрная металлическая стойка для одежды в интерьере"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </AspectRatio>
          </div>
          <div className="flex flex-col justify-end gap-6 px-4 md:px-8 py-8 md:py-12 md:order-1">
            <div>
              <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">Металлические ножки, опоры и каркасы</h1>
              <p className="text-muted-foreground mt-3 md:text-lg">Новая коллекция — минимализм и лофт</p>
            </div>
            <Button asChild variant="outline" size="lg" className="self-start border-foreground bg-transparent px-5 text-sm hover:bg-foreground hover:text-background">
              <a href="#nozhki">Смотреть коллекцию</a>
            </Button>
          </div>
        </section>

        {/* Категория */}
        <section id="nozhki" className="pt-14 md:pt-20">
          <ProductCarousel items={legs} title="Ножки и опоры" />
        </section>

        {/* Каталог */}
        <section id="katalog" className="pt-14 md:pt-20">
          <h2 className="px-4 md:px-8 mb-6 text-xl md:text-2xl font-medium tracking-tight">Каталог</h2>
          <div className="grid md:grid-cols-2">
            {tiles.map((t) => (
              <a key={t.title} href="#" className="group block">
                <Card className="gap-0 rounded-none bg-transparent py-0 shadow-none ring-0">
                  <AspectRatio ratio={4 / 3} className="relative overflow-hidden bg-muted">
                    <Image
                      src={asset(t.image)}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </AspectRatio>
                  <CardContent className="gap-0 px-4 py-4 md:px-8">
                    <CardTitle className="text-base">{t.title}</CardTitle>
                    <CardDescription className="text-sm">{t.caption}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* О магазине */}
        <section id="o-nas" className="pt-14 md:pt-20 px-4 md:px-8">
          <h2 className="mb-6 text-xl md:text-2xl font-medium tracking-tight">Почему лофтика</h2>
          <Separator />
          <div className="grid gap-8 pt-6 md:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title}>
                <h3 className="font-medium mb-1">{p.title}</h3>
                <p className="max-w-xs text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
