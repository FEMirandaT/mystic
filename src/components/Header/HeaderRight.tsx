"use client";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ImageBlurFrame } from "../Reusables";

const HeaderRight = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  // Transformations based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2.5]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Update isVisible based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsVisible(latest < 0.6); // Hide when scrolled beyond 40%
    });
    return () => unsubscribe(); // Clean up listener on unmount
  }, [scrollYProgress]);

  return (
    <motion.div
      className={clsx(
        "absolute flex justify-center w-full -bottom-12",
        !isVisible && "pointer-events-none"
      )}
      style={{ scale, y, opacity }}
    >
      <ImageBlurFrame height={700} width={450} image="/header/woman.png" />
    </motion.div>
  );
};

export default HeaderRight;
