import { createAsyncThunk } from "@reduxjs/toolkit";
import { McqService } from "@/services/mcq.service";

export const getQuestions = createAsyncThunk(
  "mcq/getQuestions",
  async (_, thunkAPI) => {
    try {
      const res = await McqService.getQuestions();
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);
