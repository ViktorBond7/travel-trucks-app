import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations.js";

const campersSlice = createSlice({
  name: "campers/filter",
  initialState: {
    location: "",
    equipment: {
      AC: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
    vehicleType: "", // 'van', 'fullyIntegrated' або 'alcove'
    transmission: "", // "manual", "automatic"
  },
  reducers: {
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
export const selectPage = (state) => state.campers.page;
export const selectTotal = (state) => state.campers.total;
