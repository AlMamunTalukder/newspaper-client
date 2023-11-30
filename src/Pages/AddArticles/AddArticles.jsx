import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const AddArticles = () => {
  const publishers = useLoaderData();
  console.log(publishers);

  const { user } = useContext(AuthContext);

  const handleAddArticles = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const publisher = form.publisher.value;
    const tagsInput = form.tags.value;
    const tags = tagsInput.split(",").map((tag) => tag.trim());
    const image = form.image.value;
    const description = form.description.value;
    const email = user?.email;
    const logo = user?.photoURL;

    const addArticle = {
      title,
      publisher,
      tags,
      image,
      description,
      publisherEmail: email,
      createdAt: new Date().toISOString(),
      logo,
      status: "pending",
    };
    console.log(addArticle);

    fetch("https://newspaper-final-server.vercel.app/articles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addArticle),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Welcome", "Service Added Successfully", "success");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Global Times | Add Articles</title>
      </Helmet>
      <div className="">
        <div className="container mx-auto p-4 ">
          <form
            className="w-full max-w-lg mx-auto bg-blue-50 m-5 p-5 mt-20 rounded-md"
            onSubmit={handleAddArticles}
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
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2 w-full max-w-xs">
                  Publishers
                </label>
                <select
                  className="select select-bordered"
                  id="publisher"
                  name="publisher"
                >
                  <option disabled selected>
                    Select Publisher
                  </option>

                  {publishers.map((publisher) => (
                    <option key={publisher._id} value={publisher.name}>
                      {publisher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="w-full px-3 py-2 border rounded-lg"
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
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
              >
                Add Article
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticles;
