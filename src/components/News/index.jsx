import Filter from "./Filter";
import HeaderNews from "./HeaderNews";
import NewsList from "./NewsList";
import DarkModeToggle from "@components/common/DarkModeToggle";
const News = () => {
  
  return (
    <div className="dark:bg-slate-800">
       <HeaderNews />
      <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 dark:bg-slate-600 ">
        <Filter />
      </div>
      <NewsList />
    </div>
  )
}

export default News;
