"use client";
import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import ImageModal from "../ui/ImageModal";
import Gallery, { Item } from "./Gallery";

const GallerySection = () => {
  const [selected, setSelected] = useState<Item | null>(null);
  return (
    <LayoutGroup>
      <div className=" w-screen px-2" id="sede">
        <Gallery setSelected={setSelected} />
        <ImageModal selected={selected} setSelected={setSelected} />
      </div>
    </LayoutGroup>
  );
};

export default GallerySection;
