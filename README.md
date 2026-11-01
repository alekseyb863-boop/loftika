# лофтика

Интернет-магазин лофтика — прототип главной страницы. Магазин металлических ножек, опор и каркасов для мебели.

Это только статичный прототип: корзины, поиска, каталога и бэкенда пока нет — всё это будет добавлено позже.

## Стек

- Node.js 26 (LTS)
- Next.js (App Router, TypeScript), статический экспорт
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- React
- shadcn/ui (стиль radix-vega, компоненты Radix UI в `components/ui`, тема на CSS-переменных в `app/globals.css`)
- leva (pmndrs) — в dev-режиме панель «Шрифт» для переключения Golos Text / Inter
- Embla Carousel (через компонент Carousel из shadcn/ui), lucide-react (иконки)
- Шрифт Golos Text (`next/font/google`, кириллица)
- Деплой: GitHub Actions → GitHub Pages

## Запуск локально

```bash
nvm use        # версия из .nvmrc (26)
npm install
npm run dev
```

Сайт откроется на <http://localhost:3000/loftika/> (сайт опубликован в подпути `/loftika`).

Подпуть задаётся переменной `NEXT_PUBLIC_BASE_PATH` (по умолчанию `/loftika`). Для запуска в корне:

```bash
NEXT_PUBLIC_BASE_PATH="" npm run dev
```

## Сборка

```bash
npm run build   # статический сайт появится в папке out/
```

## Настройка

- Логотип — классы Tailwind в `lib/logo.ts` (`text-3xl lg:text-4xl font-extrabold tracking-tight leading-none`): `text-3xl` (1.875rem) на мобильных, `text-4xl` (2.25rem) на десктопе от 1024px. Жёстко прописанных размеров в rem/px избегаем — используем шкалу Tailwind.
- Фотографии лежат в `public/images`: `hero.jpg` и `product-1.jpg` … `product-4.jpg`. Замените файлы с теми же именами — код менять не нужно.
- Товары карусели — `lib/products.ts`.
- Компоненты shadcn/ui добавляются командой `npx shadcn@latest add <компонент>`; настройки — в `components.json`.

## Деплой

При каждом пуше в `main` workflow `.github/workflows/deploy.yml` собирает сайт и публикует его на GitHub Pages: <https://alekseyb863-boop.github.io/loftika/>
