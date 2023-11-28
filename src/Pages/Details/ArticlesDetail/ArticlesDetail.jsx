import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ArticlesDetail = () => {
  const articleDetails = useLoaderData([]);
  const { _id, title, publisher, tags, image, description } =
    articleDetails || {};

  useEffect(() => {
    if (_id) {
      fetch(`http://localhost:5000/articles/incrementView/${_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [_id]);
  return (
    <div className="items-center justify-center pt-24 mb-10 ">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100  ml-[100px] md:ml-[200px] lg:ml-[500px] ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <a rel="" className="text-xl font-semibold">
              {title}
            </a>
            <span className="text-xs text-gray-400">{publisher}</span>
            <div className="text-sm text-gray-400">
              view: {articleDetails.viewCount || 0}
            </div>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-28 sm:h-96 bg-gray-500"
          />
          <h2 className=" text-sm text-gray-500">tags: {tags}</h2>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetail;
