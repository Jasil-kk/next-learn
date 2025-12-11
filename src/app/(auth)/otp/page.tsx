"use client";

import Button from "@/components/ui/Button";
import FloatingInput from "@/components/ui/FloatingInput";
import { useState } from "react";

export default function OtpPage() {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full h-full text-[#1C3141] p-5 sm:p-6 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl">
        Enter the code we texted you
      </h1>
      <p className="mt-3 text-sm sm:text-base font-normal">
        We’ve sent an SMS to +91 1234 567891
      </p>

      <div className="w-full mt-5">
        <FloatingInput
          label="SMS code"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <p className="mt-3 text-[#5C5C5C] text-xs font-normal">
        Your 6 digit code is on its way. This can sometimes take a few moments
        to arrive.
      </p>

      <p className="mt-5 mb-10 w-fit font-semibold select-none text-sm cursor-pointer underline p-1 rounded transition-all hover:bg-[#1c314113]">
        Resend code
      </p>

      <Button variant="primary" fullWidth className="mt-auto">
        Get Started
      </Button>
    </div>
  );
}
