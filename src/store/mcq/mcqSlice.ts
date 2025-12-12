import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "./mcqThunks";

interface McqState {
  loading: boolean;
  questions_count: number;
  total_marks: number;
  total_time: number;
  time_for_each_question: number;
  mark_per_each_answer: number;
  instruction: string;
  questions: any[];
  error: string | null;
}

const initialState: McqState = {
  loading: false,
  questions_count: 0,
  total_marks: 0,
  total_time: 0,
  time_for_each_question: 0,
  mark_per_each_answer: 0,
  instruction: "",
  questions: [],
  error: null,
};

const mcqSlice = createSlice({
  name: "mcq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.loading = false;

        const data = action.payload;

        state.questions_count = data.questions_count;
        state.total_marks = data.total_marks;
        state.total_time = data.total_time;
        state.time_for_each_question = data.time_for_each_question;
        state.mark_per_each_answer = data.mark_per_each_answer;
        state.instruction = data.instruction;
        state.questions = data.questions || [];
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load questions";
      });
  },
});

export default mcqSlice.reducer;
