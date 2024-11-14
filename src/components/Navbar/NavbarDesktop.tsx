import { COLORS } from "@/utils/colors";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export const NavbarDesktop = () => {
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
          aria-label="toggle theme"
        >
          <div className="transform transition-all duration-300 ease-in-out group-hover:rotate-180">
            {theme === "dark" ? (
              <SunIcon color={COLORS.primarydark} />
            ) : (
              <MoonIcon color={COLORS.primarydark} />
            )}
          </div>
        </button>
      </div>
    </>
  );
};
