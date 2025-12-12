import { axiosInstance } from "@/lib/axios";
import { API } from "@/lib/endpoints";

export const AuthService = {
  sendOtp(form: FormData) {
    return axiosInstance.post(API.AUTH.SEND_OTP, form);
  },

  verifyOtp(form: FormData) {
    return axiosInstance.post(API.AUTH.VERIFY_OTP, form);
  },

  createProfile(form: FormData) {
    return axiosInstance.post(API.AUTH.CREATE_PROFILE, form);
  },

  logout() {
    sessionStorage.clear();
    return axiosInstance.post(API.AUTH.LOGOUT);
  },
};
