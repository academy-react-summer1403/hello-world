import * as yup from "yup";

const ValidationRegister = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("این فیلد اجباری است")
    .min(11, "حداقل 11 کاراکتر")
    .max(11, "حداکثر 11 کاراکتر"),
});

export default ValidationRegister;
