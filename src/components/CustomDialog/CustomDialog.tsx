"use client";

import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomDialog = ({ children, isOpen, onOpenChange }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogContent className="sm:max-w-[80vw] border-none bg-transparent p-0">
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CustomDialog;
