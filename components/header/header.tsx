"use client";

import useScroll from "@/hooks/use-scroll";
import {
  DEFAULT_AUTH,
  DEFAULT_MENU,
  DEFAULT_MOBILE_LINKS,
  HeaderProps,
} from "./header-data";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { Logo } from "./logo";
import { DesktopMenuItem } from "./desktop-menu-item";
import { MobileMenuSheet } from "./mobile-menu-sheet";
import { ScrollProgress } from "../magicui/scroll-progress";

export const Header = ({
  menu = DEFAULT_MENU,
  mobileExtraLinks = DEFAULT_MOBILE_LINKS,
  auth = DEFAULT_AUTH,
}: HeaderProps) => {
  const scroll = useScroll();
  const scrollDir = scroll.y > 80 ? "down" : "up";

  return (
    <section
      className={`fixed w-full z-50 transition-all will-change-auto duration-300 ${
        scrollDir === "down" ? "bg-white pt-0" : "bg-transparent pt-5"
      }`}
    >
      <ScrollProgress className="top-14 z-10 sm:top-16" />
      <div className="">
        <nav className="mx-auto px-4 sm:px-6 lg:px-10 flex h-14 sm:h-16 items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <DesktopMenuItem key={item.title} item={item} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="block lg:hidden">
            <MobileMenuSheet
              menu={menu}
              mobileExtraLinks={mobileExtraLinks}
              auth={auth}
            />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
