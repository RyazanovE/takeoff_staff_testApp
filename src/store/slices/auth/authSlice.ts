import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface IInitialState {
  isLoggedIn: boolean;
}

const isLoggedJson = localStorage.getItem("login");

const INITIAL_STATE: IInitialState = {
  isLoggedIn: isLoggedJson ? JSON.parse(isLoggedJson) : false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      localStorage.setItem("login", JSON.stringify(action.payload));
      state.isLoggedIn = action.payload;
    },
  },
});

//selectors
export const isLoggedinSelector = (state: RootState) => state.authReducer.isLoggedIn;

//actions
export const { setIsLoggedIn } = authSlice.actions;

export default  authSlice.reducer;
