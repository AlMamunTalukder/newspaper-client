import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
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

        <div className="grid grid-cols-1 lg:grid-cols-3  w-64 md:w-auto lg:w-auto gap-16 space-x-4 ">
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