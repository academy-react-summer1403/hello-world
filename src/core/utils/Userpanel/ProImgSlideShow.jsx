// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import required modules


// import avatarImg from "../../../assets/image/avatar-blank.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideShow.css";
import "./Update.css";
import { useDispatch, useSelector } from "react-redux";

import { deleteProfileImage, selectProfileImage } from "@core/servises/api/UserPanel/UserPanel/EditAccount";
import { handleRefetch } from "../../../redux/userProfil";

const ProImgSlideShow = ({ student }) => {
  const pofileImages = student.userImage;
  const dispatch = useDispatch();
  const refetch = useSelector((state) => state.userProfil.refetch);

  const ChangeProImg = async (imageId) => {
    const imageData = new FormData();

    imageData.append("ImageId", imageId);

    await selectProfileImage(imageData);

    dispatch(handleRefetch(refetch + 1));
  };
  const deleteProImg = async (imageId) => {
    const imageData = new FormData();
    imageData.append("DeleteEntityId", imageId);

    await deleteProfileImage(imageData);

    dispatch(handleRefetch(refetch + 1));
  };

  return (
    <>
      <Swiper
        dir="rtl"
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   reverseDirection: false,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {pofileImages &&
          pofileImages.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="border rounded-full overflow-hidden relative flex flex-col justify-center items-center text-center">
                  <img
                    className="object-cover w-[170px] h-[170px] rounded-full"
                    src={
                      item.puctureAddress !== "Not-set"
                        ? item.puctureAddress
                        : avatarImg
                    }
                    alt=""
                  />
                  <div className="absolute  w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                    <div className="flex w-full h-full justify-center items-center gap-2 text-white text-center text-base font-bold">
                      <div
                        className="bg-opacity-50 border border-slate-900 border-opacity-0 rounded-md px-3 py-1 shadow-4 cursor-pointer"
                        style={{ backgroundColor: "var(--main-col)" }}
                        onClick={() => ChangeProImg(item.id)}
                      >
                        انتخاب
                      </div>
                      <div
                        className="bg-opacity-50 border border-slate-900 border-opacity-0 rounded-md px-3 py-1 shadow-4 cursor-pointer"
                        value={item.id}
                        style={{ backgroundColor: "var(--main-col)" }}
                        onClick={() => deleteProImg(item.id)}
                      >
                        حذف
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export { ProImgSlideShow };
