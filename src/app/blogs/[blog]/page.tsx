import { notFound } from "next/navigation";
import { Header } from "../components/Header";
import { ARTICLES } from "./articles";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    blog: article.slug,
  }));
}

const BlogPage = async ({ params }: { params: Promise<{ blog: string }> }) => {
  const blog = (await params).blog;
  const article = ARTICLES.find((a) => a.slug === blog);
  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full max-w-mw-container items-center gap-20 px-4 mx-auto">
      <Header
        title={article.title}
        image={article.image}
        subtitle={article.subtitle}
      />

      <div className="flex flex-col gap-8 w-full max-w-wrapper items-start leading-relaxed text-neutral-300">
        {article.content.map((section, index) => {
          if (section.type === "paragraph") {
            return (
              <p key={index} className="mb-6 text-lg">
                {section.text}
              </p>
            );
          } else if (section.type === "heading") {
            const HeadingTag =
              `h${section.level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag
                key={index}
                className="text-2xl md:text-3xl font-semibold mb-4 text-start text-white"
              >
                <span className="inline-block text-gradient bg-gradient-to-r from-yellow-400 via-neutral-200 to-yellow-500 bg-clip-text text-transparent">
                  {section.text}
                </span>
              </HeadingTag>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogPage;
