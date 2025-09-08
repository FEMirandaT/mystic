"use client";

import { FacebookIcon, InstagramIcon, TiktokIcon } from "../icons";

import { COLORS } from "@/utils/colors";

export const SOCIAL_NETWORKS = [
  {
    url: "https://www.instagram.com/mysticparadisebogota?igsh=MWhnNmhtbWV3OXA2eA==",
    icon: <InstagramIcon color={COLORS.primaryLogo} size={36} />,
    label: "Instagram",
    user: "@mysticparadise",
  },
  {
    url: "https://www.tiktok.com/@studio.wc.mystic?_t=8rS5U5rvZEz&_r=1",
    icon: <TiktokIcon color={COLORS.primaryLogo} size={36} />,
    label: "Tik Tok",
    user: "@mysticparadise",
  },
  {
    url: "https://www.facebook.com/profile.php?id=61564607116969&mibextid=ZbWKwL",
    icon: <FacebookIcon color={COLORS.primaryLogo} size={34} />,
    label: "Facebook",
  },
];

const ContactSection = () => {
  return (
    <section
      className="pt-10 md:pb-20 flex flex-col w-full min-h-screen justify-center items-center gap-10 relative z-30 px-4"
      id="contact"
    >
      <div className="text-center md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold subtle-gradient-text mb-4">
          Nuestras redes sociales
        </h2>
        <p className="text-lg md:text-xl text-slate-900">
          Síguenos y mantente conectada con nosotros
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-3xl p-8 md:p-12 relative bg-white/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-700 dark:text-slate-100 mb-4">
              Síguenos
            </h3>
            <p className="text-lg text-slate-800 dark:text-slate-300 max-w-2xl">
              ¡Únete a nuestra vibrante comunidad en redes sociales! Encuentra
              consejos profesionales, conoce a nuestro equipo y mantente
              informada sobre eventos especiales.
            </p>
          </div>

          {/* Mensaje principal sin animación excesiva */}
          <div className="text-center py-3 md:py-8">
            <p className="text-2xl md:text-3xl font-bold subtle-gradient-text">
              Síguenos y sé parte de una comunidad que crece día a día.
            </p>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-300 mt-4">
              ¡No te pierdas ninguna actualización!
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            {SOCIAL_NETWORKS.map((sn) => (
              <a
                key={sn.url}
                href={sn.url}
                target="_blank"
                aria-label={`Icon that takes you to the network ${sn.label}`}
                rel="noopener noreferrer"
                className="flex flex-col gap-3 items-center group transition-transform duration-200 hover:scale-110"
              >
                <div className="p-3 bg-slate-100 dark:bg-white/10 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-white/20 transition-colors">
                  {sn.icon}
                </div>
                <span className="text-slate-800 dark:text-slate-100 font-semibold text-sm">
                  {sn.label}
                </span>
                {sn.user && (
                  <span className="text-slate-500 dark:text-slate-300 text-xs">
                    {sn.user}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
