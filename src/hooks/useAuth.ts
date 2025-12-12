"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { sendOtp, verifyOtp, createProfile } from "@/store/auth/authThunks";
import { logout } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, user, isLoggedIn, accessToken, refreshToken, error } =
    useAppSelector((state) => state.auth);

  // Send OTP
  const handleSendOtp = useCallback(
    async (phone: string) => {
      const form = new FormData();
      form.append("mobile", phone);

      const res: any = await dispatch(sendOtp(form));

      if (res.meta.requestStatus === "fulfilled") {
        console.log(res.payload);

        if (!res.payload?.success) {
          toast.error(res.payload?.message || "Invalid phone number");
          return;
        }

        toast.success(res.payload?.message || "OTP sent successfully");
        sessionStorage.setItem("phone", phone);
        router.push("/otp");
      } else {
        toast.error("Failed to send OTP");
      }
    },
    [dispatch, router]
  );

  // Verify OTP
  const handleVerifyOtp = useCallback(
    async (otp: string, phone: string) => {
      const form = new FormData();
      form.append("otp", otp);
      form.append("mobile", phone);

      const res: any = await dispatch(verifyOtp(form));

      if (res.meta.requestStatus === "fulfilled") {
        if (!res.payload?.success) {
          toast.error(res.payload?.message || "Invalid OTP");
          return;
        }

        toast.success(res.payload?.message || "OTP verified successfully");

        if (res.payload?.login === true) {
          router.push("/");
        } else {
          router.push("/details");
        }
      } else {
        toast.error("OTP verification failed");
      }
    },
    [dispatch, router]
  );

  // Create Profile
  const handleCreateProfile = useCallback(
    async (profileData: Record<string, any>) => {
      const form = new FormData();
      Object.entries(profileData).forEach(([key, value]) =>
        form.append(key, value as any)
      );

      const res: any = await dispatch(createProfile(form));

      if (res.meta.requestStatus === "fulfilled") {
        if (!res.payload?.success) {
          toast.error(res.payload?.message || "Unable to create profile");
          return;
        }

        toast.success(res.payload?.message || "Profile created successfully");
        router.push("/");
      } else {
        toast.error("Profile creation failed");
      }
    },
    [dispatch, router]
  );

  // Logout
  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.push("/login");
  }, [dispatch, router]);

  return {
    loading,
    user,
    isLoggedIn,
    accessToken,
    refreshToken,
    error,
    handleSendOtp,
    handleVerifyOtp,
    handleCreateProfile,
    handleLogout,
  };
}
