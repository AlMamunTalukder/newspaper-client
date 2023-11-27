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
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayedArticles.map((item) => (
            <div className="container space-y-6 sm:space-y-12 " key={item.id}>
              <div className="grid   ">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
                >
                  <span className="text-xs text-gray-400 pb-10">
                    Publisher: {item.publisher}
                  </span>
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 bg-gray-500"
                    src={item.image}
                  />
                  <div className="p-6 space-y-2 text-justify">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {item.title}
                    </h3>

                    <p>{item.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div> */}

        {/* <p>{services.length}</p> */}
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
