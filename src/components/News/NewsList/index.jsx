import NewsItem from "./NewsItems/index";
import { useEffect, useState } from "react";
import { getAllWithCategoryFilter } from "@core/servises/api/News/index";
import { useParams } from "react-router-dom";

const NewsList = (data) => {
  console.log("dataaaaaaaa",data.data)
  // const [data, setdata] = useState();
  // const getList = async () => {
  //   const params = {
  //     Count: 9,
  //   };
  //   const blogs = await getAllWithCategoryFilter(params);
  //   console.log("blogs:", blogs.news);
  //   setdata(blogs?.news);
  // };
  // useEffect(() => {
  //   getList();
  // }, []);
  return (
    <div className="w-full  mt-23 flex justify-center flex-wrap max-xx:mb-28">
      <div className="w-[1300px]  flex justify-center flex-wrap align-top ">
        <div className="w-full h-[70%] gap-[8px] flex justify-center flex-wrap max-xx:h-[90%] max-tshort:mt-[-90px] max-tshort:h-[100%]">
          {data?.data?.map((data, index) => {
            return (
              <NewsItem
                key={index}
                title={data?.title}
                miniDescribe={data?.miniDescribe}
                currentView={data?.currentView}
                currentImageAddressTumb={data?.currentImageAddressTumb}
                id={data?.id}
                insertDate={data?.insertDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
