"use client";

import Button from "@/components/ui/Button";
import FloatingInput from "@/components/ui/FloatingInput";
import { useState } from "react";

export default function LoginPage() {
  const [number, setNumber] = useState("");
  return (
    <div className="w-full h-full text-[#1C3141] p-5 sm:p-6 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl">Enter your phone number</h1>
      <p className="mt-3 text-sm sm:text-base font-normal">
        We use your mobile number to identify your account
      </p>

      <div className="w-full mt-5">
        <FloatingInput
          label="Phone number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <p className="mt-3 mb-12 text-[#5C5C5C] text-xs font-normal">
        By tapping Get started, you agree to the{" "}
        <span className="text-[#1C3141] cursor-pointer select-none">
          Terms & Conditions
        </span>
      </p>

      <Button variant="primary" fullWidth className="mt-auto">
        Get Started
      </Button>
    </div>
  );
}
