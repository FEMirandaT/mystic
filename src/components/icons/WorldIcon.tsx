import { IconProps } from "@/interfaces/icons";

export default function WorldIcon({
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
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
        />
        <path
          d="M12 22C13.933 22 15.5 17.5228 15.5 12C15.5 6.47715 13.933 2 12 2C10.067 2 8.5 6.47715 8.5 12C8.5 17.5228 10.067 22 12 22Z"
          stroke={color}
        />
        <path d="M2 12H22" stroke={color} />
      </svg>
    </i>
  );
}
