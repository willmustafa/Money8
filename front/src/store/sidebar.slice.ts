import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface SidebarState {
  isSidebarExpanded: boolean;
}

const initialState: SidebarState = {
  isSidebarExpanded: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebarState(state) {
      state.isSidebarExpanded = !state.isSidebarExpanded ;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...(action as any).payload,
      };
    })
  },
});

export const { toggleSidebarState } = sidebarSlice.actions;

export const selectSidebarState = (state: AppState) => state.sidebar.isSidebarExpanded;

export default sidebarSlice.reducer;