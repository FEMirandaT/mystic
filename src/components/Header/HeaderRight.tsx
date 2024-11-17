"use client";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ImageBlurFrame } from "../Reusables";

const HeaderRight = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 3.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsVisible(latest < 0.6);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className={clsx(
        "absolute flex justify-center w-full -bottom-36 pointer-events-none",
        isVisible ? "flex" : "hidden"
      )}
      style={{ scale, opacity }}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <ImageBlurFrame height={800} width={550} image="/header/woman.png" />
    </motion.div>
  );
};

export default HeaderRight;
