import type { MouseEventHandler, ReactNode } from "react";
import { site } from "@/content/site";
import { IconPhone } from "./Icons";

export function CallLink({
  className,
  children = "Chiama lo studio",
  onClick,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={`tel:${site.phone.tel}`}
      className={className}
      title={`Chiama ${site.phone.display}`}
      onClick={onClick}
    >
      <IconPhone />
      <span>{children}</span>
    </a>
  );
}
