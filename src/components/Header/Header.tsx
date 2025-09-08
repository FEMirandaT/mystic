"use client";

import useResponsive from "@/hooks/useResponsive";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderRightAnimated from "./HeaderRightAnimated";
import StatsSection from "./StatsSection";

const Header = () => {
  const { isMobile } = useResponsive();

  return (
    <header
      className="w-screen z-0 relative font-prata bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50"
      id="header"
    >
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        {/* Sección izquierda - Contenido principal */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <HeaderLeft />
        </div>

        {/* Sección derecha - Imagen */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="w-full max-w-lg relative">
            {isMobile ? <HeaderRight /> : <HeaderRightAnimated />}
          </div>
        </div>
      </div>

      {/* Sección de estadísticas */}
      <StatsSection />

      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-200 rounded-full opacity-15 blur-3xl"></div>
      </div>
    </header>
  );
};

export default Header;
