import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Faq", "Contact"],
    },
    {
      title: "Resources",
      links: ["Projects", "Services", "Blog"],
    },
    {
      title: "Connect",
      links: ["Facebook", "LinkedIn", "X (Twitter)"],
    },
  ];

  return (
    <footer className="bg-white py-16">
      <div className="pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-2xl lg:max-w-none mx-auto">
        <Image
          width={1440}
          height={1440}
          className="w-full "
          alt="footer"
          src="/footer.webp"
        />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-2xl lg:max-w-none mx-auto ">
        <div className=" flex flex-col md:flex-row gap-10 md:gap-0 justify-between mb-16">
          <div className="flex items-start gap-2 mb-4">
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              Unbranded<span className="text-[#01e690] text-2xl">.</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:max-w-[50%] w-full md:justify-between">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Unbranded. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
