/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@app/Layouts/MainLayout";
import LandingPage from "@screens/Landing";
import ErrorPage from "@screens/Errors/404";
import CoursesPage from "@screens/Courses";
import CourseDetailPage from "@screens/CourseDetail";
import NewsPage from "@screens/News";
import NewsDetailPage from "@screens/NewsDetail";
import PanelLayout from "@app/Layouts/PanelLayout";
import Dashboard from "@components/UserPanel/Content/Dashboard";
import EditProfile from "@components/UserPanel/Content/EditProfile";
import MyList from "@components/UserPanel/Content/MyList";
import MyReserve from "@components/UserPanel/Content/MyReserve";
import ChangePassword from "@components/UserPanel/Content/ChangePassword";
import LogOut from "@components/UserPanel/Content/LogOut";

const RouterConfig = () => {
  const pages = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
        { path: "/CoursesPage", element: <CoursesPage /> },
        { path: "/CourseDetailPage/:id", element: <CourseDetailPage /> },
        { path: "/NewsPage", element: <NewsPage /> },
        { path: "/NewsDetailPage/:id", element: <NewsDetailPage/> },

      ],
    },

    {
      path: "/UserProfileS",
      element: <PanelLayout />,
      children: [
        { path: "/UserProfileS", element: <Dashboard /> },
        { path: "/UserProfileS/EditProfile", element: <EditProfile /> },
        { path: "/UserProfileS/MyList", element: <MyList /> },
        { path: "/UserProfileS/MyReserve", element: <MyReserve /> },
        { path: "/UserProfileS/ChangePassword", element: <ChangePassword /> },
        { path: "/UserProfileS/LogOut", element: <LogOut /> },
      ],
    },

    { path: "*", element: <ErrorPage /> },
  ];

  const router = createBrowserRouter(pages);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
