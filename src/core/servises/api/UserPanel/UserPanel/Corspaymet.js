import http from "../../../interceptor/Interseptor";

export const coursePayment = async (file) => {
	try {
		const result = await http.post("/CoursePayment/StudentAddPeyment", file);
		return result;
	} catch (error) {
		return error;
	}
};
export const coursePaymentaddimg = async (file) => {
	try {
		const result = await http.post(
			"/CoursePayment/StudentAddPeymentImage",
			file
		);
		return result;
	} catch (error) {
		return error;
	}
};