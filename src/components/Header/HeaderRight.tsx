"use client";
import clsx from "clsx";
import { ImageBlurFrame } from "../Reusables";

const HeaderRight = () => {
  return (
    <div
      className={clsx("flex justify-center w-full pointer-events-none", "flex")}
    >
      <ImageBlurFrame image="/header/womanv2.png" />
    </div>
  );
};

export default HeaderRight;
