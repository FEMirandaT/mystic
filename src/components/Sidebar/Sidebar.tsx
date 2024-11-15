"use client";
import useResponsive from "@/hooks/useResponsive";
import Link from "next/link";
import { Dispatch, useEffect } from "react";
import { CloseIcon } from "../icons";
import { IconButton } from "../ui/IconButton";
import { SidebarLinks } from "./SidebarLinks";

export type Options = "language" | "theme" | null;

interface Props {
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<boolean>;
}

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }: Props) => {
  const { isMobile } = useResponsive();

  const handleCLose = () => {
    console.log("click", { isSidebarOpen });
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile, setSidebarOpen]);

  return (
    <div
      className={`fixed lg:hidden top-0 right-0 h-full w-full flex flex-col justify-start transform transition-transform duration-300 ease-in-out z-50 glass-extra-strong ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } z-30 px-4 pt-108 pb-6`}
    >
      <header className="w-full">
        <IconButton
          icon={(color) => <CloseIcon color={color} size={16} />}
          onClick={handleCLose}
          position="absolute"
          topPosition="2"
          rightPosition="3"
          iconSize={16}
        />
      </header>
      <div className="flex flex-col flex-1 mt-20">
        <div className="w-full relative flex flex-col gap-20">
          <div className={`transition-all flex flex-col gap-8`}>
            <h3 className="text-h10 text-white  inline">Menú</h3>
          </div>
          <SidebarLinks />
        </div>
      </div>
      <p className="l1 text-p-2 text-center text-primary">
        © Copyright 2024 — &quot;Todos los derechos reservados&quot;
      </p>
      <Link
        href="www.fmiranda.com"
        className="text-xs text-center text-primary underline"
      >
        Desarrollado por FMirandaDev
      </Link>
    </div>
  );
};
