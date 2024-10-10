import http from "@core/servises/interceptor/Interseptor";

export const getcoursetop = async (count) => {
  try {
    const result = await http.get("/Home/GetCoursesTop?", { params: count });

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
