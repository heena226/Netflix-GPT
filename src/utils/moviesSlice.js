import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        removeMovies: (state, action) => {
            state.nowPlayingMovies = null;
        },
    },
});

export const {addMovies, addTrailerVideo, removeMovies} = moviesSlice.actions;
export default moviesSlice.reducer;

