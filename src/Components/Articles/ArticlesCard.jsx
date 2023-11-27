import { Link } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  const { _id, title, publisher, tags, image, description, publisherEmail } =
    article || {};

  // const tagArray = tags ? tags.split(",") : [];
  // const tagArray = typeof tags === "string" ? tags?.split(",") : [];

  // const tagArray =
  // typeof tags === "string" ? tags?.split(",").map((tag) => tag.trim()) : [];

  console.log(tags);
  // console.log(tagArray);
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="h-[200px]">
        <img src={image} alt="news" />
      </figure>

      <div className="card-body -mt-8">
        <span>
          <h1 className="text-sm ">{tags}</h1>
          {/* {tagArray.map((tag, index) => ( */}
          {/* <h1 key={index} className="text-sm">
            {tag.trim()}
          </h1> */}
          {/* ))} */}
        </span>
        <h2 className="card-title text-white ">{title}</h2>
        <span>
          <h1 className="text-sm">Publisher: {publisher}</h1>
        </span>
        <p className="text-justify">{description}</p>
        <Link to={`/viewDetails/${_id}`}>
          <button className="text-blue-400">Read More...</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
