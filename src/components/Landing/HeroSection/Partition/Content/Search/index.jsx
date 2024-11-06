import React from "react";
import { useTranslation } from "react-i18next";
import search from "@assets/images/Landing/HeroSection/search.svg";
import "@components/common/translait/index";

const Search = () => {
  const { t } = useTranslation();
  return (
    <div className="relative ">
      <input
        className="Search dark:bg-[#111827] transition duration-300 ease-in-out w-[680px] h-[50px] mt-[30px] rounded-[15px] pr-[20px] text-right border-[0] max-xl:w-[600px] max-md:w-[550px] max-sm:w-[480px] max-mini:w-[420px] max-short:w-[330px] max-short:mt-[40px] max-short:text-[13px] max-short:mb-[20px]"
        type="search"
        placeholder={t("چی میخوای یاد بگیری؟")}
      />
      <img className=" absolute top-[43px] left-[20px] " src={search} />
    </div>
  );
};

export default Search;
