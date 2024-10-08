import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@app/Layouts/MainLayout";
import LandingPage from "@screens/Landing";
import ErrorPage from "@screens/Errors/404";
import CoursesPage from "@screens/Courses";
import NewsPage from "@screens/News";

const RouterConfig = () => {
  const pages = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
        { path: "/CoursesPage", element: <CoursesPage /> },
        { path: "/NewsPage", element: <NewsPage /> },
      ],
    },

    { path: "*", element: <ErrorPage /> },
  ];

  const router = createBrowserRouter(pages);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
