"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, memo } from "react";
import { Item } from "./Gallery";

interface PropsImage {
  image: Item;
  setSelected: Dispatch<Item | null>;
}

const CardImage = memo(({ image, setSelected }: PropsImage) => {
  return (
    <motion.div
      className="w-full h-full rounded-lg relative  min-h-60"
      onClick={() => setSelected(image)}
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      layoutId={`card-${image.id}`}
    >
      <Image
        src={image.url}
        className="bg-base-100 shadow-xl w-full cursor-pointer object-cover rounded-lg"
        alt="Gallery image"
        fill
      />
    </motion.div>
  );
});
CardImage.displayName = "CardImage";

export default CardImage;
