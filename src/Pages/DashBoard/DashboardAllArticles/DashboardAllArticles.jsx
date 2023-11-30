import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Authentication/Providers/AuthProvider";

const DashboardAllArticles = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [myArticles, setMyArticles] = useState([]);
  console.log(myArticles);
  useEffect(() => {
    fetch(`http://localhost:5000/articles`)
      .then((res) => res.json())
      .then((data) => setMyArticles(data));
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/article/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = myArticles.filter((item) => item._id !== _id);
            setMyArticles(remaining); //this line for delete
          });
      }
    });
  };

  const handleApprove = (_id) => {
    fetch(`http://localhost:5000/article/approved/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Welcome", "Article Approved successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Article Approval failed", "error");
      });
  };
  const handlePremium = (_id) => {
    fetch(`http://localhost:5000/article/premium/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Welcome", "Article set as Premium successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Setting Article as Premium failed", "error");
      });
  };

  return (
    <div className="-mt-[420px] ml-56 w-96 ">
      <div className="overflow-x-auto h-screen  w-[1170px]">
        <table className="table mb-20">
          {/* head */}
          <thead className="">
            <tr>
              {/* <th></th> */}
              <th>Title</th>
              <th>Author Name & Email</th>
              <th>PDate</th>
              <th>Publisher</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myArticles.map((item) => (
              <tr key={item._id} className="hover">
                {/* <td className="-ml-5">{index + 1}</td> */}
                <td className="-ml-10">{item.title}</td>
                <td className="-ml-5">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img src={item.logo} alt="Avatar Component" />
                      </div>
                    </div>
                    <div className="">
                      <div className="font-bold">{item.publisher}</div>
                      <div className="opacity-50 ">{item.publisherEmail}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="w-24 -ml-4">{item.createdAt}</div>
                </td>
                <td>{item.publisher}</td>
                <td className="text-red-400 -pl-4">{item.status}</td>

                <td>
                  <Link to={`/details/${item._id}`}>
                    <button className="text-blue-400 btn btn-sm -ml-5">
                      Details
                    </button>
                  </Link>
                </td>

                <td className="w-2">
                  <Link>
                    <button
                      className="text-yellow-300 btn btn-sm -ml-5"
                      onClick={() => handleApprove(item._id)}
                    >
                      Approve
                    </button>
                  </Link>
                </td>

                <td>
                  <button
                    className="btn btn-warning btn-sm -ml-5"
                    onClick={() =>
                      document
                        .getElementById(`my_modal-${item._id}`)
                        .showModal()
                    }
                  >
                    Decline
                  </button>
                  <dialog id={`my_modal-${item._id}`} className="modal ">
                    <div className="modal-box ">
                      <div method="dialog">
                        {/*if there is a button in form, it will close the modal */}
                        <button
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                          onClick={() =>
                            document
                              .getElementById(`my_modal-${item._id}`)
                              .close()
                          }
                        >
                          ✕
                        </button>
                      </div>
                      <div className="">
                        <div className="">
                          <div className="container  ">
                            <form
                              className="   "
                              onSubmit={(e) => {
                                e.preventDefault();
                                console.log("hello");
                              }}
                            >
                              <div className="">
                                <label className="block text-white text-sm font-bold mb-2">
                                  Reason
                                </label>
                                <textarea
                                  type="text"
                                  id="description"
                                  name="description"
                                  className="textarea textarea-bordered textarea-lg  max-w-xs w-[500px] bg-white rounded-lg text-black "
                                />
                              </div>

                              <div className="">
                                <button
                                  type="submit"
                                  className=" bg-blue-500 text-white font-bold py-2 w-36 rounded-lg "
                                  onClick={() =>
                                    document
                                      .getElementById(`my_modal-${item._id}`)
                                      .close()
                                  }
                                >
                                  Decline
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </td>
                <td>
                  <Link>
                    <button
                      className="btn btn-error btn-sm -ml-5"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
                <td className="">
                  <Link>
                    <button
                      className="btn btn-primary btn-sm -ml-5"
                      onClick={() => handlePremium(item._id)}
                    >
                      Premium
                    </button>
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

export default DashboardAllArticles;
