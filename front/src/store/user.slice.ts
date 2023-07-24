import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "firebase/auth";

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, payload) {
      state.user = payload.payload;
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

export const { setUser } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user.user;

export default userSlice.reducer;