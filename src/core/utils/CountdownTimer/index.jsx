/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setIsActive(true);
    setSeconds(60);
  };

  return (

    <div>
      <h6 className='text-[#2196f3]'>{seconds}</h6>
      <span onClick={resetTimer} className="text-[#2196f3] text-[12px] leading-5 font-medium text-center relative top-[130px] right-[38px] cursor-pointer	">
              ارسال دوباره
            </span>
  
    </div>
  );
};

export default CountdownTimer;
