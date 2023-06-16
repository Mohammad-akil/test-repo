import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  data: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add(state, action) {
      state.data = action.payload;
    },
  },
});

export const { add } = listSlice.actions;
export default listSlice.reducer;
