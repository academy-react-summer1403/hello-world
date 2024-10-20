import * as yup from "yup";

export const ValidationForgetPass = yup.object().shape({
    gmail: yup
    .string()
    .required("این فیلد اجباری است")
    .min(5, "حداقل 5 کاراکتر")
    .max(40, "حداکثر 40 کاراکتر"),
  });
  

  export const ValidationResetPass = yup.object().shape({
    verifyCode: yup
    .string()
    .required("این فیلد اجباری است")
    .min(5, "حداقل 5 کاراکتر")
    .max(5, "حداکثر 5 کاراکتر"),
  });
  
