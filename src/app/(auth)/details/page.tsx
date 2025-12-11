"use client";

import FilePicker from "@/components/FilePicker";
import Button from "@/components/ui/Button";
import FloatingInput from "@/components/ui/FloatingInput";
import { useState } from "react";

export default function DetailsPage() {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full h-full text-[#1C3141] p-5 sm:p-6 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl">Add Your Details</h1>

      <div className="w-full mt-5 mb-10 flex flex-col gap-5">
        <div className="mx-auto">
          <FilePicker />
        </div>
        <FloatingInput
          label="Name"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required={true}
        />

        <FloatingInput
          label="Email"
          type="email"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required={true}
        />

        <FloatingInput
          label="Your qualification"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required={true}
        />
      </div>

      <Button variant="primary" fullWidth className="mt-auto">
        Get Started
      </Button>
    </div>
  );
}
