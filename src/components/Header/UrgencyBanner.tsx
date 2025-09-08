"use client";

import { useEffect, useState } from "react";

const UrgencyBanner = () => {
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
          <span className="animate-pulse">🔥</span>
          <span>¡Últimos {spotsLeft} cupos disponibles para esta semana!</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span>⏰ Oferta termina en:</span>
            <div className="flex gap-1 font-mono bg-white/20 px-2 py-1 rounded">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-white text-red-500 px-4 py-1 rounded-full text-sm font-bold hover:bg-red-50 transition-colors"
          >
            ¡Aplicar Ya!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
