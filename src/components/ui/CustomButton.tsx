"use client";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  title: string;
  icon?: ReactNode;
}

const CustomButton = ({ onClick, variant = "primary", title, icon }: Props) => {
  const getVariantColors = () => {
    if (variant === "primary")
      return "bg-primaryButton  hover:bg-primary-light";
    if (variant === "secondary") return "bg-secondary  hover:bg-primary-light";
    if (variant === "success") return "bg-green-600  hover:bg-green-500";
    if (variant === "warning") return "bg-orange-600  hover:bg-orange-500";
    return "bg-red-600 hover:bg-red-500";
  };
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-white font-bold shadow-black hover:shadow-lg rounded-lg py-2 px-2 min-w-48 flex justify-center items-center gap-2 pointer-events-auto",
        getVariantColors()
      )}
    >
      {icon}
      <p className="tracking-widest">{title}</p>
    </button>
  );
};

export default CustomButton;
