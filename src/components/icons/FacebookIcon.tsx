import { IconProps } from "@/interfaces/icons";

export default function FacebookIcon({
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
        <g fill="none">
          <g clipPath="url(#akarIconsFacebookFill0)">
            <path
              fill={color}
              fillRule="evenodd"
              d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067"
              clipRule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="akarIconsFacebookFill0">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    </i>
  );
}