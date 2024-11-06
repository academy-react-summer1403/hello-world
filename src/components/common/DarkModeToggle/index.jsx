import { useState, useEffect } from "react";
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
      className="h-[40px] w-[40px] bg-white rounded-full dark:bg-[#111827] transition-colors duration-300 ease-in-out"
    >
      {darkMode ? (
        <IoIosSunny
          color="white"
          className="w-[20px] h-[20px] m-[10px] transition duration-300 ease-in-out"
        />
      ) : (
        <IoMdMoon className="w-[20px] h-[20px] m-[10px] transition duration-300 ease-in-out" />
      )}
    </div>
  );
};

export default DarkModeToggle;
