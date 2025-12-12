interface QNSheetProps {
  questions: {
    question_id: number;
    number: number;
    question: string;
    comprehension?: string;
    options: { id: number; option: string; is_correct: boolean }[];
  }[];
  answers: Record<number, number>;
  markedForReview: Record<number, boolean>;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function QNSheet({
  questions,
  answers,
  markedForReview,
  currentIndex,
  setCurrentIndex,
}: QNSheetProps) {
  const renderCardStyle = (questionId: number) => {
    const answered = answers[questionId];
    const review = markedForReview[questionId];

    if (answered && review) {
      return "bg-[#4CAF50] text-white border-8 border-[#800080]";
    } else if (answered) {
      return "bg-[#4CAF50] text-white";
    } else if (review) {
      return "bg-[#800080] text-white";
    } else {
      return "bg-[#EE3535] text-white";
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="w-full mb-5 grid grid-cols-5 sm:grid-cols-10 gap-2">
        {questions.map((q, i) => {
          const cardStyle = renderCardStyle(q.question_id);

          return (
            <div
              key={q.question_id}
              onClick={() => setCurrentIndex(i)}
              className={`w-full aspect-square rounded-md grid place-items-center font-medium text-base sm:text-lg cursor-pointer ${cardStyle} ${
                currentIndex === i ? "ring-2 ring-[#1C3141]" : ""
              }`}
            >
              {q.number}
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex items-center gap-5 gap-y-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#4CAF50] border border-[#CECECE] rounded-sm"></div>
          <p className="font-medium text-sm">Attended</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#EE3535] border border-[#CECECE] rounded-sm"></div>
          <p className="font-medium text-sm">Not Attended</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#800080] border border-[#CECECE] rounded-sm"></div>
          <p className="font-medium text-sm">Marked For Review</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#4CAF50] border-4 border-[#800080] rounded-sm"></div>
          <p className="font-medium text-sm">Answered and Marked For Review</p>
        </div>
      </div>
    </div>
  );
}
