import Link from "next/link";
import React from "react";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-white pb-16  px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
        <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
          <div>
            <span className="flex items-center justify-center gap-4 lg:justify-start">
              <Link href="/" className="text-3xl font-semibold">
                Unbranded<span className="text-[#01e690] text-4xl">.</span>{" "}
              </Link>
            </span>
            <p className="mt-6 text-sm text-muted-foreground">
              A collection of 20+ responsive HTML templates for your startup
              business or side project.
            </p>
          </div>
          <ul className="flex items-center space-x-6 text-muted-foreground">
            <li className="font-medium hover:text-[#21242b] transition-colors duration-300">
              <Link href="#">
                <Instagram className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-[#21242b] transition-colors duration-300">
              <Link href="#">
                <Facebook className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-[#21242b] transition-colors duration-300">
              <Link href="#">
                <Twitter className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-[#21242b] transition-colors duration-300">
              <Link href="#">
                <Linkedin className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-10  lg:gap-20">
          <div>
            <h3 className="mb-6 font-bold">Product</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Overview</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Pricing</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Marketplace</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Features</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-bold">Company</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">About</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Team</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Blog</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-bold">Resources</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Help</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Sales</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Advertise</Link>
              </li>
              <li className="font-medium hover:text-primary transition-colors duration-300">
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
        <p>
          © 2024 Unbranded<span className="text-[#01e690]">.</span> All rights
          reserved.
        </p>
        <ul className="flex justify-center gap-4 lg:justify-start">
          <li className="hover:text-primary transition-colors duration-300">
            <Link href="#">Terms and Conditions</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-300">
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
