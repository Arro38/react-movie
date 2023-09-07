import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  currentMovies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.value.push(payload);
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((movie) => movie.id !== payload.id);
    },

    updateCurrentMovies: (state, { payload }) => {
      state.currentMovies = [...payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, updateCurrentMovies } = movieSlice.actions;

export default movieSlice.reducer;
