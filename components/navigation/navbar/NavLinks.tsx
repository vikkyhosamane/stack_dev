"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants/SideBar";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  isMobileNav?: boolean;
}

const NavLinks = ({ isMobileNav = false }: NavLinksProps) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <nav className={cn("flex flex-col gap-2", isMobileNav ? "w-full" : "px-4 py-6")}>
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        if (link.route === "/profile") {
          link.route = `/profile/${userId}`;
        }

        const LinkComponent = (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900",
              "flex items-center justify-start gap-3 bg-transparent p-4"
            )}
          >
            <Image src={link.imgURL} alt={link.label} width={20} height={20} className="invert-colors" />
            <span className={cn(isActive ? "base-bold" : "base-medium", !isMobileNav && "max-lg:hidden")}>
              {link.label}
            </span>
          </Link>
        );
        return LinkComponent;
      })}
    </nav>
  );
};

export default NavLinks;
