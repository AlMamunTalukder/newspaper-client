import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div>
      <div className="card lg:card-side bg-gray-200 shadow-xl mx-4 lg:mx-32 lg:mb-20 mt-20 border-2 border-black">
        <figure className="h-[400px] ">
          <img src="https://i.ibb.co/cNsxKMv/image.png" alt="Album" />
        </figure>
        <div className="card-body lg:h-[300px] -mt-8 lg:mt-8">
          <h2 className="card-title text-black">DOWNLOAD OUR APP</h2>

          <h2>
            Give Your mobile Number. You will get app download link via SMS
          </h2>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className=" p-3 rounded-l-lg sm:w-2/3 w-full max-w-xs border-2"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
            >
              Get App
            </button>
          </div>
          <figure className="w-[200px] mt-4">
            <Link to="https://play.google.com/store/apps">
              <img src="https://i.ibb.co/ZMg9ggQ/image.png" />
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
