import Image from "next/image";
import Link from "next/link";
import { Article } from "../[blog]/articles";

interface Props {
  article: Article;
}
export const BlogCard = ({ article }: Props) => {
  const { slug, title, content, image } = article;
  return (
    <Link
      href={`blogs/${slug}`}
      className="card relative w-full overflow-hidden"
    >
      <Image
        src={image}
        alt={`Image for reference of ${title}`}
        fill
        className="absolute object-cover object-top hover:scale-105 transition-all duration-300"
      />
      <div className="z-20 backdrop-brightness-50 p-2 rounded-sm text-white">
        <p className="heading">{title}</p>
        <p className="truncate">{content[0].text}</p>
        <p className="text-wrap">Leer más</p>
      </div>
    </Link>
  );
};
