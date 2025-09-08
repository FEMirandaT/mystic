"use client";

import {
  Book,
  Calendar,
  Camera,
  Coffee,
  CreditCard,
  Gift,
  MapPin,
  Star,
  Trophy,
  Truck,
  Users,
} from "lucide-react";

import { COLORS } from "@/utils/colors";

const BENEFICIOS = [
  {
    id: 1,
    text: "Gana desde el primer día con nuestras atractivas comisiones iniciales",
    isPayment: false,
  },
  {
    id: 2,
    text: "Capacitación profesional personalizada para maximizar tus ingresos desde el comienzo",
    isPayment: false,
  },
  {
    id: 3,
    text: "Instalaciones de lujo con sets temáticos y equipos de última generación",
    isPayment: false,
  },
  {
    id: 4,
    text: "Pagos puntuales y seguros cada quincena, sin retrasos ni excusas",
    isPayment: true,
  },
  {
    id: 5,
    text: "Horarios totalmente flexibles que se adaptan a tu estilo de vida",
    isPayment: false,
  },
  {
    id: 6,
    text: "Ambiente seguro y profesional con personal de apoyo las 24/7",
    isPayment: false,
  },
  {
    id: 7,
    text: "Asesoría en imagen y marketing personal para potenciar tu éxito",
    isPayment: false,
  },
  {
    id: 8,
    text: "Bonos especiales por cumplimiento de metas y trabajo en equipo",
    isPayment: true,
  },
  {
    id: 9,
    text: "Fotografías profesionales mensuales",
    isPayment: false,
  },
];

const OTROS_BENEFICIOS = [
  {
    id: 1,
    text: "Pagos modelos EN STUDIO hasta el 70%",
    isPayment: true,
    icon: CreditCard,
  },
  {
    id: 2,
    text: "Pagos modelos SATÉLITE hasta el 85%",
    isPayment: true,
    icon: Truck,
  },
  { id: 3, text: "Gran premio Anual", isPayment: true, icon: Trophy },
  { id: 4, text: "Premio Mensual", isPayment: true, icon: Gift },
  { id: 5, text: "Bonos semanales", isPayment: true, icon: CreditCard },
  { id: 6, text: "Habitaciones de Lujo", isPayment: false, icon: Star },
  { id: 7, text: "Zona de Maquillaje", isPayment: false, icon: Book },
  { id: 8, text: "Zona de descanso", isPayment: false, icon: Users },
  { id: 9, text: "Zona de Alimentación", isPayment: false, icon: Coffee },
  { id: 10, text: "Parqueadero cubierto", isPayment: false, icon: Truck },
  { id: 11, text: "Capacitaciones", isPayment: false, icon: Book },
  { id: 12, text: "Certificado Laboral", isPayment: false, icon: MapPin },
  {
    id: 13,
    text: "Pagos Quincenales Puntuales",
    isPayment: true,
    icon: Calendar,
  },
  {
    id: 14,
    text: "Fotografía profesional mensual",
    isPayment: false,
    icon: Camera,
  },
  {
    id: 15,
    text: "Video profesional cada 6 meses",
    isPayment: false,
    icon: Trophy,
  },
  {
    id: 16,
    text: "Convenio Guía Cereza y Diver Joy",
    isPayment: false,
    icon: Users,
  },
];

export const AboutUs = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto flex flex-col items-center p-6 md:py-20 relative"
      id="about"
    >
      {/* Sección principal de beneficios */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <div className="flex flex-1 justify-center lg:justify-start items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight mb-4">
              ¿Por qué <span className="subtle-gradient-text">nosotros?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-md">
              Descubre todas las ventajas de trabajar con nosotros
            </p>
          </div>
        </div>

        <ul className="flex flex-col flex-1 gap-6">
          {BENEFICIOS.map((b) => (
            <li
              className={`flex gap-4 items-start p-4 rounded-xl transition-all duration-200 hover:shadow-md ${
                b.isPayment
                  ? "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500"
                  : "bg-slate-50 hover:bg-slate-100"
              }`}
              key={b.id}
            >
              <Camera
                size={28}
                color={b.isPayment ? COLORS.accent : COLORS.primarydark}
              />
              <p
                className={`text-lg leading-relaxed ${
                  b.isPayment
                    ? "font-semibold text-purple-800"
                    : "text-slate-700"
                }`}
              >
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección destacada de pagos y beneficios adicionales */}
      <div className="w-full">
        {/* Título de sección de pagos */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold subtle-gradient-text mb-4">
            💰 Beneficios Económicos
          </h2>
          <p className="text-xl text-slate-600">
            Todo lo que necesitas saber sobre nuestros pagos y beneficios
          </p>
        </div>

        {/* Grid de beneficios con destacado especial para pagos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTROS_BENEFICIOS.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl transition-all duration-200 hover:transform hover:scale-105 ${
                item.isPayment
                  ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl"
                  : "bg-white text-slate-700 shadow-md hover:shadow-lg border border-slate-200"
              }`}
            >
              <div className="text-3xl mb-3">
                {item.icon && (
                  // Render lucide icon component
                  //@ts-ignore
                  <item.icon
                    size={28}
                    color={item.isPayment ? "white" : COLORS.primarydark}
                  />
                )}
              </div>
              <h3
                className={`text-lg font-semibold ${
                  item.isPayment ? "text-white" : "text-slate-800"
                }`}
              >
                {item.text}
              </h3>
              {item.isPayment && (
                <div className="mt-2 text-purple-100 text-sm">
                  ✨ Beneficio destacado
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Llamada a la acción para pagos */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 Pagos Garantizados y Puntuales
            </h3>
            <p className="text-lg mb-6 text-purple-100">
              Trabajamos con un sistema de pagos transparente y confiable. Tus
              ganancias están aseguradas cada quincena.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Pagos cada 15 días
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Studio hasta 70%
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Satélite hasta 85%
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✅ Bonos adicionales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
