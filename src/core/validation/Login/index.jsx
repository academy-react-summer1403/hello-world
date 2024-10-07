import * as yup from "yup";

const ValidationLogin = yup.object().shape({
  phoneOrGmail: yup
    .string()
    .required("این فیلد اجباری است")
    .min(2, "حداقل 2 کاراکتر")
    .max(30, "حداکثر 30 کاراکتر"),
  password: yup
    .string()
    .required("این فیلد اجباری است")
    .min(6, "حداقل 8 کاراکتر")
    .max(18, "حداکثر 18 کاراکتر"),
});

export default ValidationLogin;
