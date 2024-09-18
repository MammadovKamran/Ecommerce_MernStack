/** @format */

// lib/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "@/features/slices/categoriesSlice";
import authReducer from "@/features/slices/authSlice";
import { categoryApi } from "@/features/services/categoryApi";
import { authApi } from "@/features/services/authApi";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  [authApi.reducerPath]: authApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(categoryApi.middleware),
  });
}
