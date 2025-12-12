import { axiosInstance } from "@/lib/axios";
import { API } from "@/lib/endpoints";

export const McqService = {
  getQuestions() {
    return axiosInstance.get(API.QUESTIONS);
  },

 submitAnswer(formData: FormData) {
    return axiosInstance.post(API.SUBMIT_ANSWER, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
