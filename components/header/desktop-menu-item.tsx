import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MenuItem } from "./header-data";

export const DesktopMenuItem = ({ item }: { item: MenuItem }) => {
  if (!item.items) {
    return (
      <Link
        className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-gray-900 transition-colors hover:text-accent-foreground hover:bg-muted"
        href={item.url}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <NavigationMenuItem className="text-gray-900 hover:bg-muted rounded-md">
      <NavigationMenuTrigger className="bg-transparent text-base">
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-80 p-3">
          <NavigationMenuLink>
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <Link
                  className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
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
              </li>
            ))}
          </NavigationMenuLink>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
