"use client";
import { IconProps } from "@/interfaces/icons";

export default function MenuIcon({
  className = "icon",
  size = 24,
  color = "currentColor",
}: IconProps) {
  return (
    <i className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 12H21" stroke={color} strokeMiterlimit="10" />
        <path d="M3 6H21" stroke={color} strokeMiterlimit="10" />
        <path d="M3 18H21" stroke={color} strokeMiterlimit="10" />
      </svg>
    </i>
  );
}
