import http from "@core/servises/interceptor/Interseptor";

export const getAllWithCategoryFilter = async (count) => {
  try {
    const result = await http.get(
      "/News?PageNumber=1&RowsOfPage=9&SortingCol=InsertDate&SortType=DESC",
      { params: count }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const GetNewsWithid = async (id) => {
    try {
      const result = await http.get(`/News/${id}`);
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
