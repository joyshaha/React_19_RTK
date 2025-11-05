import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getVideo } from './videoAPI';

const initialState = {
    video: [],
    isLoading: false,
    isError: false,
    error: '',
};

// create async thunk
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const response = await getVideo(id);
    return response;
});

// create slice
const videoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        });
        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.video = action.payload;
        });
        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.video = [];
        });
    },
});

export default videoSlice.reducer;