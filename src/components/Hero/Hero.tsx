import { ChevronRight, DollarSign, Phone, Star } from "lucide-react";

import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"></div>
      </div>

      {/* Animated accent elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-600/12 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-2">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          <div className="space-y-3 md:space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2  backdrop-blur-sm rounded-full border border-fuchsia-600/40">
              <Star className="w-4 h-4 text-fuchsia-800 mr-2" />
              <span className="text-fuchsia-800 text-sm font-medium">
                #1 Studio en Bogotá
              </span>
            </div>

            {/* Main title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Mystic
                <span className="bg-gradient-to-r from-rose-600  to-fuchsia-600 bg-clip-text text-transparent">
                  {" "}
                  Paradise
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light">
                Estudio Webcam Profesional
              </h2>
            </div>

            {/* Commission highlight (responsive) */}
            <div className="bg-fuchsia-600/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800/70 hover:border-rose-600/50 transition-colors duration-300 w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl items-center justify-center hidden md:flex">
                  <DollarSign className="md:w-12 md:h-12 text-white" />
                </div>
                <div className="text-left flex items-center gap-2 md:gap-0 justify-between w-full">
                  <div className="flex flex-col items-center mb-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Hasta 85%
                      </span>
                      <span className="text-sm md:text-lg text-gray-100">
                        de comisión
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white font-medium mt-1">
                      Los mejores pagos del mercado
                    </p>
                  </div>
                  <DollarSign className="w-10 h-10 md:hidden text-white" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed max-w-lg">
              Únete al estudio webcam #1 en Bogotá con instalaciones de lujo,
              pagos puntuales y un ambiente 100% seguro y profesional
            </p>

            {/* Feature highlights */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-fuchsia-600/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 hover:border-purple-600/50 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm md:text-base font-semibold">
                    Pagos Cada 15 Días
                  </div>
                  <div className="text-gray-100 text-xs md:text-sm">
                    Siempre puntuales
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-fuchsia-600/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 hover:border-teal-600/50 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm md:text-base font-semibold">
                    100% Seguro
                  </div>
                  <div className="text-gray-100 text-xs md:text-sm">
                    Ambiente profesional
                  </div>
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                className="group bg-gradient-to-r from-rose-600 to-purple-700 hover:from-rose-700 hover:to-purple-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 flex items-center justify-center"
                onClick={() =>
                  window.open(
                    "https://wa.me/+573045553476?text=¡Hola!%20Quiero%20más%20información%20sobre%20trabajar%20en%20Mystic%20Paradise.%20¿Podrían%20contarme%20sobre%20los%20beneficios%20y%20requisitos?",
                    "_blank"
                  )
                }
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Contáctanos Ahora
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="border-2 border-fuchsia-600 text-fuchsia-600 hover:text-gray-900 hover:border-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-100/80 transition-all duration-300 backdrop-blur-sm"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Ver Beneficios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="text-center bg-fuchsia-600/90 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-gray-800/50 hover:border-emerald-600/50 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  50+
                </div>
                <div className="text-white text-xs md:text-sm">
                  Modelos Activas
                </div>
              </div>
              <div className="text-center bg-fuchsia-600/90 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-gray-800/50 hover:border-teal-600/50 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  24/7
                </div>
                <div className="text-white text-xs md:text-sm">Soporte</div>
              </div>
              <div className="text-center bg-fuchsia-600/90 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-gray-800/50 hover:border-purple-600/50 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  100%
                </div>
                <div className="text-white text-xs md:text-sm">Seguro</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm text-gray-600 pt-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Más de 50 modelos activas
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                Pagos verificados
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Ambiente seguro
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/30 to-purple-500/30 rounded-3xl blur-lg opacity-60 animate-pulse scale-105"></div>

              {/* Main image container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-1 border border-rose-300/60 hover:border-rose-400/80 transition-all duration-500 hover:scale-105 shadow-lg shadow-rose-200/50">
                <div className="relative overflow-hidden rounded-3xl w-full aspect-[3/4]">
                  <Image
                    src="/header/womanv2.png"
                    alt="Professional Model at Mystic Paradise Studio"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    quality={100}
                    width={720}
                    height={960}
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 bg-emerald-700/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-400/50 shadow-sm">
                    Hasta 85% Comisión
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-500/90 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/90 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
