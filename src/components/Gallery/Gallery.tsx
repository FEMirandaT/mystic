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
          <div className="bg-gold w-full h-full md:min-h-96 rounded-xl flex justify-center items-center">
            <p className="text text-primaryButton text-h10 md:text-h5 text-center leading-[1.3] md:leading-[0.9] font-pinyon font-semibold tracking-wide">
              Mystic Paradise
            </p>
          </div>
          {ROOMS.slice(0, 5).map((room) => (
            <CardImage image={room} key={room.id} setSelected={setSelected} />
          ))}
          <div className="bg-gold w-full h-full md:min-h-96 rounded-xl flex justify-center items-center">
            <p className="text text-primaryButton text-h10 md:text-h5 text-center leading-[1.3] md:leading-[0.9] font-pinyon font-semibold tracking-wide">
              Mystic Paradise
            </p>
          </div>
          {ROOMS.slice(6, 11).map((room) => (
            <CardImage image={room} key={room.id} setSelected={setSelected} />
          ))}
          <div className="bg-gold w-full h-full min-h-96 rounded-xl flex justify-center items-center">
            <p className="text text-primarydarkest text-h10 md:text-h5 text-center leading-[1.3] md:leading-[0.9] font-pinyon font-semibold tracking-wide">
              Mystic Paradise
            </p>
          </div>{" "}
          {ROOMS.slice(11, -1).map((room) => (
            <CardImage image={room} key={room.id} setSelected={setSelected} />
          ))}
          <div className="bg-gold w-full h-full min-h-96 rounded-xl flex justify-center items-center">
            <p className="text text-primarydarkest text-h10 md:text-h5 text-center leading-[1.3] md:leading-[0.9] font-pinyon font-semibold tracking-wide">
              Mystic Paradise
            </p>
          </div>{" "}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
});

Gallery.displayName = "Gallery";
export default Gallery;
