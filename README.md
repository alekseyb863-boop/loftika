# лофтика

Интернет-магазин лофтика — прототип главной страницы. Магазин металлических ножек, опор и каркасов для мебели.

Это только статичный прототип: корзины, поиска, каталога и бэкенда пока нет — всё это будет добавлено позже.

## Стек

- Node.js 26 (LTS)
- Next.js (App Router, TypeScript), статический экспорт
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- React
- shadcn/ui (стиль radix-vega, компоненты Radix UI в `components/ui`, тема на CSS-переменных в `app/globals.css`)
- leva (pmndrs) — панель на сайте: шрифт логотипа (Golos Text / Unbounded), начертание 400–800 и размер 24–40px
- Embla Carousel (через компонент Carousel из shadcn/ui), lucide-react (иконки, толщина линии 1.6)
- Шрифт Golos Text (`next/font/google`, кириллица); Unbounded подключён для логотипа
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

- Логотип — класс `font-logo` в `lib/logo.ts`. По умолчанию Golos Text, начертание 800, размер 36px. В панели leva можно сменить шрифт на Unbounded, начертание (400, 500, 600, 700, 800) и размер от 24px до 40px с шагом 2px.
- Фотографии лежат в `public/images`: `hero.jpg` и `product-1.jpg` … `product-4.jpg`. Замените файлы с теми же именами — код менять не нужно.
- Товары карусели — `lib/products.ts`.
- Компоненты shadcn/ui добавляются командой `npx shadcn@latest add <компонент>`; настройки — в `components.json`.

## Деплой

При каждом пуше в `main` workflow `.github/workflows/deploy.yml` собирает сайт и публикует его на GitHub Pages: <https://alekseyb863-boop.github.io/loftika/>
