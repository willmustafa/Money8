import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  email: string;
  name: string;
  token: string;
}

const initialState: UserState = {
  email: '',
  name: '',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZDg3Njg2ZC00Y2VlLTQ2MDMtOGVlMS04ZmYxNzBlNTNmNTciLCJlbWFpbCI6IndpbGxpYW4yMTQydHNzYWFAZ21haWwuY29tIiwibmFtZSI6IldpbGxpYW4gTXVzdGFmYSIsImlhdCI6MTY4NjI0NzkxMiwiZXhwIjoxNjg2MzM0MzEyfQ.RuWj77S3BJUfaljGYTOzU8ndU8X8eRivxLG6DB8Ehl0',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail(state, payload) {
      state.email = payload.payload;
    },
    setUserName(state, payload) {
      state.name = payload.payload;
    },
    setUserToken(state, payload) {
      state.token = payload.payload;
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

export const { setUserEmail, setUserName, setUserToken } = userSlice.actions;

export default userSlice.reducer;