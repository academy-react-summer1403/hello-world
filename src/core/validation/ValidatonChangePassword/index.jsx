import * as yup from "yup";

const ValidatonChangePassword = yup.object().shape({
    oldPassword: yup
    .string()
    .required("این فیلد اجباری است")
    .min(8, "حداقل 8 کاراکتر")
    .max(18, "حداکثر 18 کاراکتر"),
    newPassword: yup
    .string()
    .required("این فیلد اجباری است")
    .min(8, "حداقل 8 کاراکتر")
    .max(18, "حداکثر 18 کاراکتر"),
});

export default ValidatonChangePassword;