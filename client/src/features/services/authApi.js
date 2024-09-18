/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authApi = createApi({
  reducerPath: "authPath",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.70:5000/api/auth" }),
  //   prepareHeaders: (headers, { getState }) => {
  //     const state = getState();
  //     const token = state.auth.accessToken;

  //     if (token) {
  //       headers.set('Authorization', `Bearer ${token}`);
  //     }

  //     return headers;
  //   },
  // }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    // getUserInfo: builder.query({
    //   query: () => "/user/info",
    // }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
