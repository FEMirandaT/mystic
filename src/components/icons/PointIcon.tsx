import { IconProps } from "@/interfaces/icons";

export default function PointIcon({
  className = "icon",
  size = 24,
  color = "white",
}: IconProps) {
  return (
    <i className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill={color} />
      </svg>
    </i>
  );
}
