import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const <%= reducerSlug %>Slice = createSlice({
  name: "<%= reducerSlug %>",
  initialState,
  reducers: {
    example(state) {
      state.value = true;
    },
  },
});

export const { example } = <%= reducerSlug %>Slice.actions;
export default <%= reducerSlug %>Slice.reducer;
