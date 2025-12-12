"use client";

import Button from "@/components/ui/Button";
import FloatingInput from "@/components/ui/FloatingInput";
import { useAuth } from "@/hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function OtpPage() {
  const [phone, setPhone] = useState("");
  const { handleVerifyOtp, handleSendOtp } = useAuth();
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    const storedPhone = sessionStorage.getItem("phone") || "";
    setPhone(storedPhone);
  }, []);

  const schema = Yup.object({
    otp: Yup.string()
      .matches(/^[0-9]{6}$/, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (!values.otp) {
        toast.error("Please enter the OTP");
        return;
      }

      try {
        setVerifying(true);
        await handleVerifyOtp(values.otp, phone);
      } catch (err: any) {
        toast.error(err?.message || "Unable to verify OTP");
      } finally {
        setVerifying(false);
      }
    },
  });

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/[^0-9]/g, "");

    if (onlyDigits.length <= 6) {
      formik.setFieldValue("otp", onlyDigits);
    }
  };

  const handleResendClick = async () => {
    try {
      setResending(true);
      await handleSendOtp(phone);
    } catch (err: any) {
      console.log(err);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="w-full h-full text-[#1C3141] p-5 sm:p-6 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl">
        Enter the code we texted you
      </h1>

      <p className="mt-3 text-sm sm:text-base font-normal">
        We’ve sent an SMS to {phone || "+91 XXXXXX"}
      </p>

      <form onSubmit={formik.handleSubmit} className="w-full mt-5">
        <FloatingInput
          label="SMS code"
          type="text"
          value={formik.values.otp}
          onChange={handleOtpChange}
          error={
            formik.touched.otp && formik.errors.otp ? formik.errors.otp : ""
          }
          disabled={verifying}
        />

        <p className="mt-3 text-[#5C5C5C] text-xs font-normal">
          Your 6-digit code is on its way. It may take a few moments.
        </p>

        <p
          onClick={resending ? undefined : handleResendClick}
          className={`mt-5 mb-10 w-fit font-semibold select-none text-sm cursor-pointer underline p-1 rounded transition-all ${
            resending
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-[#1c314113]"
          }`}
        >
          {resending ? "Resending..." : "Resend code"}
        </p>

        <Button
          fullWidth
          className="mt-10"
          type="submit"
          disabled={verifying || !formik.values.otp}
        >
          {verifying ? "Verifying..." : "Continue"}
        </Button>
      </form>
    </div>
  );
}
