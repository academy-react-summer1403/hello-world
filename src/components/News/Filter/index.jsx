import LikeDislike from "@core/utils/like and dislikeBT";
import RadioButtonList from "@core/utils/RadioButtonList/indx";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardVoice, MdOutlineKeyboardVoice } from "react-icons/md";

const Filter = ({ searchQuery, setSearchQuery }) => {
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    recognition.current = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.current.continuous = false;
    recognition.current.interimResults = false;
    recognition.current.lang = "fa-IR";

    recognition.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };

    recognition.current.onend = () => {
      setIsListening(false);
    };
  }, []);

  const handleListening = () => {
    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
    } else {
      recognition.current.start();
      setIsListening(true);
    }
  };
  return (
    <div className="flex flex-nowrap justify-between px-5 items-center gap-[20px] w-[1300px] h-[70px] max-xl:w-[1100px] max-xl:pr-10 max-sm:w-[600px] max-mini:flex-wrap max-mini:justify-center max-mini:h-[190px] dark:bg-[#1a1a2e]">
      <div className="div2 w-[600px] bottom-7  relative max-xl:w-[380px] max-lg:w-[300px] max-md:w-[230px]  max-sm:w-[130px] max-mini:w-[400px] max-mini:flex max-mini:justify-center max-mini:pl-[17px] max-mini:mt-[-110px] dark:bg-[#1a1a2e]  dark:text-white ">
        <button
          className="w-10 h-10 rounded-full dark:bg-[#1a1a2e] bg-darkwhite relative left-[45%] top-2 z-10"
          onClick={handleListening}
        >
          {isListening ? (
            <MdKeyboardVoice className="m-auto" size={"20px"} />
          ) : (
            <MdOutlineKeyboardVoice className="m-auto" size={"20px"} />
          )}
        </button>
        <input
          className="  w-[110%] h-[58px]  rounded-[15px] text-right pr-3 bg-white shadow-md myFontMiniBold text-[17px] absolute max-lg:h-[40px] max-md:h-[35px] max-md:top-2 max-md:text-[13px] max-mini:w-[80%] mini:left-[43%] dark:bg-[#111827] dark:text-white"
          type="search"
          value={searchQuery}
          placeholder="دنبال چی میگردی ؟؟ "
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Filter;
