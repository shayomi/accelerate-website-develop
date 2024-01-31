"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/images/logo.svg";
import { menuItems } from "@/utils/data/menuItems";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/custom/navbar/MobileNav";
import { clsx } from "clsx";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container flex justify-between items-center py-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="Accelerate Africa's Logo"
            width={120}
            className="w-[110px] sm-[120px]"
          />
        </Link>

        <div className="hidden sm:block">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-primary hover:text-red-500"
                  : "text-foreground hover:text-gray-500",
                "px-4 font-medium",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <a href={process.env.NEXT_PUBLIC_APPLICATION_FORM_LINK} target="_blank">
          <Button className="px-8 hidden sm:block">Apply Now</Button>
        </a>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
