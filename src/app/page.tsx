import { ContactSection } from "@/components/Contact";
import GallerySection from "@/components/Gallery/GallerySection";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-bgWhite2 dark:bg-header4 bg-cover object-center bg-no-repeat">
      <Header />
      <ContactSection />
      <GallerySection />
    </div>
  );
}
