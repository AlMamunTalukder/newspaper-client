import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Registration from "./../Pages/Registration/Registration";
import AddArticles from "../Pages/AddArticles/AddArticles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/addArticles",
        element: <AddArticles />,
        loader: () => fetch("http://localhost:5000/publishers"),
      },
    ],
  },
]);
export default router;
