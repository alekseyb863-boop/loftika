import Image from "next/image";
import { asset } from "@/lib/asset";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      <main className="flex-1">
        {/* Hero */}
        <section id="novinki" className="grid md:grid-cols-2 bg-surface">
          <div className="relative aspect-square w-full overflow-hidden md:order-2">
            <Image
              src={asset("/images/hero.jpg")}
              alt="Чёрная металлическая стойка для одежды в интерьере"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-end gap-6 px-4 md:px-8 py-8 md:py-12 md:order-1">
            <div>
              <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">Металлические ножки, опоры и каркасы</h1>
              <p className="text-muted mt-3 md:text-lg">Новая коллекция — минимализм и лофт</p>
            </div>
            <a href="#nozhki" className="self-start inline-block border border-foreground px-5 py-2.5 text-center hover:bg-foreground hover:text-background transition-colors">
              Смотреть коллекцию
            </a>
          </div>
        </section>

        {/* Категория */}
        <section id="nozhki" className="pt-14 md:pt-20">
          <Carousel items={legs} title="Ножки и опоры" />
        </section>

        {/* Каталог */}
        <section id="katalog" className="pt-14 md:pt-20">
          <h2 className="px-4 md:px-8 mb-6 text-xl md:text-2xl font-medium tracking-tight">Каталог</h2>
          <div className="grid md:grid-cols-2">
            {tiles.map((t) => (
              <a key={t.title} href="#" className="group block md:border-l border-line first:border-l-0">
                <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                  <Image
                    src={asset(t.image)}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-4 md:px-8 py-4">
                  <p className="font-medium">{t.title}</p>
                  <p className="text-muted">{t.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* О магазине */}
        <section id="o-nas" className="pt-14 md:pt-20 px-4 md:px-8">
          <h2 className="mb-6 text-xl md:text-2xl font-medium tracking-tight">Почему лофтика</h2>
          <div className="grid gap-8 md:grid-cols-3 border-t border-line pt-6">
            {perks.map((p) => (
              <div key={p.title}>
                <h3 className="font-medium mb-1">{p.title}</h3>
                <p className="text-muted max-w-xs">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
