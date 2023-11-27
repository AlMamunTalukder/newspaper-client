import { useLoaderData } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";

const AllArticles = () => {
  const allArticles = useLoaderData([]);
  return (
    <div className="">
      <div className=""></div>
      <div className=" pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3  w-64 md:w-auto lg:w-auto gap-10 space-x-4 ">
          {allArticles.map((article) => (
            <ArticlesCard key={article._id} article={article}></ArticlesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;