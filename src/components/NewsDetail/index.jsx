import NewsHeader from "./Header";
import Comments from "./Comment";
import NewsContent from "./Content";
import { GetNewsWithid } from "@core/servises/api/News";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NewsDetail = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  console.log("id:", id);
  const getList = async (id) => {
    try {
      const newsdto = await GetNewsWithid(id);
      console.log("news data:", newsdto);
      setdata(newsdto);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList(id);
  }, []);
  return (
    <div>
      <NewsHeader
        addUserFullName={data?.detailsNewsDto.addUserFullName}
        title={data?.detailsNewsDto.title}
        googleDescribe={data?.detailsNewsDto.googleDescribe}
        currentView={data?.detailsNewsDto.currentView}
        insertDate={data?.detailsNewsDto.insertDate}
        currentImageAddress={data?.detailsNewsDto.currentImageAddress}
        currentImageAddressTumb={data?.detailsNewsDto.currentImageAddressTumb}
      />
      <NewsContent
        googleTitle={data?.detailsNewsDto.googleTitle}
        describe={data?.detailsNewsDto.describe}
        currentDissLikeCount={data?.detailsNewsDto.currentDissLikeCount}
        currentRate={data?.detailsNewsDto.currentRate}
        currentLikeCount={data?.detailsNewsDto.currentLikeCount}
        currentImageAddress={data?.detailsNewsDto.currentImageAddress}
        addUserProfileImage={data?.addUserProfileImage}
      />
      {/* {data?.detailsNewsDto.id && <Comments id={data?.detailsNewsDto.id} />} */}
    </div>
  );
};

export default NewsDetail;
