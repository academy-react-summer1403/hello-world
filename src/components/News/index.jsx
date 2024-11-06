import { useEffect, useState } from "react";
import Filter from "./Filter";
import HeaderNews from "./HeaderNews";
import NewsList from "./NewsList";
import DarkModeToggle from "@components/common/DarkModeToggle";
import { getAllWithCategoryFilter } from "@core/servises/api/News";
const News = () => {
  const [data, setdata] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const getList = async () => {
    const params = {
      Count: 9,
      Query: searchQuery,
    };
    const blogs = await getAllWithCategoryFilter(params);
    console.log("blogs:", blogs.news);
    setdata(blogs?.news);
  };
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [searchQuery]);
  return (
    <div className="dark:bg-[#1a1a2e] transition duration-300 ease-in-out bg-white2">
      <HeaderNews />
      <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 dark:bg-[#1a1a2e] transition duration-300 ease-in-out ">
        <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <NewsList data={data} />
    </div>
  );
};

export default News;
