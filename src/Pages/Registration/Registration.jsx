import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const { signUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterAuth = (e) => {
    e.preventDefault();
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
      swal(
        "Error",
        "Minimum Six character, at least one Letter and one Number",
        "success"
      );
      setError("");
    } else {
      setError("");
      if (email && name && img) {
        signUp(email, password).then((result) => {
          console.log(result);
          updateUserProfile(e.name, e.img).then(() => {
            const userInfo = {
              name: name,
              email: email,
              img: img,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");

                swal("Welcome", "Account Created Successfully", "success");
                navigate("/");
              }
            });
          });
        });
      } else {
        setError("Please fill in all the required fields.");
      }
    }
  };

  const glassmorphismContainerStyle = {
    background: 'url("https://i.ibb.co/fXgxHq3/undefined-Imgur.jpg")',
    backgroundSize: "cover",
    backdropFilter: "blur(5px)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const glassmorphismContentStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    borderRadius: "12px",
    padding: "2rem",
    width: "420px",
  };

  const glassmorphismCardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    borderRadius: "12px",
    padding: "1rem",
  };

  return (
    <div style={glassmorphismContainerStyle}>
      <Helmet>
        <title>Global Times | Registration</title>
      </Helmet>
      <div
        className="card flex-shrink-0 shadow-2xl mt-20"
        style={glassmorphismContentStyle}
      >
        <div className=" ">
          <h1 className="text-5xl font-bold text-center mb-3 text-white">
            Register now!
          </h1>
          <p className="text-center text-red-500">{error.message}</p>
          <div className="">
            <form className="card-body " style={glassmorphismCardStyle}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  name="img"
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text " required>
                    Password
                  </span>
                </label>
                <input
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button
                  onClick={handleRegisterAuth}
                  className="btn btn-neutral"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <label className="label text-white">
                Have an account?
                <Link
                  to="/logIn"
                  className="label-text-alt link link-hover text-yellow-300"
                >
                  Please Login
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
