import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "@/types/auth";
import { sendOtp, verifyOtp, createProfile } from "./authThunks";

const initialState: AuthState = {
  loading: false,
  user: null,
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      sessionStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder

      // Send otp
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Verify otp
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.login) {
          state.isLoggedIn = true;
          state.accessToken = action.payload.access_token;
          state.refreshToken = action.payload.refresh_token;
        }
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create profile
      .addCase(createProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
