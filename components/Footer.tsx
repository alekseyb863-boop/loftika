"use client";

const columns = [
  {
    title: "Поддержка",
    links: ["Онлайн-чат", "Контакты", "Оптовым клиентам", "Доставка и оплата", "Возврат и обмен", "Помощь"],
  },
  {
    title: "О магазине",
    links: ["О нас", "Производство", "Статьи", "Партнёры"],
  },
  {
    title: "Мы в сети",
    links: ["Telegram", "VK", "YouTube"],
  },
  {
    title: "Документы",
    links: ["Политика конфиденциальности", "Пользовательское соглашение", "Реквизиты"],
  },
];

export default function Footer() {
  return (
    <footer id="kontakty" className="border-t border-line mt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-5">
        <div className="p-5 md:p-8 border-b md:border-r border-line lg:border-b-0">
          <h3 className="mb-3 font-medium">Будьте на связи</h3>
          <p className="text-muted mb-5 max-w-xs">
            Подпишитесь на рассылку и получите скидку 10% на первый заказ.
          </p>
          <form className="flex max-w-xs border border-line" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Ваш e-mail"
              aria-label="Ваш e-mail"
              className="min-w-0 flex-1 px-3 py-2.5 bg-transparent outline-none"
            />
            <button type="submit" className="px-3 hover:bg-surface">
              →
            </button>
          </form>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="p-5 md:p-8 border-b md:border-r border-line last:border-r-0 lg:border-b-0">
            <h3 className="mb-3 font-medium">{col.title}</h3>
            <ul className="space-y-1.5 text-muted">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-5 md:px-8 py-5 text-muted text-xs">
        © {new Date().getFullYear()} лофтика. Все права защищены.
      </div>
    </footer>
  );
}
