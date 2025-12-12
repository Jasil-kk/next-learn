import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/services/auth.service";

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const res = await AuthService.sendOtp(data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const res = await AuthService.verifyOtp(data);

      if (res.data.login) {
        sessionStorage.setItem("access_token", res.data.access_token);
        sessionStorage.setItem("refresh_token", res.data.refresh_token);
      }

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

export const createProfile = createAsyncThunk(
  "auth/createProfile",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const res = await AuthService.createProfile(data);

      console.log(res);
      

      sessionStorage.setItem("access_token", res.data.access_token);
      sessionStorage.setItem("refresh_token", res.data.refresh_token);

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);
