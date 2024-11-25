"use client";
import { AboutUs } from "@/components/AboutUs";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import GallerySection from "@/components/Gallery/GallerySection";
import Header from "@/components/Header/Header";
import { WhatsappIcon } from "@/components/icons";
import { useSidebar } from "@/components/Providers/SidebarProvider";
import { Sidebar } from "@/components/Sidebar";
import { COLORS } from "@/utils/colors";
import { motion } from "motion/react";

export default function Home() {
  const { isSidebarOpen, setSidebarOpen } = useSidebar();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-bgWhite2 dark:bg-header4 bg-cover object-center bg-no-repeat overflow-x-hidden relative font-prata">
      <Header />
      <ContactSection />
      <div className="flex flex-col items-center my-20">
        <h2 className="text-h10 md:text-h5 animated-gradient-text ">
          Nuestra sede
        </h2>
        <p className="text-h5 md:text-h2.5 animated-gradient-text">
          Estamos ubicados en el barrio El Galán
        </p>
        <p className="text-h5 md:text-h2.5 animated-gradient-text">
          Cerca a la Estación Pradera y Outlet de las Américas
        </p>
      </div>
      <GallerySection />
      <AboutUs />
      <Footer />

      <motion.a
        href="https://wa.me/+573027557903 "
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
        className="fixed flex gap-1 items-center bottom-10 right-5 md:bottom-20 md:right-10 bg-primarydarkest px-2 py-2 rounded-full shadow-2xl z-40"
      >
        <WhatsappIcon color={COLORS.white} size={36} />
        {/* <span className="text-white text-lg font-semibold">¡Escríbenos!</span> */}
      </motion.a>

      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
}
