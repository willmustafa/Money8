import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { sidebarSlice } from "./sidebar.slice";
import { createWrapper } from "next-redux-wrapper";
import {monthSlice} from "./month.slice";

const makeStore = () =>
  configureStore({
    reducer: {
      [sidebarSlice.name]: sidebarSlice.reducer,
      [monthSlice.name]: monthSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);