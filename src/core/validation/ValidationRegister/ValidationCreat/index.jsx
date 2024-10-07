import * as yup from "yup";

const ValidationCreat = yup.object().shape({
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

export default ValidationCreat;
