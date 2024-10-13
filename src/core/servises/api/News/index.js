import http from "@core/servises/interceptor/Interseptor";

export const getAllWithCategoryFilter = async (count) => {
  try {
    const result = await http.get(
      "/News?PageNumber=1&RowsOfPage="+ count
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
