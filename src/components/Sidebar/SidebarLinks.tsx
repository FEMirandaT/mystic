/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLenis } from "@studio-freight/react-lenis";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COLORS } from "../../utils/colors";
import { NAVBAR_LINKS } from "../Navbar";
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

  return (
    <ul className="flex flex-col gap-4 flex-1">
      <Link
        href="/"
        aria-label="Link que dirige al home "
        className="flex items-center gap-2  text-h5"
        onClick={toggleSidebar}
      >
        <HomeIcon color={COLORS.primary} />
        <p className=" text-white dark:text-primary transition-all duration-300 ease-in-out text-2xl font-semibold">
          Home
        </p>
      </Link>
      {NAVBAR_LINKS.map((item) => (
        <li className="px-2 py-5 group list-none" key={item.id}>
          <Link
            href={item.title === "Blogs" ? "/blogs" : `/#${item.id}`}
            className="flex gap-1 items-start text-h5"
            aria-label={`links to section ${item.title}`}
            onClick={() => handleNavigation(item.id)}
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
