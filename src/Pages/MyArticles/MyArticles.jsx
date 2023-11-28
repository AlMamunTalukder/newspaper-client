import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";

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

  const handleUpdateService = (e, _id) => {
    // e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const tags = form.tags.value;
    const description = form.description.value;

    const purchase = {
      title,
      image,
      tags,
      description,
    };
    console.log(purchase);
    fetch(`http://localhost:5000/article/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Welcome", "Service Update successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Service Update failed", "error");
      });
  };
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
                  <Link to={`/details/${item._id}`}>
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
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      document
                        .getElementById(`my_modal-${item._id}`)
                        .showModal()
                    }
                  >
                    Update
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
                          <div className="container mx-auto  m-4 ">
                            <form
                              className=" max-w-lg mx-auto bg-blue-50  m-4 p-4 rounded-md h-full"
                              onSubmit={(e) => {
                                e.preventDefault();
                                console.log("hellow");
                                handleUpdateService(e, item?._id);
                              }}
                            >
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                  <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Title
                                  </label>
                                  <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full px-3 py-2 input input-bordered input-primary bg-white rounded-lg text-black"
                                    defaultValue={item?.title}
                                  />
                                </div>
                                <div className="col-span-1">
                                  <label className="block text-black  text-sm font-bold mb-2">
                                    Image
                                  </label>
                                  <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    className="w-full px-3 py-2 input input-bordered input-primary bg-white rounded-lg text-black"
                                    defaultValue={item?.image}
                                  />
                                </div>

                                <div className="col-span-1">
                                  <label className="block text-gray-700 text-sm font-bold mb-2 ">
                                    Tags
                                  </label>
                                  <input
                                    type="text"
                                    id="tags"
                                    name="tags"
                                    className="w-full px-3 py-2 input input-bordered input-primary bg-white rounded-lg text-black"
                                    defaultValue={item?.tags}

                                    // readOnly
                                  />
                                </div>
                              </div>

                              <div className="">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                  Description
                                </label>
                                <textarea
                                  type="text"
                                  id="description"
                                  name="description"
                                  placeholder="Write Anything Like Address , Area, Customized Service Plan"
                                  className="w-full px-3 py-2 textarea textarea-lg input input-bordered input-primary bg-white rounded-lg text-black "
                                  defaultValue={item?.description}
                                />
                              </div>

                              <div className="mt-4">
                                <button
                                  type="submit"
                                  className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                                  onClick={() =>
                                    document
                                      .getElementById(`my_modal-${item._id}`)
                                      .close()
                                  }
                                >
                                  Update
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
                      className="btn btn-error"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
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

export default MyArticles;
