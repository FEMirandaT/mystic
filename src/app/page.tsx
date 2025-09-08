"use client";

import { AboutUs } from "@/components/AboutUs";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import CarouselGallerySection from "@/components/Gallery/CarouselGallerySection";
import { Hero } from "@/components/Hero";
import { Sede } from "@/components/Sede";
import { WhatsappIcon } from "@/components/icons";
import { COLORS } from "@/utils/colors";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br  overflow-x-hidden relative">
      {/* <UrgencyBanner /> */}
      <Hero />
      {/* <Header /> */}
      <ContactSection />
      <CarouselGallerySection />

      {/* Sección de información de ubicación mejorada */}
      <Sede />
      <AboutUs />
      <Footer />

      <motion.a
        href="https://wa.me/+573045553476?text=¡Hola!%20Quiero%20más%20información%20sobre%20trabajar%20en%20Mystic%20Paradise.%20¿Podrían%20contarme%20sobre%20los%20beneficios%20y%20requisitos?"
        aria-label="whatsapp icon that takes you to the whatsapp application"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="fixed flex gap-2 items-center bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-full shadow-2xl z-40 transition-all duration-200"
      >
        <WhatsappIcon color={COLORS.white} size={32} />
        <span className="hidden sm:block text-white font-semibold text-sm">
          Contáctanos
        </span>
      </motion.a>
    </div>
  );
}
