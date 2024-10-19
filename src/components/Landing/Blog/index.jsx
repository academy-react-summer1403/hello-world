import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vector from "@assets/images/Landing/Servises/Vector 20.svg";
import { getLandingBlogs } from "@core/servises/api/Landing/Blogs/GetNews";
import TopBlog from "./TopBlog";
import BlogItem from "./BlogItem";
const Blog = () => {
  const [landingBlogs, setLandingBlogs] = useState([]);

  const getBlogs = async () => {
    const params = {
      Count: 3,
    };
    const blogs = await getLandingBlogs(params);
    // console.log("blogs:", blogs.news);
    setLandingBlogs(blogs.news.slice(0, 1));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="w-full flex justify-center pt-20 ">
      <div className="w-[1200px] h-[830px] flex justify-center flex-wrap ">
        <div className="w-full h-20 text-center text-[#263238] text-4xl  myFontBold max-xl:mb-14">
          <h2 className="w-full font-['YekanBakhBold'] ">اخبار و مقالات</h2>
          <img className="m-auto mt-4" src={vector} alt="" />
        </div>
        <BlogItem />
        {landingBlogs.map((item, index) => {
          return (
            <TopBlog
              key={index}
              title={item.title}
              miniDescribe={item.miniDescribe}
              currentImageAddressTumb={item.currentImageAddressTumb}
              currentView={item.currentView}
              insertDate={item.insertDate}
            />
          );
        })}
        <div className="max-xl:w-full"></div>
        <Link
          className="w-[141px] h-[48px] text-center bg-[#2196F3] rounded-[80px] mt-[5px] pt-3 text-white max-xl:mt-0"
          to="/NewsPage"
        >
          {" "}
          مشاهده همه
        </Link>
      </div>
    </div>
  );
};

export default Blog;
