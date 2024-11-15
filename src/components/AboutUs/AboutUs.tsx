"use client";
import { COLORS } from "@/utils/colors";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import { CameraIcon } from "../icons";

const BENEFICIOS = [
  {
    id: 1,
    text: "Gana desde el primer día con nuestras atractivas comisiones iniciales",
  },
  {
    id: 2,
    text: "Capacitación profesional personalizada para maximizar tus ingresos desde el comienzo",
  },
  {
    id: 3,
    text: "Instalaciones de lujo con sets temáticos y equipos de última generación",
  },
  {
    id: 4,
    text: "Pagos puntuales y seguros cada quinceena, sin retrasos ni excusas",
  },
  {
    id: 5,
    text: "Horarios totalmente flexibles que se adaptan a tu estilo de vida",
  },
  {
    id: 6,
    text: "Ambiente seguro y profesional con personal de apoyo las 24/7",
  },
  {
    id: 7,
    text: "Asesoría en imagen y marketing personal para potenciar tu éxito",
  },
  {
    id: 8,
    text: "Bonos especiales por cumplimiento de metas y trabajo en equipo",
  },
];

export const AboutUs = () => {
  return (
    <section
      className="w-full max-w-wrapper flex justify-center items-start md:items-center md:h-screen p-4 py-10 relative"
      id="about"
    >
      <figure className="absolute bottom-[200px] right-[400px] opacity-40 pointer-events-none">
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          width={2200}
          height={2200}
          className="relative  pointer-events-none"
        />
      </figure>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-1 justify-start items-start">
          <h2 className="text-primary text-h10 md:text-h5 leading-[0.9]">
            ¿Por qué <br />
            <p className="text-primarydark">nosotros?</p>
          </h2>
        </div>
        <ul className="flex flex-col flex-1 gap-4">
          {BENEFICIOS.map((b, i) => (
            <motion.li
              className="flex gap-5 items-center justify-start"
              key={b.id}
              whileHover={{ scale: 1.2 }}
            >
              <CameraIcon
                size={36}
                color={i % 2 === 0 ? COLORS.primary : COLORS.primarydark}
              />
              <p
                className={clsx(
                  "text-lg",
                  i % 2 === 0 ? "text-primary" : "text-primarydark"
                )}
              >
                {b.text}.
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
