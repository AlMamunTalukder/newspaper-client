import { Link } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  const { _id, title, publisher, tags, image, description } = article || {};

  console.log(tags);

  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="h-[200px]">
        <img src={image} alt="news" />
      </figure>

      <div className="card-body -mt-8">
        <span>
          <h1 className="text-sm ">{tags.join(", ")}</h1>
        </span>
        <h2 className="card-title text-white ">{title}</h2>
        <span>
          <h1 className="text-sm">Publisher: {publisher}</h1>
        </span>
        <p className="text-justify">{description}</p>
        <Link to={`/details/${_id}`}>
          <button className="text-blue-400">Read More...</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
