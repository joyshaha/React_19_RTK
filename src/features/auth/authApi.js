import { apiSlice } from "../api/apiSlice";
import { logIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoint to register
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          // save the user to localStorage
          localStorage.setItem(
            "authUser",
            JSON.stringify({ token: data.token, username: data.username })
          );
          // dispatch the logIn action with the data
          dispatch(logIn({ token: data.token, username: data.username }));
        } catch (error) {
          // do nothing
          console.error("Registration failed:", error);
        }
      },
    }),
    // endpoint to login
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          // save the user to localStorage
          localStorage.setItem(
            "authUser",
            JSON.stringify({ token: data.token, username: data.username })
          );
          // dispatch the logIn action with the data
          dispatch(logIn({ token: data.token, username: data.username }));
        } catch (error) {
          console.error("Login failed:", error);
          window.location.href = "/signin";
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
