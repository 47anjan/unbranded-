import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeaderProps, MenuItem } from "./header-data";
import { Menu } from "lucide-react";
import { Accordion } from "../ui/accordion";
import { MobileMenuItem } from "./mobile-menu-item";
import { Logo } from "./logo";

export const MobileMenuSheet = ({
  menu,
  mobileExtraLinks,
  auth,
}: {
  menu: MenuItem[];
  mobileExtraLinks: HeaderProps["mobileExtraLinks"];
  auth: HeaderProps["auth"];
}) => (
  <Sheet>
    <SheetTrigger asChild>
      <button className="text-gray-900 hover:text-gray-600 transition-colors duration-200">
        <Menu size={24} />
      </button>
    </SheetTrigger>
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle>
          <Logo />
        </SheetTitle>
      </SheetHeader>
      <div className="my-6 flex flex-col gap-6">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-4"
        >
          {menu.map((item) => (
            <MobileMenuItem key={item.title} item={item} />
          ))}
        </Accordion>
        <div className="border-t py-4">
          <div className="grid grid-cols-2 justify-start">
            {mobileExtraLinks?.map((link, idx) => (
              <Link
                key={idx}
                className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                href={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button asChild variant="outline">
            <a href={auth?.login.url}>{auth?.login.text}</a>
          </Button>
          <Button asChild>
            <a href={auth?.signup.url}>{auth?.signup.text}</a>
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);
