/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { COLORS } from "@/utils/colors";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SOCIAL_NETWORKS } from "../Contact/ContactSection";
import { WhatsappIcon } from "../icons";

const images = [
  "/header/woman.png",
  "/header/woman2.png",
  "/header/woman3.png",
];

export const Footer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lenis = useLenis(({ scroll }) => {});

  const getRandomAnimation = () => ({
    x: -100,
    opacity: 0,
    scale: Math.random() * 1.5 + 0.5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full glass-extra-strong md:h-[250px] rounded-t-[100px] md:rounded-t-[150px] flex flex-col md:flex-row items-center justify-center py-6 md:py-12 gap-8">
      <div className="w-full max-w-wrapper flex flex-col md:flex-row items-center  justify-between">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
            <button
              onClick={() => lenis?.scrollTo(`#header`)}
              aria-label="hom button with logo"
            >
              <Image
                src={"/logo.png"}
                alt=""
                quality={100}
                className="w-15 md:w-108 z-20"
                width={180}
                height={140}
              />
            </button>
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
              <a
                href="https://wa.me/+573125235520"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary flex gap-2 items-center"
              >
                <WhatsappIcon size={36} color={COLORS.primary} />
                <span>Contactanos a nuestro Whatsapp</span>
              </a>
              <div className="flex flex-col gap-4">
                <h4 className="text-primary text-sm">
                  Nuestras redes sociales
                </h4>
                <div className="flex gap-4">
                  {SOCIAL_NETWORKS.map((sn) => (
                    <motion.button
                      key={sn.url}
                      whileHover={{ scale: 2 }}
                      className="flex flex-col gap-2 items-center"
                    >
                      {sn.icon}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              onClick={() => lenis?.scrollTo("#about")}
              className="text-primary text-3xl"
              whileHover={{ scale: 1.1 }}
            >
              ¿Por qué nosotros?
            </motion.button>
          </div>
        </div>

        <div className="md:flex flex-row gap-4 hidden ">
          <motion.div
            key={currentImageIndex}
            className="w-96 h-96 md:w-96 md:h-96 relative"
            initial={getRandomAnimation()}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={getRandomAnimation()}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Footer Image ${currentImageIndex + 1}`}
              fill
              quality={100}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
