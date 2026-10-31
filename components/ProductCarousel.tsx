import Image from "next/image";
import { asset } from "@/lib/asset";
import type { Product } from "@/lib/products";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const arrow = "static size-9 translate-none rounded-none";

export default function ProductCarousel({ items, title, href = "#" }: { items: Product[]; title: string; href?: string }) {
  return (
    <Carousel opts={{ align: "start", slidesToScroll: 1 }} aria-label={title}>
      <div className="mb-5 flex items-center justify-between gap-4 px-4 md:px-8">
        <h2 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h2>
        <div className="-my-2 flex items-center gap-4">
          <Button asChild variant="link" className="hidden px-0 underline sm:inline-flex">
            <a href={href}>Смотреть все</a>
          </Button>
          <div className="flex gap-2">
            <CarouselPrevious className={arrow} />
            <CarouselNext className={arrow} />
          </div>
        </div>
      </div>

      <CarouselContent className="-ml-0.5">
        {items.map((p) => (
          <CarouselItem key={p.id} className="basis-7/10 pl-0.5 sm:basis-1/2 lg:basis-1/4">
            <a href="#" className="group block">
              <Card className="gap-0 rounded-none bg-transparent py-0 shadow-none ring-0">
                <AspectRatio ratio={1} className="relative overflow-hidden bg-muted">
                  <Image
                    src={asset(p.image)}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 70vw"
                    className="aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </AspectRatio>
                <CardContent className="px-4 py-3 md:px-8">{p.article}</CardContent>
              </Card>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
