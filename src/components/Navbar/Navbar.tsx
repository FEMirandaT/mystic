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
      className="glass rounded-3xl flex w-full max-w-wrapper justify-between items-center h-88 px-4 md:px-10 z-40 glass animate-fadeIn fixed top-2 md:top-10"
    >
      <Link
        href="/"
        onClick={() => lenis?.scrollTo(`.header-container`)}
        aria-label="hom button with logo"
      >
        <Image
          src={"/logo.png"}
          alt=""
          quality={100}
          className="w-15 md:w-108 z-20"
          width={80}
          height={40}
          sizes="(max-width: 750px) 50vw, 25vw"
        />
      </Link>

      <div className="hidden lg:flex gap-4">
        <NavbarItems />
      </div>
      <button
        className="flex lg:hidden"
        onClick={toggleSidebar}
        aria-label="Button Sidenar menu open"
      >
        <MenuIcon color={COLORS.primary} size={36} />
      </button>
    </nav>
  );
};
