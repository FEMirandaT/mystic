import { COLORS } from "@/utils/colors";
import { useTheme } from "next-themes";
import { useState } from "react";
import { MoonIcon, SunIcon } from "../icons";

export const NavbarDesktop = () => {
  const [isHover, setIsHover] = useState(false);
  const { setTheme, theme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") return setTheme("light");
    setTheme("dark");
  };

  return (
    <>
      <div className="actions-container flex gap-4 items-center">
        <button
          className="p-2 bg-[#64636322] backdrop-blur-md rounded-full group"
          onClick={handleTheme}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          aria-label="toggle theme"
        >
          <div className="transform transition-all duration-300 ease-in-out group-hover:rotate-180">
            {theme === "dark" ? (
              <SunIcon color={isHover ? "white" : COLORS.primarydark} />
            ) : (
              <MoonIcon />
            )}
          </div>
        </button>
      </div>
    </>
  );
};
