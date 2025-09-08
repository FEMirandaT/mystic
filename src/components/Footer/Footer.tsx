/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";

import { COLORS } from "@/utils/colors";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import Image from "next/image";
import { SOCIAL_NETWORKS } from "../Contact/ContactSection";
import { WhatsappIcon } from "../icons";

const images = [
  "/header/woman.webp",
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
    <footer className="w-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 md:h-[250px] rounded-t-[32px] md:rounded-t-[48px] flex flex-col md:flex-row items-center justify-center py-8 md:py-12 gap-8 overflow-hidden">
      <div className="w-full max-w-wrapper flex flex-col md:flex-row items-center  justify-between">
        <div className="flex flex-col items-center md:items-start justify-center space-y-8 md:space-y-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
            <button
              onClick={() => lenis?.scrollTo(`#header`)}
              aria-label="home button with logo"
              title="Ir al inicio"
            >
              <Image
                src={"/logov1.png"}
                sizes="(max-width: 750px) 50vw, 25vw"
                alt=""
                quality={100}
                className="w-15 md:w-108 z-20"
                width={180}
                height={140}
              />
            </button>
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
              <a
                href="https://wa.me/+573045553476"
                aria-label="WhatsApp: contáctanos"
                title="Contactar por WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 dark:text-slate-100 flex gap-2 items-center"
              >
                <WhatsappIcon size={28} color={COLORS.primarydark} />
                <span className="font-medium">Contáctanos por WhatsApp</span>
              </a>
              <div className="flex flex-col gap-4">
                <h2 className="text-slate-600 dark:text-slate-300 text-sm">
                  Nuestras redes sociales
                </h2>
                <div className="flex gap-4">
                  {SOCIAL_NETWORKS.map((sn) => (
                    <motion.a
                      key={sn.url}
                      href={sn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className="flex flex-col gap-2 items-center"
                      aria-label={`Ir a ${sn.label}`}
                      title={sn.label}
                    >
                      {sn.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              onClick={() => lenis?.scrollTo("#about")}
              className="text-purple-600 dark:text-purple-300 text-lg underline"
              whileHover={{ scale: 1.1 }}
            >
              ¿Por qué nosotros?
            </motion.button>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="l1 text-p-2 text-center text-slate-600 dark:text-slate-300">
              © Copyright {new Date().getFullYear()} — &quot;Todos los derechos
              reservados&quot;
            </p>
            <a
              href="https://www.mirandadev.com"
              className="text-xs text-center text-slate-500 dark:text-slate-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Desarrollado por FMirandaDev
            </a>
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
              sizes="(max-width: 750px) 50vw, 25vw"
              fill
              quality={100}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      <figure className="absolute bottom-0 right-0 md:-bottom-[400px] md:-right-[400px] opacity-20 pointer-events-none">
        <Image
          src="/gradients/gradientWhite.png"
          sizes="(max-width: 750px) 50vw, 25vw"
          alt="Imagen de gradiente"
          width={800}
          height={800}
          className="relative   "
        />
      </figure>
      <figure className="absolute bottom-0 right-0 md:-bottom-[200px] md:-left-52 opacity-10 pointer-events-none ">
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          sizes="(max-width: 750px) 50vw, 25vw"
          width={600}
          height={600}
          className="relative   "
        />
      </figure>
    </footer>
  );
};

export default Footer;
