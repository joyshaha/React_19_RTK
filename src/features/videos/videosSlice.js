import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create async thunk
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    const response = await getVideos(tags, search);
    return response.data;
  }
);
// export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/videos');
//     const videos = await response.json();
//     return videos;
// });

const videosSlice = createSlice({
  name: "videos",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.videos = [];
      });
  },
});

export default videosSlice.reducer;
