"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import QNSheet from "./components/QNSheet";
import { useState } from "react";
import ComprehensiveModal from "./components/ComprehensiveModal";
import SubmitModal from "./components/SubmitModal";

export default function Mcq() {
  const [open, setOpen] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);

  const options = [
    {
      label: "A. Pataliputra",
      id: 1,
    },
    {
      label: "B. Harappa",
      id: 2,
    },
    {
      label: "C.  Mohenjo-Daro",
      id: 3,
    },
    {
      label: "D. Lothal",
      id: 4,
    },
  ];
  return (
    <div className="w-full p-5 pb-20 grid grid-cols-1 gap-y-10 lg:grid-cols-2 xl:grid-cols-[3fr_2fr]">
      <div className="w-full lg:pr-5">
        <div className="w-full flex items-center justify-between gap-2 flex-wrap">
          <h3 className="font-medium text-base sm:text-lg">
            Ancient Indian History MCQ
          </h3>
          <div className="text-sm sm:text-base font-medium bg-white shadow rounded-sm w-fit py-1 px-2">
            01/100
          </div>
        </div>
        <div className="mt-2.5 w-full shadow p-4 rounded-lg bg-white">
          <button
            onClick={() => setOpen(true)}
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
          <div className="mt-5 font-medium text-base sm:text-lg flex items-start gap-1.5">
            <p>1.</p>
            <p>
              Identify the site shown in the image below, which is one of the
              major urban centers of the Indus Valley Civilization.
            </p>
          </div>

          <Image
            src={"/images/civilization.png"}
            alt="Image"
            width={288}
            height={161}
            className="mt-3"
          />
        </div>
        <p className="mt-4 text-[#5C5C5C] font-medium text-sm">
          Choose the answer:
        </p>
        <ul className="mt-4 space-y-3">
          {options?.map((item) => (
            <li
              key={item.id}
              className="w-full font-medium text-base sm:text-lg bg-white border border-[#CECECE] rounded-lg py-2 px-2 cursor-pointer select-none flex items-center justify-between gap-2"
            >
              {item.label}
              <input
                type="radio"
                name=""
                id=""
                className="w-4 h-4 accent-[#1C3141]"
              />
            </li>
          ))}
        </ul>

        <div className="mt-5 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            fullWidth
            className="bg-[#800080] hover:bg-[#a503a5] rounded-md font-normal"
          >
            Mark for review
          </Button>
          <Button
            variant="secondary"
            fullWidth
            className="rounded-md font-normal"
          >
            Pervious
          </Button>
          <Button
            onClick={() => setOpenSubmit(true)}
            fullWidth
            className="rounded-md font-normal"
          >
            Next
          </Button>
        </div>
      </div>

      <div className="w-full lg:border-l border-[#E9EBEC] lg:pl-5">
        <div className="w-full flex items-center justify-between gap-2 flex-wrap">
          <p className="font-medium text-sm sm:text-base">
            Question No. Sheet:
          </p>
          <div className="ml-auto flex items-center gap-1.5">
            <p className="font-medium text-sm sm:text-base">Remaining Time:</p>
            <div className="bg-[#1C3141] w-fit rounded-md px-3 py-0.5 text-white font-semibold text-base sm:text-lg flex items-center gap-2">
              <Image
                src={"/images/svg/timer.svg"}
                alt="Timer"
                width={12}
                height={14}
              />
              87:13
            </div>
          </div>
        </div>

        <div className="w-full mt-2.5">
          <QNSheet />
        </div>
      </div>

      <ComprehensiveModal open={open} onClose={() => setOpen(false)} />

      <SubmitModal open={openSubmit} onClose={() => setOpenSubmit(false)} />
    </div>
  );
}
