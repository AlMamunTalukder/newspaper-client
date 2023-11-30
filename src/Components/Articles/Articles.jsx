import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newspaper-final-server.vercel.app/article/status/approved")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  console.log(articles);

  const displayedArticles = articles.slice(0, 6);

  return (
    <div className="m-8 ">
      <div className="">
        <h3 className="text-5xl text-yellow-400 mb-8 underline text-center ">
          Trending Articles
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3  w-60 md:w-auto lg:w-auto gap-8 space-x-2 ">
          {displayedArticles.map((article) => (
            <ArticlesCard key={article._id} article={article}></ArticlesCard>
          ))}
        </div>
        <div className="card-actions justify-center my-8">
          <Link to="/allArticles">
            <button className="btn btn-primary">See All Articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
