import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTags } from './tagsAPI';

// initial state
const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: '',
};

// create async thunk
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const response = await getTags();
    return response;
});

// create slice
const tagsSlice = createSlice({
    name: 'tags',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        });
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.tags = action.payload;
        });
        builder.addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.tags = [];
        });
    },
});

// export reducer
export default tagsSlice.reducer;