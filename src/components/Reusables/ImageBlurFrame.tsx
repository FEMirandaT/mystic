import clsx from "clsx";
import Image from "next/image";

interface Props {
  image: string;
  width: number;
  height: number;
}

const ImageBlurFrame = ({ image, width, height }: Props) => {
  return (
    <div
      className={clsx("relative p-4 glass2 z-10 rounded-2xl")}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={image}
        alt="Image for reference"
        fill
        quality={100}
        objectFit="cover"
        className="pt-4 border-4 border-emerald-100 rounded-2xl"
      />
    </div>
  );
};

export default ImageBlurFrame;
