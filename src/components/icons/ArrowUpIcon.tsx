import { IconProps } from "@/interfaces/icons";

export default function ArrowUpIcon({
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
        <path d="M19 10L12 3L5 10" stroke={color} strokeMiterlimit="10" />
        <path d="M12 3V22" stroke={color} strokeMiterlimit="10" />
      </svg>
    </i>
  );
}
