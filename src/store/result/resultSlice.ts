import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultDetail {
  question_id: number;
  selected_option_id: number | null;
  correct_option_id: number;
  is_correct: boolean | null;
  status: string;
}

export interface ExamResultState {
  success: boolean | null;
  exam_history_id: number | null;
  score: number | null;
  correct: number | null;
  wrong: number | null;
  not_attended: number | null;
  submitted_at: string | null;
  details: ResultDetail[];
}

const stored = typeof window !== "undefined"
  ? sessionStorage.getItem("exam_result")
  : null;

const initialState: ExamResultState = stored
  ? JSON.parse(stored)
  : {
      success: null,
      exam_history_id: null,
      score: null,
      correct: null,
      wrong: null,
      not_attended: null,
      submitted_at: null,
      details: [],
    };

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<Partial<ExamResultState>>) => {
      const updated = { ...state, ...action.payload };
      sessionStorage.setItem("exam_result", JSON.stringify(updated));
      return updated;
    },
    resetResult: () => {
      sessionStorage.removeItem("exam_result");
      return {
        success: null,
        exam_history_id: null,
        score: null,
        correct: null,
        wrong: null,
        not_attended: null,
        submitted_at: null,
        details: [],
      };
    },
  },
});

export const { setResult, resetResult } = resultSlice.actions;
export default resultSlice.reducer;
