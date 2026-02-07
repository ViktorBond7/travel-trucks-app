import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, limit = 4, params = {} }, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          page,
          limit,
          ...params,
        },
      });

      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return {
          items: [],
          total: 0,
        };
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
