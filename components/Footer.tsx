import NewsletterForm from "@/components/NewsletterForm";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
    <footer id="kontakty" className="mx-auto mt-20 w-full max-w-7xl">
      <Separator />
      <div className="grid gap-8 p-5 md:grid-cols-2 md:p-8 lg:grid-cols-5">
        <div>
          <h3 className="mb-3 font-medium">Будьте на связи</h3>
          <p className="mb-5 max-w-xs text-muted-foreground">
            Подпишитесь на рассылку и получите скидку 10% на первый заказ.
          </p>
          <NewsletterForm />
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 font-medium">{col.title}</h3>
            <ul className="flex flex-col items-start text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}>
                  <Button asChild variant="link" size="sm" className="h-auto justify-start whitespace-normal px-0 py-1 text-left font-normal text-muted-foreground hover:text-foreground">
                    <a href="#">{l}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator />
      <div className="px-5 py-5 text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} лофтика. Все права защищены.
      </div>
    </footer>
  );
}
