import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const Contactus = () => {
  useEffect(() => {
    Crisp.configure("1959ff74-7e78-474e-9aee-12a91a610166");
  }, []);
  return null;
};
