import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  installed: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    install(state) {
      state.installed = true;
    },
  },
});

export const { install } = appSlice.actions;
export default appSlice.reducer;
