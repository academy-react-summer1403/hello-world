import React, { useEffect, useState } from "react";
import { getLandingBlogs } from "@core/servises/api/Landing/Blogs/GetNews";
import SmallBlogContent from "./SmallBlogContent";
const SmallBlogs = () => {
  const [landingBlogs, setLandingBlogs] = useState([]);

  const getBlogs = async () => {
    const params = {
      Count: 3,
    };
    const blogs = await getLandingBlogs(params);
    // console.log("blogs:", blogs.news);
    setLandingBlogs(blogs.news.slice(1, 4));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className=" w-[597px] h-[570px]  mt-[-70px] pt-2 max-xl:w-[700px] flex justify-center flex-wrap">
      {landingBlogs.map((item, index) => {
        return (
          <SmallBlogContent
            key={index}
            title={item.title}
            miniDescribe={item.miniDescribe}
            currentImageAddressTumb={item.currentImageAddressTumb}
            currentView={item.currentView}
            insertDate={item.insertDate}
          />
        );
      })}{" "}
    </div>
  );
};

export default SmallBlogs;
