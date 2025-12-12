import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import mcqReducer from "./mcq/mcqSlice";
import resultReducer from "./result/resultSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mcq: mcqReducer,
    result: resultReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
