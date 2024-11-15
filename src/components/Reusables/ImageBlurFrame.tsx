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
      className={clsx("relative p-4 glass z-10 rounded-2xl overflow-hidden  ")}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src="/gradients/gradientLight.png"
        alt="Imagen de gradiente"
        width={500}
        height={700}
        className="absolute   -top-40 -right-80 z-30"
      />
      <Image
        src="/gradients/gradientLight.png"
        alt="Imagen de gradiente"
        width={500}
        height={500}
        className="absolute   -top-40 -left-52 z-30"
      />
      <figure>
        <Image
          src={image}
          alt="Image for reference"
          fill
          quality={100}
          objectFit="cover"
          className="pt-4 border-4 border-t-8 border-r-4 border-t-lime-100 border-x-lime-200 border-b-lime-400 rounded-3xl z-20"
        />
      </figure>{" "}
      <Image
        src="/gradients/gradientLight.png"
        alt="Imagen de gradiente"
        width={500}
        height={500}
        className="absolute   -bottom-40 -left-52 z-30"
      />
      <Image
        src="/gradients/gradientLight.png"
        alt="Imagen de gradiente"
        width={500}
        height={500}
        className="absolute   -bottom-40 -right-52 z-30"
      />
    </div>
  );
};

export default ImageBlurFrame;
