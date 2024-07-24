import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        langSelected: {
            lang: "en"
        },
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        languageSelected: (state, action) => {
            state.langSelected = action.payload;
        },
        addMovieNames: (state, action) => {
            state.movieNames = action.payload;
        },
        addMovieResults: (state, action) => {
            state.movieResults = action.payload
        }
    },
});

export const { toggleGptSearchView, languageSelected, addMovieNames, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;