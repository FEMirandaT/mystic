"use client";

import { AboutUs } from "@/components/AboutUs";
import { COLORS } from "@/utils/colors";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import GallerySection from "@/components/Gallery/GallerySection";
import Header from "@/components/Header/Header";
import { WhatsappIcon } from "@/components/icons";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-bgWhite2 dark:bg-header4 bg-cover object-center bg-no-repeat overflow-x-hidden relative font-prata">
      <Header />
      <ContactSection />
      <div className="flex flex-col items-center my-10 md:my-20 mt-24">
        <h2 className="text-h10 md:text-h5 animated-gradient-text  text-center">
          Nuestra sede en Bogotá
        </h2>
        <p className="text-lg md:text-h2.5 animated-gradient-text text-center font-bold leading-tight">
          Estamos ubicados en el barrio El Galán
        </p>
        <p className="text-lg md:text-h2.5 animated-gradient-text text-center font-bold leading-tight">
          Cerca a la Estación Pradera y Outlet de las Américas
        </p>
        <p className="text-lg md:text-h2.5 animated-gradient-text text-center font-bold leading-tight">
          Trabaja con nosotros
        </p>
      </div>
      <GallerySection />
      <AboutUs />
      <Footer />

      <motion.a
        href="https://wa.me/+573027557903 "
        aria-label="whatasapp icon that takes you to the whatsapp aplication"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="fixed flex gap-1 items-center bottom-10 right-5 md:bottom-20 md:right-10 bg-green-700 px-2 py-2 rounded-full shadow-2xl z-40"
      >
        <WhatsappIcon color={COLORS.white} size={48} />
      </motion.a>
    </div>
  );
}
