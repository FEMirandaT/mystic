"use client";
import clsx from "clsx";
import { ImageBlurFrame } from "../Reusables";

const HeaderRight = () => {
  return (
    <div
      className={clsx(
        "absolute flex justify-center w-full -bottom-36 pointer-events-none",
        "flex"
      )}
    >
      <ImageBlurFrame height={640} width={440} image="/header/woman.png" />
    </div>
  );
};

export default HeaderRight;
