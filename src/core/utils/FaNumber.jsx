import React from "react";

const faNumber = (num, comma) => {
  const farsiNum = new Intl.NumberFormat("fa-IR", {
    useGrouping: comma ? true : false,
  }).format(+num);
  const firstLetter = num.slice(0, 1);
  if (firstLetter === "0") {
    const zero = new Intl.NumberFormat("fa-IR").format(0);
    const final = zero + farsiNum;
    return final;
  } else {
    return farsiNum;
  }
};
export { faNumber };
