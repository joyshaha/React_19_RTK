import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// initial state
const initialState = {
    loading: false,
    posts: [],
    error: "",
};

// create async thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const response = await fetch(import.meta.env.VITE_API_URL + "/posts");
    const posts = await response.json();
    return posts;
});

const postSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];
        });
    },
});

// export actions
export const { setPosts } = postSlice.actions;
// export reducer
export default postSlice.reducer;
