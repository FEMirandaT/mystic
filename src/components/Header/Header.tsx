"use client";

import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import FloatingImages from "./FloatingImages";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderRightAnimated from "./HeaderRightAnimated";

const Header = () => {
  const { isMobile } = useResponsive();

  return (
    <header className="w-screen h-screen z-0 relative font-prata" id="header">
      <div className="flex flex-col h-full items-center justify-between">
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          width={1600}
          height={1600}
          sizes="(max-width: 750px) 50vw, 25vw"
          className="absolute top-2/3 right-1/2 opacity-50  pointer-events-none"
        />
        <figure className="absolute -top-80 right-0 opacity-30 pointer-events-none">
          <Image
            src="/gradients/gradientWhite.png"
            alt="Imagen de gradiente"
            width={800}
            height={800}
            className="relative"
            sizes="(max-width: 750px) 50vw, 25vw"
          />
        </figure>
        <HeaderLeft />
        <div className="w-full relative top-10 md:top-20 ">
          {isMobile ? <HeaderRight /> : <HeaderRightAnimated />}
        </div>
        <FloatingImages />
      </div>
    </header>
  );
};

export default Header;
