import { WhatsappIcon } from "../icons";
import CustomButton from "../ui/CustomButton";

const HeaderLeft = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center top-24 md:top-36 relative gap-6 z-30 mb-5 px-4">
      {/* Título principal más impactante */}
      <div className="flex flex-col gap-4 justify-center items-center text-center max-w-4xl">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-7xl font-bold text-slate-800 leading-tight">
            Mystic Paradise
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold subtle-gradient-text">
            Estudio Webcam Profesional
          </h2>
        </div>

        {/* Propuesta de valor clara */}
        <div className="space-y-3 max-w-2xl">
          <p className="text-lg md:text-2xl font-bold text-slate-700">
            💰 Gana hasta el <span className="text-purple-600">85%</span> de
            comisión
          </p>
          <p className="text-base md:text-lg text-slate-600">
            Únete al estudio webcam #1 en Bogotá con instalaciones de lujo,
            pagos puntuales y un ambiente 100% seguro y profesional
          </p>
        </div>

        {/* Beneficios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-3xl">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md text-center">
            <div className="text-2xl mb-2">💵</div>
            <h3 className="font-semibold text-slate-800">Pagos Puntuales</h3>
            <p className="text-sm text-slate-600">Cada 15 días sin falta</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md text-center">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="font-semibold text-slate-800">Bonos Especiales</h3>
            <p className="text-sm text-slate-600">
              Premios mensuales y anuales
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold text-slate-800">100% Seguro</h3>
            <p className="text-sm text-slate-600">Ambiente profesional 24/7</p>
          </div>
        </div>
      </div>

      {/* Llamadas a la acción mejoradas */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <CustomButton
          title="💬 Contáctanos Ahora"
          onClick={() =>
            window.open(
              "https://wa.me/+573045553476?text=¡Hola!%20Quiero%20más%20información%20sobre%20trabajar%20en%20Mystic%20Paradise.%20¿Podrían%20contarme%20sobre%20los%20beneficios%20y%20requisitos?",
              "_blank"
            )
          }
          icon={<WhatsappIcon />}
          variant="primary"
        />
        <button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-white/90 text-purple-600 font-bold shadow-lg hover:shadow-xl rounded-lg py-3 px-6 min-w-48 flex justify-center items-center gap-2 transition-all duration-200 hover:bg-white border border-purple-200"
        >
          <span className="text-lg">📋</span>
          <p className="tracking-wide text-base">Ver Beneficios</p>
        </button>
      </div>

      {/* Indicador de confianza */}
      <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-1">
          <span className="text-green-500">●</span>
          <span>Más de 50 modelos activas</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-500">●</span>
          <span>Pagos verificados</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-500">●</span>
          <span>Ambiente seguro</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
