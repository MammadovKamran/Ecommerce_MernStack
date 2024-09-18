/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.70:5000/api" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getCategoryById: builder.query({
      query: (id) => `/category/${id}`,
    }),
    postCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/createcategory",
        method: "POST",
        body: newCategory,
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        // },
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, updatedCategory }) => ({
        url: `/updateCategory/${id}`,
        method: "PATCH",
        body: updatedCategory,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteCategory/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
