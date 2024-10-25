import { useState, useEffect } from "react";
import sun from "@assets/images/navbar/sun.png";
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      onClick={handleToggle}
      className="h-[40px] w-[40px]  bg-white rounded-full  dark:bg-[#111827] "
    >
      {darkMode ? (
        <IoIosSunny color="white" className={" w-[20px] h-[20px] m-[10px] "} />
      ) : (
        <IoMdMoon className={" w-[20px] h-[20px] m-[10px] "} />
      )}
    </div>
  );
};

export default DarkModeToggle;
