import Image from "next/image";
import { cn } from "@/lib/utils";
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

const arrow = "static size-9 translate-none";

export default function ProductCarousel({
  items,
  title,
  href = "#",
  itemClassName = "basis-7/10 pl-5 sm:basis-1/2 lg:basis-1/4",
  captionClassName,
  contentClassName = "-ml-5",
  imageSizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 70vw",
  showAll = true,
}: {
  items: Product[];
  title: string;
  href?: string;
  itemClassName?: string;
  captionClassName?: string;
  contentClassName?: string;
  imageSizes?: string;
  showAll?: boolean;
}) {
  return (
    <Carousel opts={{ align: "start", slidesToScroll: 1 }} aria-label={title}>
      <div className="mb-5 flex items-center justify-between gap-4 px-4 md:px-8">
        <h2 className="text-xl font-medium tracking-tight md:text-2xl">
          {title}
        </h2>
        <div className="-my-2 flex items-center gap-4">
          {showAll ? (
            <Button
              asChild
              variant="link"
              className="hidden px-0 underline sm:inline-flex"
            >
              <a href={href}>Смотреть все</a>
            </Button>
          ) : null}
          <div className="flex gap-2">
            <CarouselPrevious className={arrow} />
            <CarouselNext className={arrow} />
          </div>
        </div>
      </div>

      <CarouselContent className={contentClassName}>
        {items.map((p) => (
          <CarouselItem
            key={p.id}
            className={cn(
              "first:ml-4 last:mr-4 md:first:ml-8 md:last:mr-8",
              itemClassName,
            )}
          >
            <a href="#" className="group block">
              <Card className="gap-0 bg-transparent py-0 shadow-none ring-0">
                <AspectRatio
                  ratio={1}
                  className="relative overflow-hidden rounded-xl bg-muted"
                >
                  <Image
                    src={asset(p.image)}
                    alt={p.alt}
                    fill
                    sizes={imageSizes}
                    className="aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </AspectRatio>
                <CardContent
                  className={cn("px-4 py-3 md:px-8", captionClassName)}
                >
                  {p.article}
                </CardContent>
              </Card>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
