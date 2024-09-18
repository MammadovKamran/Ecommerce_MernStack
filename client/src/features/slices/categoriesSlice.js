/** @format */

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";

const categoriesAdapter = createEntityAdapter({
  selectId: (category) => category._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = categoriesAdapter.getInitialState({
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        categoryApi.endpoints.getCategories.matchFulfilled,
        (state, { payload }) => {
          categoriesAdapter.setAll(state, payload.categories);
        }
      )
      .addMatcher(
        categoryApi.endpoints.getCategoryById.matchFulfilled,
        (state, { payload }) => {
          categoriesAdapter.upsertOne(state, payload.category);
        }
      );
  },
});

export default categoriesSlice.reducer;
export const { selectAll: selectAllCategories, selectById: selectCategoryById } =
  categoriesAdapter.getSelectors((state) => state.categories);
