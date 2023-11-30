import { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";

const PremuimArticles = () => {
  const [premiumArticles, setPremiumArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/article/status/premium")
      .then((res) => res.json())
      .then((data) => setPremiumArticles(data));
  }, []);
  console.log(premiumArticles);
  return (
    <div className="pt-20 ">
      <div className="">
        <h3 className="text-5xl text-yellow-400 mb-8 underline text-center ">
          Premium Articles
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3  w-60 md:w-auto lg:w-auto gap-8 space-x-2 ">
          {premiumArticles.map((article) => (
            <ArticlesCard key={article._id} article={article}></ArticlesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremuimArticles;
