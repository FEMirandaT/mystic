/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch } from "react";
import { Item } from "../Gallery/Gallery";

interface Props {
  selected: Item | null;
  setSelected: Dispatch<Item | null>;
}

const ImageModal = ({ selected, setSelected }: Props) => {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 z-50 cursor-pointer overflow-y-scroll flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[80%] md:max-w-[60%] mx-auto my-8 px-8 cursor-default"
          >
            <motion.div className="w-full" layoutId={`card-${selected.id}`}>
              <img
                src={selected.url}
                alt="imagen de habitación"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
