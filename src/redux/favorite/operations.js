import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCamperByIdIds = createAsyncThunk(
  "campers/fetchCamperByIdIds",
  async (ids, thunkAPI) => {
    try {
      const res = await Promise.allSettled(
        ids.map((id) => axios.get(`/campers/${id}`)),
      );

      return res
        .filter((res) => res.status === "fulfilled")
        .map((v) => v.value.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
