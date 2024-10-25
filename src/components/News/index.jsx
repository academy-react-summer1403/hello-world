import { useEffect, useState } from "react";
import Filter from "./Filter";
import HeaderNews from "./HeaderNews";
import NewsList from "./NewsList";
import DarkModeToggle from "@components/common/DarkModeToggle";
import { getAllWithCategoryFilter } from "@core/servises/api/News";
const News = () => {
  const [data, setdata] = useState();
  const [search, setSearch] = useState("");
  const getList = async () => {
    const params = {
      Count: 9,
      Query: search,
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
  }, [search]);
  return (
    <div className="dark:bg-[#1a1a2e] bg-white2">
      <HeaderNews />
      <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 dark:bg-[#1a1a2e] ">
        <Filter search={search} setSearch={setSearch} />
      </div>
      <NewsList data={data} />
    </div>
  );
};

export default News;
