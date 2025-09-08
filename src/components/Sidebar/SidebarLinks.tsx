import {
  BookOpenIcon,
  BuildingIcon,
  ChevronRightIcon,
  HomeIcon,
  MailIcon,
  UsersIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { NAVBAR_LINKS } from "../Navbar";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLenis } from "@studio-freight/react-lenis";
import { useSidebar } from "../Providers/SidebarProvider";

export const SidebarLinks = () => {
  const lenis = useLenis(({ scroll }) => {});
  const { toggleSidebar } = useSidebar();
  const { push } = useRouter();
  const pathName = usePathname();

  const handleNavigation = (id: string) => {
    toggleSidebar();
    if (pathName !== "/") {
      return push(`/`);
    } else {
      lenis?.scrollTo(`#${id}`);
    }
  };

  // Map navigation items to their corresponding icons
  const getNavIcon = (title: string) => {
    switch (title) {
      case "Blogs":
        return BookOpenIcon;
      case "Nosotros":
        return UsersIcon;
      case "Nuestra sede":
        return BuildingIcon;
      case "Contacto":
        return MailIcon;
      default:
        return ChevronRightIcon;
    }
  };

  return (
    <ul className="flex flex-col gap-2 flex-1 w-full">
      {/* Home Link */}
      <li className="w-full">
        <Link
          href="/"
          aria-label="Link que dirige al home"
          className="flex items-center justify-between w-full px-4 py-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 ease-in-out group"
          onClick={toggleSidebar}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">
              <HomeIcon size={20} color="white" />
            </div>
            <span className="text-white font-medium text-lg">Home</span>
          </div>
          <ChevronRightIcon
            size={16}
            color="white"
            className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
          />
        </Link>
      </li>

      {/* Navigation Links */}
      {NAVBAR_LINKS.map((item) => {
        const IconComponent = getNavIcon(item.title);
        return (
          <li className="w-full" key={item.id}>
            <Link
              href={item.title === "Blogs" ? "/blogs" : `/#${item.id}`}
              className="flex items-center justify-between w-full px-4 py-4 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 ease-in-out group"
              aria-label={`links to section ${item.title}`}
              onClick={() => handleNavigation(item.id)}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <IconComponent size={20} color="white" />
                </div>
                <span className="text-white font-medium text-lg">
                  {item.title}
                </span>
              </div>
              <ChevronRightIcon
                size={16}
                color="white"
                className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
