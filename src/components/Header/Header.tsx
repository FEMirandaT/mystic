"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomDialog } from "../CustomDialog";
import FloatingImages from "./FloatingImages";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 200);

    return () => {};
  }, []);
  return (
    <header className="w-screen h-screen z-0  relative" id="header">
      <div className="flex flex-col items-center justify-center">
        <CustomDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <video
            src="/modal.mp4"
            id="modal-video"
            className="w-full max-h-[80vh] object-contain object-top rounded-lg"
            autoPlay
            muted
            controls
            onEnded={() => setIsDialogOpen(false)}
          />
        </CustomDialog>
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          width={1600}
          height={1600}
          className="absolute top-2/3 right-1/2 opacity-50 pointer-events-none"
        />
        <figure className="absolute -top-80 right-0 opacity-30">
          <Image
            src="/gradients/gradientWhite.png"
            alt="Imagen de gradiente"
            width={800}
            height={800}
            className="relative"
          />
        </figure>
        <HeaderLeft />
        <HeaderRight />
        <FloatingImages />
      </div>
    </header>
  );
};

export default Header;
