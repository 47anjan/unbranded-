import Link from "next/link";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <Link href="/" className="text-xl font-semibold text-gray-900">
      Unbranded<span className="text-[#01e690] text-2xl">.</span>
    </Link>
  </div>
);
