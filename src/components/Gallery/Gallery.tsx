/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
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
    <div className="w-screen rounded-3xl px-2 relative">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3 }}>
        <Masonry gutter="0.8rem">
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
