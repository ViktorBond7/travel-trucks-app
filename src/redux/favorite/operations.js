import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCamperByIdIds = createAsyncThunk(
  "campers/fetchCamperByIdIds",
  async (ids, thunkAPI) => {
    try {
      const res = await Promise.all(
        ids.map((id) => axios.get(`/campers/${id}`)),
      );
      console.log(
        "res.map((r) => r.data)",
        res.map((r) => r.data),
      );

      return res.map((r) => r.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
