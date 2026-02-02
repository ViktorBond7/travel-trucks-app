import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    camper: null,
    isLoading: false,
    error: null,
    page: 1,
    total: 0,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    prepareForNewSearch(state) {
      state.items = []; // Очищуємо список, щоб старі машини зникли
      state.page = 1; // Скидаємо сторінку на першу для нового запиту
      state.total = 0; // Обнуляємо лічильник загальної кількості
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
export const { toggleFavorite, incrementPage, prepareForNewSearch } =
  campersSlice.actions;

// =========selectors=========//

export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.error;

export const selectCamper = (state) => state.campers.camper;
export const selectPage = (state) => state.campers.page;
export const selectTotal = (state) => state.campers.total;

const selectCampersState = (state) => state.campers;

export const selectCampers = createSelector(
  [selectCampersState],
  (campers) => campers.items,
);
