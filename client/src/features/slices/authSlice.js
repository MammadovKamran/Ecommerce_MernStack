/** @format */

const { createEntityAdapter, createSlice } = require("@reduxjs/toolkit");
const { authApi } = require("../services/authApi");

const authAdapter = createEntityAdapter({
  selectId: (auth) => auth._id,
  sortComparer: (a, b) => a.name.localCompare(b.name),
});

const initialState = authAdapter.getInitialState({
  // accessToken: localStorage.getItem("accessToken") || null,
  // refreshToken: localStorage.getItem("refreshToken") || null,
  user: null,
  status: "idle",
  error: null,
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logOut: (state) => {
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   state.user = null;
    //   // localStorage.removeItem("accessToken");
    //   // localStorage.removeItem("refreshToken");
    // },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state) => {
        state.status = "loading";
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.status = "succeeded";
        // state.accessToken = payload.accessToken;
        // state.refreshToken = payload.refreshToken;
        // state.user = payload.user;
        // localStorage.setItem("accessToken", payload.accessToken);
        // localStorage.setItem("refreshToken", payload.refreshToken);
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      })
      .addMatcher(authApi.endpoints.register.matchPending, (state) => {
        state.status = "loading";
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state) => {
        state.status = "succeeded";
      })
      .addMatcher(authApi.endpoints.register.matchRejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
