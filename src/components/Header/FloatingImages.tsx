"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGE_HEADER = [
  "/rooms/1.jpeg",
  "/rooms/2.jpeg",
  "/rooms/3.jpeg",
  "/rooms/4.jpeg",
  "/rooms/5.jpeg",
  "/rooms/6.jpeg",
];

const RandomPositionsMap: { [key: string]: { x: number; y: number } } = {
  "1": { x: 450, y: 200 },
  "2": { x: 350, y: -200 },
  "3": { x: 250, y: 200 },
  "4": { x: -250, y: -200 },
  "5": { x: -350, y: 200 },
  "6": { x: -450, y: -200 },
};

const FloatingImages = () => {
  return (
    <div
      className={`absolute w-full h-full top-0 left-0 flex items-center justify-center ${"z-10"}`}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {GALLERY_IMAGE_HEADER.map((image, index) => (
          <motion.div
            key={image}
            className="absolute w-44 h-80"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: RandomPositionsMap[index + 1].x,
              y: RandomPositionsMap[index + 1].y,
              opacity: 0.3,
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }}
            whileHover={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 3.5,
            }}
            whileHoverTransition={{
              ease: "easeOut",
            }}
          >
            <Image
              src={image}
              alt="Imagen de uno de los cuartos"
              fill
              quality={100}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingImages;
