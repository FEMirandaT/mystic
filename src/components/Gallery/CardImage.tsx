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
      className="w-full h-full rounded-lg relative min-h-96  md:min-h-[500px]"
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
        className="bg-base-100 shadow-xl w-full cursor-pointer object-cover h-full rounded-lg"
        alt="Gallery image"
        fill
        sizes="(max-width: 750px) 50vw, 25vw"
      />
    </motion.div>
  );
});
CardImage.displayName = "CardImage";

export default CardImage;
