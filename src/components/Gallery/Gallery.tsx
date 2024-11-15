"use client";
import { Dispatch, memo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardImage from "./CardImage";
import { ROOMS } from "./rooms";

export interface Item {
  url: string;
  id: number;
}

interface GalleryProps {
  setSelected: Dispatch<Item | null>;
}

const Gallery = memo(({ setSelected }: GalleryProps) => {
  return (
    <div className="w-screen rounded-3xl px-2">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3 }}>
        <Masonry>
          {ROOMS.map((room) => (
            <CardImage image={room} key={room.id} setSelected={setSelected} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
});

Gallery.displayName = "Gallery";
export default Gallery;
