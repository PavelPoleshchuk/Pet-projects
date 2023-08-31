import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InputSlice {
  value: number;
}

const initialState: InputSlice = {
  value: 10,
};

export const inputSlice = createSlice({
  name: "InputSlice",
  initialState,
  reducers: {
  addInputValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInputValue } = inputSlice.actions;

export default inputSlice.reducer;
