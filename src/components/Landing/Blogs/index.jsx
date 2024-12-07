import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vector from "@assets/images/Landing/Servises/Vector 20.svg";
import { getLandingBlogs } from "@core/servises/api/Landing/Blogs/GetNews";
import TopBlog from "./TopBlog";
import BlogItem from "./BlogItem";
const Blogs = () => {
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
    <div className="w-full flex justify-center pt-20 mb-20">
      <div className="">
        <div className="w-full h-20 text-center dark:text-white transition duration-300 ease-in-out text-[#263238] text-4xl  myFontBold max-xl:mb-14">
          <h2 className="w-full font-['YekanBakhBold'] dark:text-white transition duration-300 ease-in-out">
            اخبار و مقالات
          </h2>
          <img className="m-auto mt-4" src={vector} alt="" />
        </div>
        <div className=" flex w-[80%] mx-auto">
          <div className="">
            <BlogItem />
          </div>
          <div className="">
            {landingBlogs.map((item, index) => {
              return (
                <TopBlog
                  key={index}
                  id={item.id}
                  title={item.title}
                  miniDescribe={item.miniDescribe}
                  currentImageAddressTumb={item.currentImageAddressTumb}
                  currentView={item.currentView}
                  insertDate={item.insertDate}
                />
              );
            })}
          </div>
        </div>
        {/* <div className="flex w-[90%] mx-auto border"> */}
        <Link
          className="flex w-[120px] mx-auto   h-[48px] text-center bg-[#2196F3] rounded-[80px] mt-[5px] pt-3 text-white max-xl:mt-0"
          to="/NewsPage"
        >
          {" "}
        <span className=" mx-auto "> مشاهده همه</span>  
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Blogs;
