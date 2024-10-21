import Filter from "./Filter";
import HeaderNews from "./HeaderNews";
import NewsList from "./NewsList";
import DarkModeToggle from "@components/common/DarkModeToggle";
const News = () => {
  
  return (
    <div className="dark:bg-[#1a1a2e]">
       <HeaderNews />
      <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 dark:bg-[#1a1a2e] ">
        <Filter />
      </div>
      <NewsList />
    </div>
  )
}

export default News;
