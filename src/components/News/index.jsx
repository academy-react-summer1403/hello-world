import Filter from "./Filter";
import HeaderNews from "./HeaderNews";
import NewsList from "./NewsList";
import { Pagination } from '@mantine/core';
const News = () => {
  return (
    <div>
       <HeaderNews />
      <div className="flex flex-wrap content-start justify-center gap-[20px] mt-16 w-full mb-16 ">
        <Filter />
      </div>
      <NewsList />
      <Pagination total={10} />
    </div>
  )
}

export default News;
