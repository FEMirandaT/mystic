/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { LinkItem } from "@/interfaces/links";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";

export const NAVBAR_LINKS: LinkItem[] = [
  { title: "Nosotros", id: "about" },
  { title: "Nuestra sede", id: "sede" },
  { title: "Contacto", id: "contact" },
];

export const NavbarItems = () => {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <ul className="hidden lg:flex gap-8">
      {NAVBAR_LINKS.map((item) => (
        <li className="px-2 py-5 group" key={item.id}>
          <Link
            href={`#${item.id}`}
            className="flex gap-1 items-start"
            aria-label={`links to section ${item.title}`}
            onClick={() => lenis?.scrollTo(`#${item.id}`)}
          >
            <p className="b1 text-white dark:text-primary transition-all duration-300 ease-in-out text-lg hover:text-xl hover:font-medium">
              {item.title}
            </p>
            <div className="bg-primary dark:text-primary opacity-0 group-hover:opacity-100 dark:h-1.5 dark:w-1.5 h-2 w-2 rounded-full transition duration-500 ease-in-out" />
          </Link>
        </li>
      ))}
    </ul>
  );
};