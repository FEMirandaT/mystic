import Image from "next/image";

interface Props {
  title: string;
  image: string;
  subtitle: string;
}
export const Header = ({ title, image, subtitle }: Props) => {
  return (
    <div className="pt-16 md:pt-40 h-[80dvh] w-full md:max-w-mw-container flex flex-col md:flex-row">
      <div className="w-full h-full flex flex-col justify-center items-center md:items-start">
        <figure className="absolute -bottom-20 -left-[500px] opacity-40 pointer-events-none ">
          <Image
            src="/gradients/gradientWhite.png"
            alt="Imagen de gradiente"
            sizes="(max-width: 750px) 50vw, 25vw"
            width={1800}
            height={1800}
            className="relative pointer-events-none"
          />
        </figure>
        <div className="h-2/3 w-full md:w-2/3 flex flex-col gap-2 justify-end">
          <h1 className="text-2xl md:text-5xl text-gold font-semibold text-center md:text-start">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-center md:text-start">
            {subtitle}.
          </p>
        </div>
      </div>
      <figure className="w-full h-full relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </figure>
    </div>
  );
};
