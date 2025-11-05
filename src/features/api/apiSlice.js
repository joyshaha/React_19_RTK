import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:3300/api",
  baseUrl: import.meta.env.VITE_API_URL,
  // add the token to the headers
  prepareHeaders: (headers, { getState, endpoint }) => {
    // console.log(headers);
    console.log(endpoint);
    const token = getState()?.auth?.user?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    } else {
      const authUser = localStorage.getItem("authUser");
      if (authUser) {
        headers.set("Authorization", `Bearer ${authUser.token}`);
      }
    }
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
    // if (result.error?.status === 401) {
    //   api.dispatch(logOut());
    //   localStorage.removeItem("authUser");
    // }
    return result;
  },
  tagTypes: ["Podcasts", "Podcast"],
  endpoints: (builder) => ({
    getPodcasts: builder.query({
      query: () => "/podcasts",
      keepUnusedDataFor: 60,
      providesTags: ["Podcasts"],
    }),
    getPodcast: builder.query({
      query: (id) => `/podcasts/${id}`,
      providesTags: (result, error, arg) => [{ type: "Podcast", id: arg }],
    }),
    addPodcast: builder.mutation({
      query: (podcast) => ({
        url: "/podcasts",
        method: "POST",
        body: podcast,
      }),
      invalidatesTags: ["Podcasts"],
    }),
    updatePodcast: builder.mutation({
      query: ({ id, podcast }) => ({
        url: `/podcasts/${id}`,
        method: "PUT",
        body: podcast,
      }),
      invalidatesTags: (result, error, arg) => [
        "Podcasts",
        { type: "Podcast", id: arg.id },
      ],
    }),
    deletePodcast: builder.mutation({
      query: (id) => ({
        url: `/podcasts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [{ type: "Podcasts" }],
    }),
  }),
});

export const {
  useGetPodcastsQuery,
  useGetPodcastQuery,
  useAddPodcastMutation,
  useUpdatePodcastMutation,
  useDeletePodcastMutation,
} = apiSlice;
