"use client";

import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomDialog = ({ children, isOpen, onOpenChange }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogContent className="sm:max-w-[90vw] border-none bg-transparent">
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CustomDialog;
