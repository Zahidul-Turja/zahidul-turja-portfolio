import ContentList from "../ContentList";
import { BlogItems as items } from "@/public/data/data";

function Blogs() {
  return (
    <section className="my-16">
      <h2 className="text-center text-5xl font-bold">Blogs</h2>
      <ContentList items={items} pageType={"blogs"} />;
    </section>
  );
}

export default Blogs;
