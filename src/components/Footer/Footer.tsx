/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { COLORS } from "@/utils/colors";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    <footer className="w-full glass-extra-strong md:h-[250px] rounded-t-[100px] md:rounded-t-[150px] flex flex-col md:flex-row items-center justify-center py-6 md:py-12 gap-8 overflow-hidden">
      <div className="w-full max-w-wrapper flex flex-col md:flex-row items-center  justify-between">
        <div className="flex flex-col items-center md:items-start justify-center space-y-8 md:space-y-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
            <button
              onClick={() => lenis?.scrollTo(`#header`)}
              aria-label="hom button with logo"
            >
              <Image
                src={"/logov2.png"}
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
                href="https://wa.me/+573027557903"
                aria-label="whatasapp icon that takes you to the whatsapp aplication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary flex gap-2 items-center"
              >
                <WhatsappIcon size={36} color={COLORS.primary} />
                <span>Contactanos a nuestro Whatsapp</span>
              </a>
              <div className="flex flex-col gap-4">
                <h2 className="text-primary text-sm">
                  Nuestras redes sociales
                </h2>
                <div className="flex gap-4">
                  {SOCIAL_NETWORKS.map((sn) => (
                    <motion.a
                      key={sn.url}
                      href={sn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 2 }}
                      className="flex flex-col gap-2 items-center"
                    >
                      {sn.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              onClick={() => lenis?.scrollTo("#about")}
              className="text-primary text-3xl underline"
              whileHover={{ scale: 1.1 }}
            >
              ¿Por qué nosotros?
            </motion.button>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="l1 text-p-2 text-center text-primary">
              © Copyright 2024 — &quot;Todos los derechos reservados&quot;
            </p>
            <Link
              href="www.fmiranda.com"
              className="text-xs text-center text-primary underline"
            >
              Desarrollado por FMirandaDev
            </Link>
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
      <figure className="absolute bottom-0 right-0 md:-bottom-[400px] md:-right-[400px] opacity-40  pointer-events-none">
        <Image
          src="/gradients/gradientWhite.png"
          sizes="(max-width: 750px) 50vw, 25vw"
          alt="Imagen de gradiente"
          width={800}
          height={800}
          className="relative   "
        />
      </figure>
      <figure className="absolute bottom-0 right-0 md:-bottom-[200px] md:-left-52 opacity-40 pointer-events-none ">
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
