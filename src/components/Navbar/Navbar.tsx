/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { COLORS } from "@/utils/colors";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import Link from "next/link";
import { NavbarItems } from ".";
import { MenuIcon } from "../icons";
import { useSidebar } from "../Providers/SidebarProvider";

export const Navbar = () => {
  const lenis = useLenis(({ scroll }) => {});
  const { toggleSidebar } = useSidebar();

  return (
    <nav
      id="nav"
      className="sticky mx-auto  top-2 md:top-6 rounded-2xl flex w-full max-w-wrapper justify-between items-center h-16 md:h-20 px-4 md:px-6 z-40 backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border border-white/60 dark:border-white/10 shadow-lg"
    >
      <Link
        href="/"
        onClick={() => lenis?.scrollTo(`.header-container`)}
        aria-label="hom button with logo"
      >
        <Image
          src={"/logov1.png"}
          alt=""
          quality={100}
          className="w-15 md:w-108 z-20"
          width={80}
          height={40}
          sizes="(max-width: 750px) 50vw, 25vw"
        />
      </Link>

      <div className="hidden lg:flex gap-4 items-center">
        <NavbarItems />
      </div>

      <button
        className="flex lg:hidden"
        onClick={toggleSidebar}
        aria-label="Button Sidenav menu open"
      >
        <MenuIcon color={COLORS.accent} size={28} />
      </button>
    </nav>
  );
};
