import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface MonthState {
  selectedDate: string;
}

const initialState: MonthState = {
  selectedDate: new Date().toISOString(),
};

export const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    setMonth(state, payload) {
      state.selectedDate = payload.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setMonth } = monthSlice.actions;

export const selectMonthState = (state: AppState) => state.month.selectedDate;

export default monthSlice.reducer;