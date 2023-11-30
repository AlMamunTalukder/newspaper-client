import { Helmet } from "react-helmet";
import swal from "sweetalert";

const AddPublisher = () => {
  const handlePublisher = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const logo = form.logo.value;

    const addPublisher = {
      name,
      logo,
    };
    console.log(addPublisher);

    fetch("https://newspaper-final-server.vercel.app/publishers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPublisher),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Welcome", "Pulisher Added Successfully", "success");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Global Times | Add Publisher</title>
      </Helmet>
      <div className=" -mt-96 ml-96 w-96">
        <form
          onSubmit={handlePublisher}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  bg-gray-900"
        >
          <h2 className="w-full text-3xl font-bold text-center">
            Add A Publisher
          </h2>
          <div>
            <label className="block mb-1 ml-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri  bg-gray-800"
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Logo</label>
            <input
              id="logo"
              type="logo"
              name="logo"
              placeholder="logo link"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri  bg-gray-800"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri  bg-violet-400 focus:ri hover:ri  text-gray-900"
            >
              Add Publisher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPublisher;
