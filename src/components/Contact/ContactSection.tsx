"use client";
import { COLORS } from "@/utils/colors";
import { motion } from "motion/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "../icons";

export const SOCIAL_NETWORKS = [
  {
    url: "https://www.instagram.com/mysticparadisebogota?igsh=MWhnNmhtbWV3OXA2eA==",
    icon: <InstagramIcon color={COLORS.primary} size={36} />,
    label: "Instagram",
    user: "@mysticparadise",
  },
  {
    url: "https://www.tiktok.com/@studio.wc.mystic?_t=8rS5U5rvZEz&_r=1",
    icon: <TiktokIcon color={COLORS.primary} size={36} />,
    label: "Tik Tok",
    user: "@mysticparadise",
  },
  {
    url: "https://www.facebook.com/profile.php?id=61564607116969&mibextid=ZbWKwL",
    icon: <FacebookIcon color={COLORS.primary} size={34} />,
    label: "Facebook",
  },
];

const ContactSection = () => {
  return (
    <section
      className="pt-52 pb-20 flex flex-col w-full h-screen justify-center items-center gap-10 relative z-30"
      id="contact"
    >
      <h2 className="text-h10 md:text-h5 animated-gradient-text">
        Nuestras redes
      </h2>
      <div
        className="w-4/5 md:h-2/3 rounded-3xl glass md:glass-extra-strong  flex flex-col justify-center items-center gap-8  p-2 relative"
        style={{
          backgroundColor: "transparent",
          border: "4px solid transparent",
          borderImage:
            "linear-gradient(to bottom, #4f830033, #90c048,#e2ffb622) 1",
        }}
      >
        <figure className="absolute -bottom-[800px] -right-[800px] opacity-40 pointer-events-none ">
          <Image
            src="/gradients/gradientWhite.png"
            alt="Imagen de gradiente"
            width={1800}
            height={1800}
            className="relative pointer-events-none"
          />
        </figure>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-h5 md:text-h2.5 text-primary">Síguenos</h2>
          <p className="text-xl max-w-[40rem] text-center text-primary">
            ¡Únete a nuestra vibrante comunidad en redes sociales!
          </p>
          <div className=" flex items-center h-full justify-center min-h-80 md:min-h-40 max-w-[48rem]">
            <TypeAnimation
              className="animated-gradient-text text-center text-[2.5rem] md:text-[3rem]"
              deletionSpeed={5}
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              sequence={[
                "Encuentra consejos profesionales,",
                1000,
                "conoce a nuestro equipo",
                1000,
                "y mantente informada sobre eventos especiales",
                1000,
                "Síguenos y sé parte de una comunidad que crece día a día.",
                1000,
                "¡No te pierdas ninguna actualización!",
                1000,
              ]}
              // style={{ fontSize: "3em" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="flex justify-center gap-8 md:gap-14 z-50">
          {SOCIAL_NETWORKS.map((sn) => (
            <motion.a
              key={sn.url}
              href={sn.url}
              target="_blank"
              aria-label={`Icon that takes you to the network ${sn.label}`}
              whileHover={{ scale: 2 }}
              rel="noopener noreferrer"
              className="flex flex-col gap-2 items-center z-50"
            >
              {sn.icon}
              <span className="text-primary font-semibold">{sn.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
