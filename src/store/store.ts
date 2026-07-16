import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../store/dashboardSlice";

export const makeStore = () =>
  configureStore({
    reducer: { dashboard: dashboardReducer },
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
