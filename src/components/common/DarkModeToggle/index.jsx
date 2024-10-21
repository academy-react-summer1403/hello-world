import { useState, useEffect } from 'react';
import sun from "@assets/images/navbar/sun.png"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <div onClick={handleToggle} className="h-[40px] w-[40px]  bg-darkwhite rounded-full  dark:bg-[#111827] "> 
        {darkMode ?   <img className={ " w-[20px] h-[20px] m-[10px] "} src={sun} alt="image "/>:<svg
      // xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className=" w-[20px] h-[20px] m-[10px] "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 1010.5 9.79z"
      />
    </svg> }
    </div>
  );
};

export default DarkModeToggle;
