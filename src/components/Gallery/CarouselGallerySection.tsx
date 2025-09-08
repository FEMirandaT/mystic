"use client";

import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import ImageModal from "../ui/ImageModal";
import CarouselGallery from "./CarouselGallery";
import { Item } from "./Gallery";

const CarouselGallerySection = () => {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <LayoutGroup>
      <div className="w-full px-4 py-16" id="sede">
        <CarouselGallery setSelected={(item) => setSelected(item)} />
        <ImageModal selected={selected} setSelected={setSelected} />
      </div>
    </LayoutGroup>
  );
};

export default CarouselGallerySection;
