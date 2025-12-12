"use client";

import { McqService } from "@/services/mcq.service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getQuestions } from "@/store/mcq/mcqThunks";
import { setResult } from "@/store/result/resultSlice";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export function useMcq() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    loading,
    questions_count,
    total_marks,
    total_time,
    time_for_each_question,
    mark_per_each_answer,
    instruction,
    questions,
    error,
  } = useAppSelector((state) => state.mcq);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openComprehension, setOpenComprehension] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<
    Record<number, boolean>
  >({});
  const [buttonLoading, setButtonLoading] = useState(false);

  const fetchQuestions = useCallback(async () => {
    try {
      await dispatch(getQuestions());
    } catch (err) {
      console.error("Failed to fetch MCQ questions", err);
    }
  }, [dispatch]);

  const handleSubmitExam = async () => {
    setButtonLoading(true);
    try {
      const payload = questions.map((q: any) => ({
        question_id: q.question_id,
        selected_option_id: answers[q.question_id] ?? null,
      }));

      const formData = new FormData();
      formData.append("answers", JSON.stringify(payload));

      const res = await McqService.submitAnswer(formData);

      dispatch(setResult(res.data));

      toast.success("Your answers have been submitted");

      router.replace("/result");
    } catch (error: any) {
      toast.error(error?.response?.data?.detail || "Failed to submit answers");
      console.error(error);
    } finally {
      setButtonLoading(false);
    }
  };

  return {
    loading,
    questions_count,
    total_marks,
    total_time,
    time_for_each_question,
    mark_per_each_answer,
    instruction,
    questions,
    error,
    fetchQuestions,
    currentIndex,
    setCurrentIndex,
    openComprehension,
    setOpenComprehension,
    openSubmit,
    setOpenSubmit,
    answers,
    setAnswers,
    markedForReview,
    setMarkedForReview,
    handleSubmitExam,
    buttonLoading,
  };
}
