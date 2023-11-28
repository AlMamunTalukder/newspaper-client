import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const MyArticles = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [myArticles, setMyArticles] = useState([]);
  console.log(myArticles);
  useEffect(() => {
    fetch(`http://localhost:5000/article/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyArticles(data));
  }, [user]);

  // this is for details
  const articleDetails = useLoaderData([]);
  const { _id } = articleDetails || {};

  return (
    <div className="pt-28">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Title</th>
              <th>Details</th>
              <th>Status</th>
              <th>isPremium</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myArticles.map((item, index) => (
              <tr key={item._id} className="hover">
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>
                  <Link to={`/details/${_id}`}>
                    <button className="text-blue-400 btn">Details</button>
                  </Link>
                </td>
                <td>approved | Decline</td>
                <td>
                  <Link>
                    <button className="text-yellow-300 btn">No</button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button className="btn btn-success">Update</button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button className="btn btn-error">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArticles;
