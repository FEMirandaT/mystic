import { IconProps } from "@/interfaces/icons";

export default function XIcon({
  className = "icon",
  size = 24,
  color = "currentColor",
}: IconProps) {
  return (
    <i className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
        ></path>
      </svg>
    </i>
  );
}