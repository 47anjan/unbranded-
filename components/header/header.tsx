"use client";

import useScroll from "@/hooks/use-scroll";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const scroll = useScroll();
  const scrollDir = scroll.y > 80 ? "down" : "up";

  return (
    <nav
      className={`fixed w-full z-50 transition-all will-change-auto duration-300 ${
        scrollDir === "down" ? "bg-white pt-0" : "bg-transparent pt-5"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                Unbranded<span className="text-[#01e690] text-2xl">.</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </Link>
              <div className="relative group">
                <Link
                  href="#projects"
                  className="flex items-center gap-1 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                >
                  Projects
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="#services"
                  className="flex items-center gap-1 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                >
                  Services
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="#about"
                  className="flex items-center gap-1 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#21242a] hover:bg-gray-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              <Menu size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
