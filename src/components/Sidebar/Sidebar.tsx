"use client";

import { Dispatch, useEffect } from "react";

import useResponsive from "@/hooks/useResponsive";
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
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile, setSidebarOpen]);

  return (
    <nav
      className={`fixed lg:hidden top-0 right-0 w-full h-screen flex flex-col justify-start transform transition-transform duration-300 ease-in-out z-50 glass-extra-strong-sidebar ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } px-6 pt-20 pb-6`}
    >
      <header className="w-full mb-8">
        <IconButton
          icon={(color) => <CloseIcon color={color} size={20} />}
          onClick={handleCLose}
          position="absolute"
          topPosition="4"
          rightPosition="6"
          iconSize={20}
        />
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-2">Menú Principal</h2>
          <div className="w-16 h-1 bg-white/30 rounded-full"></div>
        </div>
      </header>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="w-full relative flex flex-col gap-6 flex-1">
          <SidebarLinks />
        </div>
      </div>

      <footer className="mt-8 pt-6 border-t border-white/20">
        <p className="text-sm text-center text-white/80 mb-2">
          © Copyright 2024 — "Todos los derechos reservados"
        </p>
        <a
          href="https://www.mirandadev.com"
          className="text-xs text-center text-white/60 hover:text-white underline block transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por FMirandaDev
        </a>
      </footer>
    </nav>
  );
};
