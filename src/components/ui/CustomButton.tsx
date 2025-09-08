"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "outlined";
  title: string;
  icon?: ReactNode;
}

const CustomButton = ({ onClick, variant = "primary", title, icon }: Props) => {
  const getVariantColors = () => {
    if (variant === "primary")
      return "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl";
    if (variant === "secondary")
      return "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl";
    if (variant === "outlined")
      return "bg-white/90 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600 shadow-md hover:shadow-lg";
    if (variant === "success")
      return "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl";
    if (variant === "warning")
      return "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl";
    return "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl";
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "font-bold rounded-xl py-3 px-6 min-w-48 flex justify-center items-center gap-3 pointer-events-auto transition-all duration-200 transform hover:scale-105 active:scale-95",
        getVariantColors()
      )}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <p className="tracking-wide text-base font-semibold">{title}</p>
    </button>
  );
};

export default CustomButton;
