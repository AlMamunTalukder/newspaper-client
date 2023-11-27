import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Registration from "./../Pages/Registration/Registration";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "./../Components/Articles/AllArticles";

import ArticlesDetail from "../Pages/Details/ArticlesDetail/ArticlesDetail";

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
      {
        path: "/allArticles",
        element: <AllArticles />,
        loader: () => fetch("http://localhost:5000/articles"),
      },
      {
        path: "/details/:id",
        element: <ArticlesDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/${params.id}`),
      },
    ],
  },
]);
export default router;
