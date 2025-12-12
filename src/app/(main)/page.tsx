"use client";

import Button from "@/components/ui/Button";
import { useMcq } from "@/hooks/useMcq";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const { instruction, questions_count, total_marks, total_time } = useMcq();

  const counts = [
    { label: "Total MCQ’s:", count: questions_count },
    { label: "Total marks:", count: total_marks },
    { label: "Total time:", count: `${total_time}:00` },
  ];

  const instructionsList = useMemo(() => {
    if (!instruction) return [];
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(instruction, "text/html");
      return Array.from(doc.querySelectorAll("li")).map(
        (li) => li.textContent || ""
      );
    } catch (err) {
      console.error("Failed to parse instructions:", err);
      return [];
    }
  }, [instruction]);

  return (
    <>
      <Head>
        <title>MCQ Home – Ancient Indian History</title>
        <meta
          name="description"
          content="Start your Ancient Indian History MCQ test. View instructions, total questions, marks, and total time before beginning the test."
        />
      </Head>
      <div className="w-full max-w-[700px] p-5 pb-20 mx-auto">
        <h3 className="font-medium text-xl sm:text-2xl text-center">
          Ancient Indian History MCQ
        </h3>

        <div className="mt-5 w-full bg-[#1C3141] text-white grid grid-cols-1 sm:grid-cols-3 p-5 rounded-lg">
          {counts.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-2.5 sm:py-0 ${
                index !== counts.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-white"
                  : ""
              }`}
            >
              <h4 className="font-semibold text-sm sm:text-base">
                {item.label}
              </h4>
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
          {instructionsList.map((item, index) => (
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
    </>
  );
}
