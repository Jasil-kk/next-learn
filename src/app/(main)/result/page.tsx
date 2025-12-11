import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Result() {
  const results = [
    {
      icon: "/images/svg/box-question.svg",
      iconBoxClassName: "bg-[#DDA428]",
      label: "Total Questions:",
      value: "100",
    },
    {
      icon: "/images/svg/box-tick.svg",
      iconBoxClassName: "bg-[#4CAF50]",
      label: "Correct Answers:",
      value: "003",
    },
    {
      icon: "/images/svg/box-cross.svg",
      iconBoxClassName: "bg-[#EE3535]",
      label: "Incorrect Answers:",
      value: "001",
    },
    {
      icon: "/images/svg/box-question.svg",
      iconBoxClassName: "bg-[#5C5C5C]",
      label: "Not Attended Questions:",
      value: "096",
    },
  ];
  return (
    <div className="w-full max-w-[460px] p-5 pb-20 mx-auto">
      <div
        style={{
          background:
            "linear-gradient(307.95deg, #1C3141 2.54%, #177A9C 79.7%)",
        }}
        className="rounded-2xl p-5 w-full text-white flex flex-col items-center justify-center"
      >
        <p className="font-medium text-base sm:text-lg">Marks Obtained:</p>
        <h2 className="mt-2 font-medium text-4xl sm:text-5xl">100 / 100</h2>
      </div>
      {results?.map((item, index) => (
        <div key={index} className="mt-4 flex items-center gap-3">
          <div
            className={`rounded-sm w-9 h-9 grid place-items-center ${item.iconBoxClassName}`}
          >
            <Image src={item.icon} alt="Icon" width={13} height={13} />
          </div>
          <p className="text-base sm:text-lg font-normal">{item.label}</p>
          <p className="ml-auto text-base sm:text-lg font-bold">{item.value}</p>
        </div>
      ))}
      <Button variant="primary" fullWidth className="mt-5">
        Done
      </Button>
    </div>
  );
}
