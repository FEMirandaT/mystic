"use cllient";
import { ARTICLES } from "./[blog]/articles";
import { BlogCard } from "./components";

const BlogsPage = () => {
  return (
    <section className="top-40 relative w-full flex flex-col gap-10 px-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-gold text-2xl md:text-5xl">
          La mejor información si quieres ser{" "}
          <span className="text-white">modelo webcam</span>
        </h1>
        <h2 className="text-primary text-lg md:text-3xl">
          Encuentra los mejores consejos
        </h2>
      </div>
      <div className="flex gap-8 justify-between flex-wrap px-2">
        {ARTICLES.map((ar) => (
          <BlogCard article={ar} key={ar.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
