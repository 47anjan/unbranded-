import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { MenuItem } from "./header-data";

export const MobileMenuItem = ({ item }: { item: MenuItem }) => {
  if (!item.items) {
    return (
      <a href={item.url} className="font-semibold">
        {item.title}
      </a>
    );
  }

  return (
    <AccordionItem value={item.title} className="border-b-0">
      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
        {item.title}
      </AccordionTrigger>
      <AccordionContent className="mt-2">
        {item.items.map((subItem) => (
          <Link
            key={subItem.title}
            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
            href={subItem.url}
          >
            {subItem.icon}
            <div>
              <div className="text-sm font-semibold">{subItem.title}</div>
              {subItem.description && (
                <p className="text-sm leading-snug text-muted-foreground">
                  {subItem.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
