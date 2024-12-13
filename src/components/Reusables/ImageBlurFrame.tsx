import clsx from "clsx";
import Image from "next/image";

interface Props {
  image: string;
}

const ImageBlurFrame = ({ image }: Props) => {
  return (
    <div
      className={clsx(
        "relative p-4 glass z-10 rounded-2xl overflow-hidden w-4/5 h-96 md:h-[600px]"
      )}
    >
      <Image
        src="/gradients/gradientLight.png"
        alt="Imagen de gradiente"
        width={500}
        sizes="(max-width: 750px) 30vw, (max-width: 1200px) 50vw, 33vw"
        height={700}
        loading="lazy"
        className="absolute   -top-40 -right-80 z-30"
      />
      <Image
        src="/gradients/gradientLight.png"
        alt="Imagen de gradiente"
        width={500}
        sizes="(max-width: 750px) 30vw, (max-width: 1200px) 50vw, 33vw"
        height={500}
        loading="lazy"
        className="absolute   -top-40 -left-52 z-30"
      />
      <figure className="relative w-full h-full">
        <Image
          src={image}
          sizes="(max-width: 450px) 90vw, (max-width: 800px) 50vw, 33vw"
          alt="Image for reference"
          fill
          priority
          quality={100}
          className="pt-4 border border-t-lime-100 border-x-lime-200 object-cover border-b-lime-400 rounded-3xl z-20"
        />
      </figure>
      <Image
        src="/gradients/gradientLight.png"
        loading="lazy"
        sizes="(max-width: 750px) 90vw, (max-width: 1200px) 50vw, 33vw"
        alt="Imagen de gradiente"
        width={500}
        height={500}
        className="absolute   -bottom-40 -left-52 z-30 pointer-events-none"
      />
      <Image
        src="/gradients/gradientLight.png"
        sizes="(max-width: 750px) 30vw, (max-width: 1200px) 50vw, 33vw"
        alt="Imagen de gradiente"
        width={500}
        height={500}
        loading="lazy"
        className="absolute   -bottom-40 -right-52 z-30 pointer-events-none"
      />
    </div>
  );
};

export default ImageBlurFrame;
