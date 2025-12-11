"use client";

import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SubmitModal({ open, onClose }: ModalProps) {
  const results = [
    {
      icon: "/images/svg/timer.svg",
      iconBoxClassName: "bg-[#1C3141]",
      label: "Remaining Time:",
      value: "87:13",
    },
    {
      icon: "/images/svg/box-question.svg",
      iconBoxClassName: "bg-[#DDA428]",
      label: "Total Questions:",
      value: "100",
    },
    {
      icon: "/images/svg/box-question.svg",
      iconBoxClassName: "bg-[#4CAF50]",
      label: "Questions Answered:",
      value: "003",
    },
    {
      icon: "/images/svg/box-question.svg",
      iconBoxClassName: "bg-[#800080]",
      label: "Marked for review:",
      value: "001",
    },
  ];
  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-[393px]">
      <div className="w-full p-5">
        <div className="w-full border-b border-[#CECECE] pb-3 flex items-center justify-between gap-2">
          <h5 className="text-base font-medium">
            Are you sure you want to submit the test?
          </h5>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-200 rounded transition-all"
          >
            <Image
              src={"/images/svg/cross-icon.svg"}
              alt="Cross"
              width={10}
              height={10}
className="min-w-2.5"
            />
          </button>
        </div>

        {results?.map((item, index) => (
          <div key={index} className="mt-5 flex items-center gap-3">
            <div
              className={`rounded-sm w-8 h-8 grid place-items-center ${item.iconBoxClassName}`}
            >
              <Image src={item.icon} alt="Icon" width={13} height={13} />
            </div>
            <p className="text-base sm:text-lg font-normal">{item.label}</p>
            <p className="ml-auto text-base sm:text-lg font-bold">
              {item.value}
            </p>
          </div>
        ))}
        <Button onClick={onClose} fullWidth className="mt-5">
          Submit Test
        </Button>
      </div>
    </Modal>
  );
}
