import React from "react";
import { useTranslation } from "react-i18next";
import search from "@assets/images/Landing/HeroSection/search.svg";
import "@components/common/translait/index";
import { Field, Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const postSearchCourse = async (value) => {
    if (value.selectedQuery === "course") {
      navigate(`/CoursesPage?Query=${value.query}`);
    } else if (value.selectedQuery === "news") {
      navigate(`/ArticlesList?Query=${value.query}`);
    }
  };
  // const { t } = useTranslation();
  return (
    <div className="relative">
      {/* <input
        className="Search dark:bg-[#111827] transition duration-300 ease-in-out w-[680px] h-[50px] mt-[30px] rounded-[15px] pr-[20px] text-right border-[0] max-xl:w-[600px] max-md:w-[550px] max-sm:w-[480px] max-mini:w-[420px] max-short:w-[330px] max-short:mt-[40px] max-short:text-[13px] max-short:mb-[20px]"
        type="search"
        placeholder={t("چی میخوای یاد بگیری؟")}
      /> */}
      <Formik
        initialValues={{ query: "", selectedQuery: "course" }}
        onSubmit={postSearchCourse}
      >
        <Form>
          <div className=" flex items-center justify-around  h-[80px] ">
            <Field
              type="text"
              name="query"
              className="Search dark:bg-[#111827] transition duration-300 ease-in-out w-[680px] h-[50px] mt-[30px] rounded-[15px] pr-[20px] text-right border-[0] max-xl:w-[600px] max-md:w-[550px] max-sm:w-[480px] max-mini:w-[420px] max-short:w-[330px] max-short:mt-[40px] max-short:text-[13px] max-short:mb-[20px]"
              placeholder="جست و جو کنید ..."
            />
            {/* <div className="w-32 h-10 relative right-[75%] top-[25%]">
                  <Field
                    as="select"
                    name="selectedQuery"
                    className="w-3/4 h-7 bg-metricWhite px-2 outline-none rounded-md border-2 border-metricGray2 text-sm text-metricGray3"
                  >
                    <option value="course" selected>
                      دوره
                    </option>
                    <option value="news"> اخبار</option>
                  </Field>
                </div> */}
            <button type="submit" className="ml-2">
              {/* <img className="w-8" src={SearchIcon} alt="#" /> */}
              <img className=" absolute top-[43px] left-[20px] " src={search} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Search;
