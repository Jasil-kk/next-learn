"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const counts = [
    { label: "Total MCQ’s:", count: "100" },
    { label: "Total marks:", count: "100" },
    { label: "Total time:", count: "90:00" },
  ];

  const instructions = [
    "You have 100 minutes to complete the test.",
    "Test consists of 100 multiple-choice q’s.",
    "You are allowed 2 retest attempts if you do not pass on the first try.",
    "Each incorrect answer will incur a negative mark of -1/4.",
    "Ensure you are in a quiet environment and have a stable internet connection.",
    "Keep an eye on the timer, and try to answer all questions within the given time.",
    "Do not use any external resources such as dictionaries, websites, or assistance.",
    "Complete the test honestly to accurately assess your proficiency level.",
    "Check answers before submitting.",
    "Your test results will be displayed immediately after submission, indicating whether you have passed or need to retake the test.",
  ];
  return (
    <div className="w-full max-w-[700px] p-5 pb-20 mx-auto">
      <h3 className="font-medium text-xl sm:text-2xl text-center">
        Ancient Indian History MCQ
      </h3>
      <div className="mt-5 w-full bg-[#1C3141] text-white grid grid-cols-1 sm:grid-cols-3 p-5 rounded-lg">
        {counts?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center py-2.5 sm:py-0 ${
              index !== counts.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-white"
                : ""
            }`}
          >
            <h4 className="font-semibold text-sm sm:text-base">{item.label}</h4>
            <h2 className="mt-2 font-normal text-3xl sm:text-4xl">
              {item.count}
            </h2>
          </div>
        ))}
      </div>

      <h5 className="mt-5 font-semibold text-[#5C5C5C] text-sm sm:text-base">
        Instructions:
      </h5>
      <ul className="mt-3 text-[#5C5C5C] font-normal text-sm sm:text-base list-decimal pl-5 space-y-2">
        {instructions?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Button
        variant="primary"
        fullWidth
        className="max-w-[360px] mt-10 mx-auto"
        onClick={() => router.push("/mcq")}
      >
        Start Test
      </Button>
    </div>
  );
}
