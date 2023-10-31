import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  IUser } from "../../types";
import { RootState } from "../store";

export type AuthState = {
  loggedin: boolean;
  user?: IUser;
  status?: boolean;
  fcmToken?: string;
  isRefreshing: boolean;
  connectError?: boolean;
};

const initialState: AuthState = {
  loggedin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    
    logout: (state, action: PayloadAction) => {
      state.loggedin = false;
      state.user = undefined;
    },
  },
});

export const authSelector = (state: RootState) => state.auth;

export const {
  logout,
} = authSlice.actions;
export default authSlice.reducer;
