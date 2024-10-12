
import NewsItem from "./NewsItems/index";
import { useEffect, useState } from "react";
import { getAllWithCategoryFilter } from "@core/servises/api/News/index";

const NewsList = () => {
  const [data, setdata] = useState();

  const getList = async () => {
    const params = {
      Count: 5,
    };
    const blogs = await getAllWithCategoryFilter(params);
    console.log("blogs:", blogs.news);
    setdata(blogs?.news);
  };
  useEffect(() => {
    getList();
  }, []); 
  return (
    <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 ">
      <div className="flex flex-wrap justify-between px-5 gap-2 items-center w-[1280px]">
        {data?.map((data, index) => {
          return (
            <NewsItem
              key={index}
              title={data?.title}
              miniDescribe={data?.miniDescribe}
              currentView={data?.currentView}
              currentImageAddressTumb={data?.currentImageAddressTumb}
              updateDate={data?.updateDate}
              id={data?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
