"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Sidebar } from "../Sidebar";

interface SidebarContextProps {
  setSidebarOpen: Dispatch<boolean>;
  isSidebarOpen: boolean;
  toggleSidebar: () => void; //
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    console.log("toggle");

    setSidebarOpen((prevSidebarState) => !prevSidebarState);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        toggleSidebar,
        isSidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
