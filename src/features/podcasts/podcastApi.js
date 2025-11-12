import { apiSlice } from "../api/apiSlice";
// import { setPodcasts } from "./podcastSlice";
// import userApi from "../user/userApi";

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
      // advance rtk query options
      // onQueryStarted is a function that is called when the query is started
      // unnderline api call and serve the puporse without calling the actual api
      // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //   // optimistic update starts here
      //   const patchResult = dispatch(apiSlice.util.updateQueryData('getPodcasts', undefined, (draft) => {
      //     draft.push(arg);
      //   })).unwrap();
      //   // optimistic update ends here
      //   try {
      //     const { data } = await queryFulfilled;
      //     dispatch(setPodcasts(data));
      //     dispatch(userApi.endpoints.getMe.initiate()).unwrap().then((res) => {
      //       console.log(res);
      //     }).catch((error) => {
      //       console.error("Error fetching me:", error);
      //     });
      //   } catch (error) {
      //     patchResult.undo();
      //     console.error("Error adding podcast:", error);
      //   }
      // },
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
