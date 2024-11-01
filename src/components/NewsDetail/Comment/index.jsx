// import aks5 from "../../../assets/Images/BlogDetails/Sign in Course.png";
import img from "@assets/images/News/1215b2106df963d9ff66fbc22f9cf44c.jpg";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getCommentById } from "@core/servises/api/News";
import { Form, Formik, Field } from "formik";
import CommentList from "./CommentList";
import { addComment } from "@core/servises/api/News";

const Comments = ({ id }) => {
  const [comment, setComment] = useState([]);

  const getComments = async (id) => {
    const coments = await getCommentById(id);
    console.log("coments:", coments);
    setComment(coments);
  };

  useEffect(() => {
    getComments(id);
  }, []);

  const addcm = async (value) => {
    // const { id } = useParams();

    const addComent = {
      newsId: id,
      Title: value.title,
      Describe: value.describe,
    };
    console.log("comentListt", addComent);

    const data = new FormData();
    const keys = Object.keys(addComent);
    keys.forEach((key) => {
      const item = addComent[key];
      data.append(key, item);
    });
    const coments = await addComment(data);

    console.log(coments);
    console.log("submit", submit);
  };

  return (
    <div className=" dark:bg-[#1a1a2e]">
      <div className="  flex justify-center ">
        <div className="w-[900px] h-[891px] overflow-y-scroll mt-[25px] mb-[50px]  rounded-[20px] shadow-2xl  dark:bg-[#111827]">
          <h1 className='text-center font-["YekanBakhBold"] text-2xl text-grayy  mt-[20px]  dark:text-white '>
            {" "}
            نظر کاربران درباره این مقاله{" "}
          </h1>

          <div className="flex justify-center mt-2 dark:text-white ">
            <div>
              <Formik
                initialValues={{ title: "", describe: "" }}
                onSubmit={(value) => addcm(value)}
              >
                <Form className="w-full">
                  <div className="w-full">
                    <div className="relative">
                      <div className=" text-start flex flex-wrap gap-y-2 border border-[#cdd5de] rounded-lg  shadow-md">
                        <Field
                          dir="rtl"
                          as="textarea"
                          name="title"
                          placeholder="عنوان "
                          className="relative border-b w-[100%] h-[50px] pr-12 "
                        />

                        <Field
                          dir="rtl"
                          as="textarea"
                          id="describe"
                          name="describe"
                          className="commentFormTextarea w-[500px] h-[100px] "
                          placeholder="نظر خودتو بنویس..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[60px] h-[40px] bg-bluee mt-2 rounded-[50px]  ">
                    <button
                      type="submit"
                      className="font-[YekanBakh] relative top-2 left-3.5 text-[15px] text-white mx-auto  "
                    >
                      ارسال{" "}
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className=" flex flex-wrap justify-center ">
              {comment?.map((item, index) => {
                console.log("item:", item);
                return (
                  <CommentList
                    key={index}
                    id={item?.id}
                    courseId={item?.courseId}
                    CommentId={item?.id}
                    author={item?.author}
                    insertDate={item?.insertDate}
                    title={item?.title}
                    describe={item?.describe}
                    pictureAddress={item?.pictureAddress}
                    likeCount={item?.likeCount}
                  />
                );
              })}
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
