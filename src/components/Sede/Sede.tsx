import { Briefcase, Check, MapPin, Train, Truck } from "lucide-react";

export const Sede = () => {
  return (
    <div className="flex flex-col items-center md:my-16 px-4 max-w-4xl mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold subtle-gradient-text">
          Nuestra sede en Bogotá
        </h2>
        <div className="space-y-2 text-slate-700">
          <p className="text-xl md:text-2xl font-semibold flex items-center justify-center md:justify-start gap-3">
            <MapPin className="w-6 h-6 text-rose-600" /> Estamos ubicados en el
            barrio El Galán
          </p>
          <p className="text-lg md:text-xl flex items-center justify-center md:justify-start gap-3">
            <Train className="w-6 h-6 text-purple-600" /> Cerca a la Estación
            Pradera y Outlet de las Américas
          </p>
          <p className="text-base md:text-lg text-slate-600 flex items-center justify-center md:justify-start gap-3">
            <Truck className="w-6 h-6 text-teal-600" /> Fácil acceso en
            transporte público y vehículo privado
          </p>
        </div>

        {/* Destacar información de trabajo */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3 justify-center md:justify-start">
            <Briefcase className="w-6 h-6 text-white" /> ¡Trabajar nunca fue tan
            rentable!
          </h3>
          <p className="text-purple-100 text-lg mb-4">
            Únete a nuestro equipo profesional y cambia tu vida
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
              <Check className="w-4 h-4 text-white" /> Inicio inmediato
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
              <Check className="w-4 h-4 text-white" /> Sin experiencia requerida
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
              <Check className="w-4 h-4 text-white" /> Capacitación incluida
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
