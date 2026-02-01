import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: [],
    camper: null,
    isLoading: false,
    error: null,
    page: 1,
    total: 0,
  },
  reducers: {
    toggleFavorite(state, { payload }) {
      state.favorites.includes(payload)
        ? (state.favorites = state.favorites.filter((fav) => fav !== payload))
        : state.favorites.push(payload);
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.total = action.payload.total;

        const newItems = action.payload.items.filter(
          (item) =>
            !state.items.some((existingItem) => existingItem.id === item.id),
        );

        state.items = [...state.items, ...newItems];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camper = action.payload;
      });
  },
});
export default campersSlice.reducer;
export const { toggleFavorite, incrementPage } = campersSlice.actions;

// =========selectors=========//

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.error;

export const selectCamper = (state) => state.campers.camper;
export const selectFavoriteIds = (state) => state.campers.favorites || [];
export const selectPage = (state) => state.campers.page;
export const selectTotal = (state) => state.campers.total;

export const selectFavoriteCampers = createSelector(
  [selectCampers, selectFavoriteIds],
  (campers, ids) => campers.filter((c) => ids.includes(c.id)),
);
