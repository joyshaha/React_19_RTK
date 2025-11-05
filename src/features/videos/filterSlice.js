import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            // state.tags = action.payload;
            state.tags.push(action.payload);

        },
        tagRemoved: (state, action) => {
            // state.tags = state.tags.filter(tag => tag !== action.payload);
            const index = state.tags.indexOf(action.payload);
            if (index !== -1) {
                state.tags.splice(index, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
export default filterSlice.reducer;