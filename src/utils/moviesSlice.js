// to put all the movies data inside this slice

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    // jo bhi now playing movies aarhi hai as an array, usko daal denge redux store me 
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },

    addTrendingTVShows: (state, action) => {
      state.trendingTVShows = action.payload;
    },

    // dynamically trailer video ki keys nikalne ke liye humne redux store me trailer ko bhi add kr diya
    addTrailerVideo : (state, action) => {
      state.trailerVideo = action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies,addTrendingMovies, addTrendingTVShows } = moviesSlice.actions;

export default moviesSlice.reducer;
