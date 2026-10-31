"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  return (
    <form className="flex max-w-xs gap-2" onSubmit={(e) => e.preventDefault()}>
      <Input type="email" placeholder="Ваш e-mail" aria-label="Ваш e-mail" required />
      <Button type="submit" size="icon" aria-label="Подписаться">
        <ArrowRightIcon />
      </Button>
    </form>
  );
}
