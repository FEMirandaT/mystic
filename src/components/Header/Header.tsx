"use client";

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
    <section className="w-screen h-screen z-0  relative">
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
        <HeaderLeft />
        <HeaderRight />
        <FloatingImages />
      </div>
    </section>
  );
};

export default Header;
