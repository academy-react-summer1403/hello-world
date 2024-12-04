import { useState } from "react";

import { ProImgSlideShow } from "./ProImgSlideShow";



// import avatarImg from "../../../assets/image/avatar-blank.png";

import { Button, Upload } from "antd";
import { addProfileImage } from "@core/servises/api/UserPanel/UserPanel/EditAccount";
import { ButtonDarkGreen } from "./ButtonDarkGreen";
import { useDispatch, useSelector } from "react-redux";
import { handleRefetch } from "../../../redux/userProfil";


const ProfilImageModal = () => {
  const [image, setImage] = useState();
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const refetch = useSelector((state) => state.userProfil.refetch);

  const student = useSelector((state) => state.userProfil.userProfilInfo);

  const addNewProImg = async (image) => {
    const imageData = new FormData();
    imageData.append("formFile", image);
    await addProfileImage(imageData);
    dispatch(handleRefetch(refetch + 1));
  };

  const props = {
    onRemove: () => {
      setImage();
    },
    beforeUpload: (file) => {
      setImage(file);
      return false;
    },
    image,
  };

  return (
    <>
      {/* open modal button */}
      {/* <label
        htmlFor="my_modal_1"
        style={{ background: "var(--text-col3)", color: "var(--btn-dark)" }}
        className={"btn border-transparent rounded-full py-2 px-6"}
      >
        ویرایش عکس
      </label>

      
      <input type="checkbox" id="my_modal_1" className="modal-toggle" /> */}
      <div className="modal ">
        <div style={{ background: "var(--background)" }} className="modal-box">
          <div className="py-8 flex flex-col justify-center items-center text-center">
            <ProImgSlideShow student={student} />
            <div
              style={{ color: "var(--text-col4)" }}
              className="flex flex-col justify-center items-center gap-2 text-sm mb-4"
            >
              <Upload {...props}>
                <Button className="font-vzr text-[var(--text-col4)] bg-none hover:bg-[var(--main-col)] border-[var(--main-col)] hover:border-none">
                  انتخاب فایل
                </Button>
              </Upload>

              <span>JPG or PNG no larger than 5 MB</span>
            </div>
            <ButtonDarkGreen
              name="آپلود عکس"
              onChange={(file) => {
                file.preventDefault(), addNewProImg(image);
              }}
            />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_1">
          Close
        </label>
      </div>
    </>
  );
};

export { ProfilImageModal };
