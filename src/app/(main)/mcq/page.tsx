"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import QNSheet from "./components/QNSheet";
import ComprehensiveModal from "./components/ComprehensiveModal";
import SubmitModal from "./components/SubmitModal";
import { useMcq } from "@/hooks/useMcq";
import { useEffect, useRef, useState } from "react";

export default function Mcq() {
  const {
    questions,
    questions_count,
    total_time,
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
  } = useMcq();

  const [remainingTime, setRemainingTime] = useState(total_time * 60);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!total_time) return;

    intervalRef.current = window.setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total_time, handleSubmitExam]);
  if (!questions || questions.length === 0) {
    return <p className="text-center mt-10">Loading questions...</p>;
  }

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.question_id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setOpenSubmit(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.question_id]: true,
    }));
    handleNext();
  };

  const questionsAnswered = Object.keys(answers).length;

  const markedForReviewCount =
    Object.values(markedForReview).filter(Boolean).length;

  const formattedTime = `${Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0")}:${(remainingTime % 60).toString().padStart(2, "0")}`;

  return (
    <div className="w-full p-5 pb-20 grid grid-cols-1 gap-y-10 lg:grid-cols-2 xl:grid-cols-[3fr_2fr]">
      <div className="w-full lg:pr-5">
        <div className="w-full flex items-center justify-between gap-2 flex-wrap">
          <h3 className="font-medium text-base sm:text-lg">
            Ancient Indian History MCQ
          </h3>
          <div className="text-sm sm:text-base font-medium bg-white shadow rounded-sm w-fit py-1 px-2">
            {currentQuestion.number}/{questions_count || questions.length}
          </div>
        </div>

        <div className="mt-2.5 w-full shadow p-4 rounded-lg bg-white">
          {currentQuestion.comprehension && (
            <button
              onClick={() => setOpenComprehension(true)}
              className="bg-[#177A9C] hover:bg-[#0e6c8b] transition-all text-white font-medium text-sm flex items-center gap-2.5 w-fit rounded-md py-2 px-3"
            >
              <Image
                src={"/images/svg/para-icon.svg"}
                alt="Polygon"
                width={16}
                height={13}
                className="hidden min-[370px]:block"
              />
              <p>Read Comprehensive Paragraph</p>
              <Image
                src={"/images/svg/polygon-right.svg"}
                alt="Polygon"
                width={6}
                height={5}
                className="hidden min-[370px]:block"
              />
            </button>
          )}

          <div className="mt-5 font-medium text-base sm:text-lg flex items-start gap-1.5">
            <p>{currentQuestion.number}.</p>
            <p>{currentQuestion.question}</p>
          </div>

          {currentQuestion.image && (
            <Image
              src={currentQuestion.image}
              alt="Question Image"
              width={288}
              height={161}
              className="mt-3"
            />
          )}
        </div>

        <p className="mt-4 text-[#5C5C5C] font-medium text-sm">
          Choose the answer:
        </p>
        <ul className="mt-4 space-y-3">
          {currentQuestion.options.map(
            (option: { id: number; option: string; is_correct: boolean }) => (
              <li
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full font-medium text-base sm:text-lg bg-white border rounded-lg py-2 px-2 cursor-pointer select-none flex items-center justify-between gap-2
                ${
                  answers[currentQuestion.question_id] === option.id
                    ? "border-[#1C3141] bg-[#F0F8FF]"
                    : "border-[#CECECE]"
                }`}
              >
                {option.option}
                <input
                  type="radio"
                  name={`question-${currentQuestion.question_id}`}
                  checked={answers[currentQuestion.question_id] === option.id}
                  onChange={() => handleSelectOption(option.id)}
                  className="w-4 h-4 accent-[#1C3141]"
                />
              </li>
            )
          )}
        </ul>

        <div className="mt-5 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            fullWidth
            className="bg-[#800080] hover:bg-[#a503a5] rounded-md font-normal"
            onClick={handleMarkForReview}
          >
            Mark for review
          </Button>
          <Button
            variant="secondary"
            fullWidth
            className="rounded-md font-normal"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </Button>
          <Button
            fullWidth
            className="rounded-md font-normal"
            onClick={handleNext}
          >
            {currentIndex === questions.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>

      <div className="w-full lg:border-l border-[#E9EBEC] lg:pl-5 flex flex-col">
        <div className="w-full flex items-center justify-between gap-2 flex-wrap">
          <p className="font-medium text-sm sm:text-base">
            Question No. Sheet:
          </p>
          <div className="ml-auto flex items-center gap-1.5">
            <p className="font-medium text-sm sm:text-base">Remaining Time:</p>
            <div className="bg-[#1C3141] min-w-[100px] w-fit rounded-md px-3 py-0.5 text-white font-semibold text-base sm:text-lg flex items-center gap-2">
              <Image
                src={"/images/svg/timer.svg"}
                alt="Timer"
                width={12}
                height={14}
              />
              {/* 87:13 */}
              {formattedTime}
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-2.5">
          <QNSheet
            questions={questions}
            answers={answers}
            markedForReview={markedForReview}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>

      <ComprehensiveModal
        open={openComprehension}
        onClose={() => setOpenComprehension(false)}
        text={currentQuestion.comprehension || ""}
      />

      <SubmitModal
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        totalQuestions={questions_count}
        questionsAnswered={questionsAnswered}
        markedForReview={markedForReviewCount}
        remainingTime={formattedTime}
        onSubmit={handleSubmitExam}
      />

      {buttonLoading && (
        <div className="fixed inset-0 z-9999 w-full h-screen bg-black/40 backdrop-blur-sm grid place-items-center">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
