"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactInfo from "./components/contact";

export default function Header() {
  const pathName = usePathname();
  const isActive = (path: string) => {
    return pathName === path;
  };

  const activeClasses =
    "text-primary border-b-4 border-primary font-ibm-plex-sans-700 transition-colors duration-400";
  const inactiveClasses = "border-transparent";
  return (
    <header className="bg-background h-[64px] border-0 border-b border-gray">
      <div className="relative flex w-full items-center justify-between md:px-[var(--layout-padding)] p-0 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="mr-8" />
          </div>
          <nav>
            <div className="space-x-4 flex items-center h-[64px]">
              <Link
                href="/services"
                className={`h-full flex items-center justify-center px-3 text-lg ${
                  isActive("/services") ? activeClasses : inactiveClasses
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`h-full flex items-center justify-center px-3 text-lg ${
                  isActive("/about") ? activeClasses : inactiveClasses
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
        <div className="hidden md:flex">
          <ContactInfo />
        </div>
      </div>
    </header>
  );
}
