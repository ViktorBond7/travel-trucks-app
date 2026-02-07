import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "", // тип кузова: 'panelTruck', 'fullyIntegrated', 'alcove'
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  transmission: false,
};

const filtersSlice = createSlice({
  name: "campers/filter",
  initialState,
  reducers: {
    // Оновлює весь об'єкт фільтрів одним махом
    setAllFilters(state, action) {
      Object.assign(state, action.payload);
    },
    resetFilters: () => initialState,
  },
});

export const { setAllFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

// Селектори для використання в компонентах
export const selectFilters = (state) => state.filters;
export const selectLocation = (state) => state.filters.location;
export const selectFeatures = (state) => state.filters.features;
export const selectVehicleType = (state) => state.filters.form;
