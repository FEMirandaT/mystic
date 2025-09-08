"use client";

import { motion } from "motion/react";

interface PaymentHighlightProps {
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const PaymentHighlight = ({
  title,
  description,
  features,
  highlight = false,
}: PaymentHighlightProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 md:p-8 rounded-2xl shadow-xl ${
        highlight
          ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
          : "bg-white text-slate-800 border border-slate-200"
      }`}
    >
      <div className="text-center mb-6">
        <h3
          className={`text-2xl md:text-3xl font-bold mb-3 ${
            highlight ? "text-white" : "text-slate-800"
          }`}
        >
          {highlight ? "💰" : "📋"} {title}
        </h3>
        <p
          className={`text-lg ${
            highlight ? "text-purple-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              className={`text-lg ${
                highlight ? "text-yellow-300" : "text-purple-500"
              }`}
            >
              ✨
            </span>
            <span
              className={`text-base ${
                highlight ? "text-white" : "text-slate-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {highlight && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            🔥 ¡Oferta especial!
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PaymentHighlight;
