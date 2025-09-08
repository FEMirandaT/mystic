"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import type { Item } from "./Gallery";
import { ROOMS } from "./rooms";

interface CarouselGalleryProps {
  setSelected: (item: Item) => void;
}

const CarouselGallery = ({ setSelected }: CarouselGalleryProps) => {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = useMemo(() => (isMobile ? 1 : 3), [isMobile]);
  const [isHovered, setIsHovered] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Calcular el ancho de cada slide en px según el viewport y las visibles
  useEffect(() => {
    const compute = () => {
      const w = viewportRef.current?.offsetWidth ?? 0;
      if (w > 0) setSlideWidth(w / visibleImages);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [visibleImages]);

  // Asegura que el índice sea válido al cambiar el número de visibles
  useEffect(() => {
    const maxIndex = Math.max(0, ROOMS.length - visibleImages);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleImages, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleImages >= ROOMS.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, ROOMS.length - visibleImages) : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, ROOMS.length - visibleImages);
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  // Autoplay con pausa al hover
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + visibleImages >= ROOMS.length ? 0 : prev + 1
      );
    }, 3500);
    return () => clearInterval(id);
  }, [isHovered, visibleImages]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Título de la galería */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
          Nuestras Instalaciones
        </h2>
        <p className="text-lg text-slate-600">
          Habitaciones de lujo y espacios profesionales
        </p>
      </div>

      {/* Carrusel principal */}
      <div
        className="relative overflow-hidden rounded-2xl bg-white shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={viewportRef}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
          }}
        >
          {ROOMS.map((room, index) => (
            <div
              key={room.id}
              className="relative group cursor-pointer flex-shrink-0"
              style={{
                width: slideWidth
                  ? `${slideWidth}px`
                  : `${100 / visibleImages}%`,
              }}
              onClick={() => setSelected({ id: room.id, url: room.url })}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={room.url}
                  alt={`Habitación ${room.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <ArrowLeftIcon size={24} color="#1e293b" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Siguiente imagen"
        >
          <ArrowRightIcon size={24} color="#1e293b" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(ROOMS.length / visibleImages) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * visibleImages)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / visibleImages) === index
                  ? "bg-rose-500 scale-110"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Ir a grupo de imágenes ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CarouselGallery;
