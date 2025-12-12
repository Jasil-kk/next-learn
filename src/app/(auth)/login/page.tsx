"use client";

import Button from "@/components/ui/Button";
import FloatingInput from "@/components/ui/FloatingInput";
import { useAuth } from "@/hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

export default function LoginPage() {
  const { handleSendOtp, loading } = useAuth();

  const schema = Yup.object({
    phone: Yup.string()
      .matches(/^\+?[0-9]{6,15}$/, "Enter a valid phone number")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: { phone: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (!values.phone) {
        toast.error("Please enter your phone number");
        return;
      }

      try {
        await handleSendOtp(values.phone);
      } catch (err: any) {
        toast.error(err?.message || "Something went wrong");
      }
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/[^0-9+]/g, "");

    if (value.includes("+")) {
      value = "+" + value.replace(/\+/g, "").replace(/[^0-9]/g, "");
    }

    formik.setFieldValue("phone", value);
  };

  return (
    <div className="w-full h-full text-[#1C3141] p-5 sm:p-6 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl">
        Enter your phone number
      </h1>

      <p className="mt-3 text-sm sm:text-base font-normal">
        We use your mobile number to identify your account
      </p>

      <form onSubmit={formik.handleSubmit} className="w-full mt-5">
        <FloatingInput
          label="Phone number"
          type="text"
          value={formik.values.phone}
          onChange={handlePhoneChange}
          error={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""
          }
          disabled={loading}
        />

        <p className="mt-3 mb-12 text-[#5C5C5C] text-xs font-normal">
          By tapping Get started, you agree to the{" "}
          <span className="text-[#1C3141] cursor-pointer select-none">
            Terms & Conditions
          </span>
        </p>

        <Button
          variant="primary"
          fullWidth
          className="mt-auto"
          disabled={loading}
          type="submit"
        >
          {loading ? "Sending..." : "Get Started"}
        </Button>
      </form>
    </div>
  );
}
