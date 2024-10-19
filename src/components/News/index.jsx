import Filter from "./Filter";
import HeaderNews from "./HeaderNews";
import NewsList from "./NewsList";
const News = () => {
  return (
    <div>
       <HeaderNews />
      <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 ">
        <Filter />
      </div>
      <NewsList />
    </div>
  )
}

export default News;
