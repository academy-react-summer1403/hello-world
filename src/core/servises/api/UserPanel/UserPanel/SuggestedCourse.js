import http from "../../../interceptor/Interseptor";

export const SuggesCourse = async (count) => {
  try {
    const result = await http.get("/Home/GetCoursesTop", { params: count });

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
