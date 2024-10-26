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
import DashboardPage from "@screens/UserPanel/Dashboard";
import EditProfilePage from "@screens/UserPanel/EditProfile";
import MyListPage from "@screens/UserPanel/MyCourse";
import MyReservePage from "@screens/UserPanel/ReservedCourse";
import ChangePassPage from "@screens/UserPanel/ChangePass";
import CommentPage from "@screens/UserPanel/Comment";

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
        { path: "/UserProfileS", element: <DashboardPage /> },
        { path: "/UserProfileS/EditProfile", element: <EditProfilePage /> },
        { path: "/UserProfileS/MyList", element: <MyListPage /> },
        { path: "/UserProfileS/MyReserve", element: <MyReservePage /> },
        { path: "/UserProfileS/ChangePassword", element: <ChangePassPage /> },
        { path: "/UserProfileS/CommentPage", element: <CommentPage /> },
      ],
    },

    { path: "*", element: <ErrorPage /> },
  ];

  const router = createBrowserRouter(pages);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
