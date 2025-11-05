import { apiSlice } from '../api/apiSlice';

const podcastApi = apiSlice.injectEndpoints({
  endpoints: () => ({
    // endpoint to fetch podcasts
  }),
});

export const { useGetPodcastsQuery } = podcastApi;