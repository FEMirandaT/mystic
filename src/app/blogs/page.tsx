import { ARTICLES } from "./[blog]/articles";
import { BlogCard } from "./components";

const BlogsPage = () => {
  return (
    <section className="top-40 relative flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-gold text-lg md:text-5xl">
          La mejor información si quieres ser{" "}
          <span className="text-white">modelo webcam</span>
        </h1>
        <h2 className="text-primary text-sm md:text-3xl">
          Encuentra los mejores consejos
        </h2>
      </div>
      <div className="flex gap-8 justify-between">
        {ARTICLES.map((ar) => (
          <BlogCard article={ar} key={ar.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
