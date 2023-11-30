import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Registration from "./../Pages/Registration/Registration";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "./../Components/Articles/AllArticles";

import ArticlesDetail from "../Pages/Details/ArticlesDetail/ArticlesDetail";
import PrivateRouter from "./../Authentication/PrivateRouter/PrivateRouter";
import Subscription from "../Pages/Subscription/Subscription";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MyArticles from "../Pages/MyArticles/MyArticles";
import DashBoard from "../Layout/DashBoard";
import AddPublisher from "../Pages/DashBoard/AddPublisher/AddPublisher";
import Chart from "../Pages/DashBoard/Charts/Chart";
import AllUsers from "./../Pages/DashBoard/AllUsers/AllUsers";
import DashboardAllArticles from "../Pages/DashBoard/DashboardAllArticles/DashboardAllArticles";
import PremuimArticles from "../Components/Articles/PremuimArticles";

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
        element: (
          <PrivateRouter>
            <AllArticles />
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/article/status/approved"),
      },
      {
        path: "/details/:id",
        element: <ArticlesDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/${params.id}`),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRouter>
            <Subscription />
          </PrivateRouter>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/myArticles",
        element: (
          <PrivateRouter>
            <MyArticles />
          </PrivateRouter>
        ),
      },
      {
        path: "/detail/:id",
        element: <ArticlesDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/article/${params.id}`),
      },
      {
        path: "/premiumArticles",
        element: (
          <PrivateRouter>
            <PremuimArticles />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "addPublisher",
        element: <AddPublisher />,
      },
      {
        path: "charts",
        element: <Chart />,
      },
      {
        path: "allArticles",
        element: <DashboardAllArticles />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);
export default router;
