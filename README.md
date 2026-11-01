# лофтика

Интернет-магазин лофтика — прототип главной страницы. Магазин металлических ножек, опор и каркасов для мебели.

Это только статичный прототип: корзины, поиска, каталога и бэкенда пока нет — всё это будет добавлено позже.

## Стек

- Node.js 26 (LTS)
- Next.js (App Router, TypeScript), статический экспорт
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- React
- shadcn/ui (стиль radix-vega, компоненты Radix UI в `components/ui`, тема на CSS-переменных в `app/globals.css`)
- leva (pmndrs) — панель на сайте: размер логотипа и высота хедера отдельно для мобильных и десктопа
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

- Логотип — Unbounded, начертание 600, класс `font-logo` в `lib/logo.ts`. По умолчанию 28px на мобильных и 32px от 1024px. В панели leva два ползунка размера (24–40px, шаг 2px). Высота хедера — два списка `h-10` … `h-18`, по умолчанию `h-13` и `h-15`. На мобильных логотип по центру: слева меню и поиск, справа вход и корзина.
- Фотографии лежат в `public/images`: `hero.jpg` и `product-1.jpg` … `product-4.jpg`. Замените файлы с теми же именами — код менять не нужно.
- Товары карусели — `lib/products.ts`.
- Компоненты shadcn/ui добавляются командой `npx shadcn@latest add <компонент>`; настройки — в `components.json`.

## Деплой

При каждом пуше в `main` workflow `.github/workflows/deploy.yml` собирает сайт и публикует его на GitHub Pages: <https://alekseyb863-boop.github.io/loftika/>
