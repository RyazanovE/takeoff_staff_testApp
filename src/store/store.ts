import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { mainApi } from "api/main/mainApi";
import authReducer from "./slices/auth/authSlice";
import contactsSlice from "./slices/contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    contactsSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
