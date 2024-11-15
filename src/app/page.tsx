import { AboutUs } from "@/components/AboutUs";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import GallerySection from "@/components/Gallery/GallerySection";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-bgWhite2 dark:bg-header4 bg-cover object-center bg-no-repeat relative overflow-hidden">
      <Header />
      <ContactSection />
      <GallerySection />
      <AboutUs />
      <Footer />
      <figure className="absolute -bottom-[400px] -right-[400px] opacity-40 pointer-events-none">
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          width={800}
          height={800}
          className="relative  pointer-events-none"
        />
      </figure>
      <figure className="absolute -bottom-[200px] -left-52 opacity-40 pointer-events-none">
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          width={600}
          height={600}
          className="relative  pointer-events-none"
        />
      </figure>
    </div>
  );
}
