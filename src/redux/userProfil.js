import { createSlice } from "@reduxjs/toolkit";

const userProfil = createSlice({
  name: "userProfil",
  initialState: {
    userProfilInfo: [],
    rserveCourse: [],
    coursesList: [],
    refetch: 1,
  },
  reducers: {
    handleUserProfilInfo: (state, action) => {
      state.userProfilInfo = action.payload;
    },
    handleRseveCourse: (state, action) => {
      state.rserveCourse = action.payload;
    },
    handleCoursesList: (state, action) => {
      state.coursesList = action.payload;
    },
    handleRefetch: (state, action) => {
      state.refetch = action.payload;
    },
  },
});

export const {
  handleUserProfilInfo,
  handleRseveCourse,
  handleCoursesList,
  handleRefetch,
} = userProfil.actions;

export default userProfil.reducer;
