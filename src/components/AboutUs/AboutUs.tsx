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
    text: "Pagos puntuales y seguros cada quincena, sin retrasos ni excusas",
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
  {
    id: 9,
    text: "Fotografías profesionales mensuales.",
  },
];
const OTROS_BENEFICIOS = [
  { id: 1, text: "Pagos hasta el 60%" },
  { id: 2, text: "Gran premio Anual" },
  { id: 3, text: "Premio Mensual" },
  { id: 4, text: "Bonos semanales" },
  { id: 5, text: "Habitaciones de Lujo" },
  { id: 6, text: "Zona de Maquillaje" },
  { id: 7, text: "Zona de descanso" },
  { id: 8, text: "Zona de Alimentación" },
  { id: 9, text: "Parqueadero cubierto" },
  { id: 10, text: "Capacitaciones" },
  { id: 11, text: "Certificado Laboral" },
  { id: 12, text: "Pagos Quincenales Puntuales" },
  { id: 13, text: "Fotografía profesional mensual" },
  { id: 14, text: "Video profesional cada 6 meses" },
  { id: 15, text: "Convenio Guía Cereza y Diver Joy" },
];

export const AboutUs = () => {
  return (
    <section
      className="w-full max-w-wrapper flex flex-col items-center md:items-center md:min-h-screen p-4 md:py-10 relative md:my-10"
      id="about"
    >
      <figure className="absolute bottom-[200px] right-[400px] opacity-40  ">
        <Image
          src="/gradients/gradientWhite.png"
          alt="Imagen de gradiente"
          width={2200}
          sizes="(max-width: 750px) 50vw, 25vw"
          height={2200}
          className="relative   "
        />
      </figure>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-1 justify-start items-start">
          <h2 className="text-primary text-h10 md:text-h5 leading-[0.9]">
            ¿Por qué <br />
            <p className="text-gold">nosotros?</p>
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
                color={i % 2 === 0 ? COLORS.primary : COLORS.gold}
              />
              <p
                className={clsx(
                  "text-lg",
                  i % 2 === 0 ? "text-primary" : "text-gold"
                )}
              >
                {b.text}.
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center mt-20 gap-5">
        <h2 className="text-h5 md:text-h2.5  text-gold">
          Además tambien te brindamos
        </h2>
        <ul className="flex flex-col items-center gap-2 md:gap-4 list-disc">
          {OTROS_BENEFICIOS.map((item) => (
            <li className="" key={item.id}>
              <p className="text-xl text-primary">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
