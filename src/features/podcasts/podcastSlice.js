import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  podcasts: [],
  isLoading: false,
  isError: false,
  error: '',
};

const podcastSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setPodcasts: (state, action) => {
      state.podcasts = action.payload;
    },
  },
});

// export actions
export const { setPodcasts } = podcastSlice.actions;
export default podcastSlice.reducer;