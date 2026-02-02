import { createSelector, createSlice } from "@reduxjs/toolkit";

import { fetchCamperByIdIds } from "./operations.js";

const favoritesSlice = createSlice({
  name: "campers/fetchFavorites",
  initialState: {
    favoritesIds: [],
    favoriteItems: [],

    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite(state, { payload }) {
      const id = String(payload);
      const index = state.favoritesIds.indexOf(id);

      if (index !== -1) {
        state.favoritesIds.splice(index, 1);
      } else {
        state.favoritesIds.push(id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperByIdIds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperByIdIds.fulfilled, (state, action) => {
        state.isLoading = false;

        state.favoriteItems = action.payload;
      })
      .addCase(fetchCamperByIdIds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default favoritesSlice.reducer;
export const { toggleFavorite } = favoritesSlice.actions;

// =========selectors=========//

export const selectCampersFav = (state) => state.camperFav.favoriteItems;
export const selectIsLoadingFav = (state) => state.camperFav.isLoading;
export const selectIsErrorFav = (state) => state.camperFav.error;

export const selectCampersFavIds = (state) => state.camperFav.favoritesIds;

export const selectFavoriteCampers = createSelector(
  [selectCampersFav, selectCampersFavIds],
  (campers, ids) => campers.filter((c) => ids.includes(c.id)),
);
