/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { useState } from "react";
import { NavbarItems } from ".";
import { MenuIcon } from "../icons";
import { NavbarDesktop } from "./NavbarDesktop";

export const Navbar = () => {
  const lenis = useLenis(({ scroll }) => {});
  const [menuIconColor, setMenuIconColor] = useState("#1B1B1B");

  return (
    <nav
      id="nav"
      className="rounded-3xl flex w-full max-w-wrapper justify-between items-center h-88 px-4 md:px-10 z-50 glass animate-fadeIn absolute top-10 bg-transparent-10"
    >
      <a
        href="#"
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
        />
      </a>
      <NavbarItems />

      <div className="hidden lg:flex">
        <NavbarDesktop />
      </div>
      <div className="flex lg:hidden">
        <MenuIcon color={menuIconColor} />
      </div>
    </nav>
  );
};
