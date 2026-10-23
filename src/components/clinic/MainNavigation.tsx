"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";
export function MainNavigation() {
  const pathname = usePathname();
  return (
    <nav className="desktop-nav" aria-label="Navigazione principale">
      {navigation.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          aria-current={
            pathname === item.href ||
            (item.href === "/prestazioni" &&
              pathname === "/chirurgia-laparoscopica")
              ? "page"
              : undefined
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
