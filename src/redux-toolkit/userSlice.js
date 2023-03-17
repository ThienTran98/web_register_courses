import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../Service/localService";

const initialState = {
  user: userLocalStorage.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
    setUserLogOut: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserLogin, setUserLogOut } = userSlice.actions;

export default userSlice.reducer;
