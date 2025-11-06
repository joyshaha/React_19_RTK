import { apiSlice } from "../api/apiSlice";

const podcastApi = apiSlice.injectEndpoints({
  name: "podcasts",
  reducerPath: "podcasts",
  tagTypes: ["Podcasts", "Podcast"],
  endpoints: (builder) => ({
    // endpoint to fetch podcasts
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
} = podcastApi;
