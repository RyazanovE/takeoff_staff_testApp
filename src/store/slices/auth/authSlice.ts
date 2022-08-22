import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface IInitialState {
  isLoggedIn: boolean;
}

const INITIAL_STATE: IInitialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

//selectors
export const isLoggedinSelector = (state: RootState) => state.authReducer.isLoggedIn;

//actions
export const { setIsLoggedIn } = authSlice.actions;

export const authReducer = authSlice.reducer;
