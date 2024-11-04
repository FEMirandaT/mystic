"use client";

import { useEffect, useState } from "react";
import { CustomDialog } from "../CustomDialog";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 200);
    return () => {};
  }, []);
  return (
    <div className="w-screen h-screen z-0 relative">
      <CustomDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <video
          src="/modal.mp4"
          className="w-full max-h-[80vh] object-cover rounded-lg"
          autoPlay
          muted
          onEnded={() => setIsDialogOpen(false)}
        />
      </CustomDialog>
    </div>
  );
};

export default Header;
