import http from "@core/servises/interceptor/Interseptor";

export const getTeachers = async (count) => {
  try {
    const result = await http.get("/Home/GetTeachers", { params: count });

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
