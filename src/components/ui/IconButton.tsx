"use client";

import { ReactElement, useState } from "react";

interface Props {
  onClick?: () => void;
  icon: (color: string, size?: number) => ReactElement;
  href?: string;
  leftPosition?: string;
  topPosition?: string;
  bottomPosition?: string;
  rightPosition?: string;
  position?: "fixed" | "absolute" | "static";
  iconSize?: number;
}

export const IconButton = ({
  onClick,
  icon,
  href,
  bottomPosition,
  rightPosition,
  leftPosition,
  topPosition,
  position = "static",
  iconSize = 24,
}: Props) => {
  const [isBtnHover, setIsBtnHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsBtnHover(true)}
      onMouseLeave={() => setIsBtnHover(false)}
      className={`${position}  bg-[#0c0c0c40] rounded-full flex items-center dark:bg-neutral-750 z-30 hover:before:-translate-y-3 md:before:bg-primaryGreen before:w-56 before:h-56 before:absolute before:rounded-full before:translate-y-[208px] before:-translate-x-[40%] before:transition-all before:duration-1000 before:z-10 overflow-hidden `}
      style={{
        bottom: `${bottomPosition}%`,
        right: `${rightPosition}%`,
        top: `${topPosition}%`,
        left: `${leftPosition}%`,
      }}
    >
      {href ? (
        <a
          href={href}
          className="rounded-full relative z-30 p-4"
          onClick={onClick}
          aria-label="link to projects section"
        >
          {icon(isBtnHover ? "black" : "white", iconSize)}
        </a>
      ) : (
        <button
          className="rounded-full relative z-30 p-4"
          onClick={onClick}
          aria-label="link to projects section"
        >
          {icon(isBtnHover ? "black" : "white", iconSize)}
        </button>
      )}
    </div>
  );
};
