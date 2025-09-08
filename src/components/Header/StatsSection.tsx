"use client";

const StatsSection = () => {
  const stats = [
    {
      number: "85%",
      label: "Comisión máxima",
      icon: "💰",
    },
    {
      number: "24/7",
      label: "Soporte disponible",
      icon: "🛡️",
    },
    {
      number: "50+",
      label: "Modelos activas",
      icon: "👥",
    },
    {
      number: "15",
      label: "Días entre pagos",
      icon: "📅",
    },
  ];

  return (
    <div className="w-full py-12 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8">
          🏆 Por qué somos tu mejor opción
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial destacado */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl max-w-3xl mx-auto">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-lg md:text-xl italic mb-4">
              "El mejor estudio donde he trabajado. Pagos puntuales, ambiente
              seguro y excelentes ganancias."
            </p>
            <p className="text-purple-200 font-semibold">
              - María C., modelo desde 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
