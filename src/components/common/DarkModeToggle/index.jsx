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
    <div onClick={handleToggle} className="h-[40px] w-[40px]  bg-white rounded-full">
      <img className=" w-[20px] h-[20px] mx-auto " src={sun} alt="image "/> 
        {/* {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} */}
    </div>
  );
};

export default DarkModeToggle;
