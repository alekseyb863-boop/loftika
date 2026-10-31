export type Product = {
  id: string;
  article: string;
  image: string;
  alt: string;
};

const base = [
  { image: "/images/product-1.jpg", alt: "Трапециевидная ножка, вид спереди" },
  { image: "/images/product-2.jpg", alt: "Трапециевидная ножка с изломом" },
  { image: "/images/product-3.jpg", alt: "Прямоугольная ножка с изломом" },
  { image: "/images/product-4.jpg", alt: "Прямоугольная ножка, вид спереди" },
];

// Витрина: 4 товара повторяются, чтобы карусель выглядела наполненной.
export const legs: Product[] = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(4, "0");
  return { id: n, article: `Арт.${n}`, ...base[i % base.length] };
});
