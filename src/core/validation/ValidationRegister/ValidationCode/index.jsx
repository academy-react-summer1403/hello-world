import * as yup from "yup";

export const ValidationCode = yup.object().shape({
    verifyCode: yup
    .string()
    .required("این فیلد اجباری است")
    .min(5, "حداقل 5 کاراکتر")
    .max(5, "حداکثر 5 کاراکتر"),
});
