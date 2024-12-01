/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";
import { NAVBAR_LINKS } from "../Navbar";
import { useSidebar } from "../Providers/SidebarProvider";

export const SidebarLinks = () => {
  const lenis = useLenis(({ scroll }) => {});
  const { toggleSidebar } = useSidebar();

  return (
    <ul className="flex flex-col gap-4 flex-1">
      {NAVBAR_LINKS.map((item) => (
        <li className="px-2 py-5 group list-none" key={item.id}>
          <Link
            href={`#${item.id}`}
            className="flex gap-1 items-start text-h5"
            aria-label={`links to section ${item.title}`}
            onClick={() => {
              toggleSidebar();
              lenis?.scrollTo(`#${item.id}`);
            }}
          >
            <p className=" text-white dark:text-primary transition-all duration-300 ease-in-out">
              {item.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
