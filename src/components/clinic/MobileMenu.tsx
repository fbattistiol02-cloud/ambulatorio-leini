"use client";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";
import { IconArrowUpRight } from "@/components/ui/Icons";

export function MobileMenu() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  function close() {
    if (menu.current) menu.current.open = false;
  }
  return (
    <details
      className="mobile-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          close();
          trigger.current?.focus();
        }
      }}
    >
      <summary aria-label="Apri la navigazione" ref={trigger}>
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Navigazione mobile">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={close}
            aria-current={
              pathname === item.href ||
              (item.href === "/prestazioni" &&
                pathname === "/chirurgia-laparoscopica")
                ? "page"
                : undefined
            }
          >
            {item.label}
            <IconArrowUpRight />
          </Link>
        ))}
      </nav>
    </details>
  );
}
