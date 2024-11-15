"use client";
import { motion } from "framer-motion";
import { Dispatch, memo } from "react";
import { Item } from "./Gallery";

interface PropsImage {
  image: Item;
  setSelected: Dispatch<Item | null>;
}

const CardImage = memo(({ image, setSelected }: PropsImage) => {
  return (
    <div
      className="inline-block w-full h-full mb-4 px-2"
      onClick={() => setSelected(image)}
    >
      <motion.img
        src={image.url}
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="w-full bg-base-100 shadow-xl image-full h-full cursor-pointer object-cover"
        layoutId={`card-${image.id}`}
      />
    </div>
  );
});
CardImage.displayName = "CardImage";

export default CardImage;
