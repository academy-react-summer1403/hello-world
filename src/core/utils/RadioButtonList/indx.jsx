import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("همه");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center space-x-4 mt-2 mr-8 h-14 w-[526px] bg-[#ebebeb] rounded-2xl pt-2 dark:bg-[#111827] text-white">
      <button
        className={`px-6 py-2 rounded-full w-[88px] h-10 ${
          activeTab === "همه"
            ? "bg-bluee text-white"
            : "bg-gray-100 text-gray-600"
        }`}
        onClick={() => handleTabClick("همه")}
      >
        همه
      </button>
      <button
        className={`px-6 py-2 rounded-full w-[88px] h-10 ${
          activeTab === "محبوب‌ترین‌ها"
            ? "bg-bluee text-white"
            : "bg-gray-100 text-gray-600"
        }`}
        onClick={() => handleTabClick("محبوب‌ترین‌ها")}
      >
        محبوب‌ترین‌ها
      </button>
      <button
        className={`px-6 py-2 rounded-full w-[88px] h-10 ${
          activeTab === "پربازدیدترین‌ها"
            ? "bg-bluee text-white"
            : "bg-gray-100 text-gray-600"
        }`}
        onClick={() => handleTabClick("پربازدیدترین‌ها")}
      >
        پربازدیدترین‌ها
      </button>
      <button
        className={`px-6 py-2 rounded-full w-[88px] h-10 ${
          activeTab === "جدیدترین‌ها"
            ? "bg-bluee text-white"
            : "bg-gray-100 text-gray-600"
        }`}
        onClick={() => handleTabClick("جدیدترین‌ها")}
      >
        جدیدترین‌ها
      </button>
    </div>
  );
};

export default Tabs;
