import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../../Authentication/Providers/AuthProvider";
import icon from "../../assets/newspaper.svg";
import logo from "../../assets/Global_N.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then();
  };

  const navbarPage = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-400 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArticles"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-400 underline" : ""
          }
        >
          All Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-400 underline" : ""
          }
        >
          Subscription
        </NavLink>
      </li>
      {user && (
        <li tabIndex={0} style={{ zIndex: 9999 }} className="w-36">
          <details>
            <summary>Dash Board</summary>
            <ul className="">
              <li className="">
                <NavLink
                  to="/myServices"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-violet-400 underline"
                      : "w-28"
                  }
                >
                  My Articles
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/addArticles"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-violet-400 underline"
                      : "w-28"
                  }
                >
                  Add Articles
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/manageServices"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-violet-400 underline"
                : ""
            }
          >
            Premium Articles
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 text-white bg-black max-w-screen-xl mx-auto shadow-md">
        <div className="navbar-start">
          <NavLink
            className="btn btn-ghost normal-case text-xl bg-white h-14"
            to="/"
          >
            <div className="flex items-center justify-center w-12   ">
              <img src={icon} />
            </div>
            <div className="flex items-center justify-center w-32   ">
              <img src={logo} />
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarPage}</ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <div className="flex items-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={`${user.displayName}'s profile`}
                  className="w-10 h-10 rounded-full mr-2"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-500 mr-2"></div>
              )}
              <p className="mr-2">{user.displayName}</p>
              {/* <p>{user.email}</p> */}
              <button onClick={handleLogOut} className="btn btn-primary ml-2">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink to="/logIn">
                <a className="btn bg-yellow-400 rounded-full text-black hover:text-white">
                  Sign In
                </a>
              </NavLink>
              <NavLink to="/registration">
                <a className="btn bg-violet-400 rounded-full text-black hover:text-white">
                  Registration
                </a>
              </NavLink>
            </div>
          )}
        </div>

        <div className="lg:hidden  ">
          {user?.photoURL ? (
            <div className="">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full ml-24 -mr-20"
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="dropdown lg:hidden ">
          <div className="flex  ml-24 ">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mr-40">
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 shadow bg-base-100 rounded-box "
              style={{ zIndex: 9999 }}
            >
              {navbarPage}
              <div className="navbar-end">
                {user ? (
                  <div className=" ml-6  ">
                    <p className="">{user.displayName}</p>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-xs btn-error my-2  w-24 "
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <NavLink to="logIn">
                    <a className="btn btn-xs bg-violet-400 rounded text-black hover:text-white w-16 ">
                      Log In
                    </a>
                  </NavLink>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
