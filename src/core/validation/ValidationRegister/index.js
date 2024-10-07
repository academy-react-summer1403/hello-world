import * as yup from "yup";

export const ValidationCode = yup.object().shape({
  verifyCode: yup
    .string()
    .required("این فیلد اجباری است")
    .min(5, "حداقل 5 کاراکتر")
    .max(5, "حداکثر 5 کاراکتر"),
});
export const ValidationCreat = yup.object().shape({
  gmail: yup
    .string()
    .required("این فیلد اجباری است")
    .min(5, "حداقل 5 کاراکتر")
    .max(40, "حداکثر 40 کاراکتر"),
  password: yup
    .string()
    .required("این فیلد اجباری است")
    .min(8, "حداقل 8 کاراکتر")
    .max(20, "حداکثر 20 کاراکتر"),
});

export const ValidationRegister = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("این فیلد اجباری است")
    .min(11, "حداقل 11 کاراکتر")
    .max(11, "حداکثر 11 کاراکتر"),
});
