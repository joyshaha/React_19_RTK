import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:3300/api",
  baseUrl: import.meta.env.VITE_API_URL,
  // add the token to the headers
  prepareHeaders: async (headers, { getState, endpoint }) => {
    // console.log(headers);
    // console.log(getState().auth.token);
    console.log(endpoint);
    const token = await getState()?.auth?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    console.log(headers.get("Authorization"));
    return headers;
  },
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    console.log(result);
    if (result.error?.status === 401) {
      api.dispatch(logOut());
      localStorage.removeItem("authUser");
      // localStorage.clear();
    }
    return result;
  },
  tagTypes: [],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});