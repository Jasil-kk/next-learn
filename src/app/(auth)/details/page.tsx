"use client";

import FilePicker from "@/components/FilePicker";
import Button from "@/components/ui/Button";
import FloatingInput from "@/components/ui/FloatingInput";
import { useAuth } from "@/hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const { handleCreateProfile, loading } = useAuth();
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedPhone = sessionStorage.getItem("phone") || "";
    setPhone(storedPhone);
  }, []);

  const schema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    qualification: Yup.string().required("Qualification is required"),
    profile_image: Yup.mixed<File>()
      .required("Profile image is required")
      .test("fileSize", "File too large", (file) => {
        if (!file) return false;
        return file instanceof File && file.size <= 5 * 1024 * 1024;
      })
      .test("fileType", "Only PNG/JPG allowed", (file) => {
        if (!file) return false;
        return (
          file instanceof File &&
          ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
        );
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      qualification: "",
      profile_image: null as File | null,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (!values.profile_image) {
        toast.error("Please upload a profile image");
        return;
      }

      try {
        await handleCreateProfile({
          mobile: phone,
          name: values.name,
          email: values.email,
          qualification: values.qualification,
          profile_image: values.profile_image,
        });
      } catch (err: any) {
        toast.error(err?.message || "Something went wrong");
      }
    },
  });

  return (
    <div className="w-full h-full text-[#1C3141] p-5 sm:p-6 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl">Add Your Details</h1>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full mt-5 mb-10 flex flex-col gap-5"
      >
        <div className="mx-auto">
          <FilePicker
            value={formik.values.profile_image}
            onChange={(file) => formik.setFieldValue("profile_image", file)}
          />
          {formik.touched.profile_image && formik.errors.profile_image && (
            <p className="text-red-500 text-xs mt-1 text-center">
              {formik.errors.profile_image}
            </p>
          )}
        </div>

        <FloatingInput
          label="Name"
          value={formik.values.name}
          onChange={(e) => formik.setFieldValue("name", e.target.value)}
          error={
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
          }
        />

        <FloatingInput
          label="Email"
          value={formik.values.email}
          onChange={(e) => formik.setFieldValue("email", e.target.value)}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
        />

        <FloatingInput
          label="Your qualification"
          value={formik.values.qualification}
          onChange={(e) =>
            formik.setFieldValue("qualification", e.target.value)
          }
          error={
            formik.touched.qualification && formik.errors.qualification
              ? formik.errors.qualification
              : ""
          }
        />

        <Button
          fullWidth
          disabled={loading || !formik.isValid}
          className="mt-10"
          type="submit"
        >
          {loading ? "Saving..." : "Continue"}
        </Button>
      </form>
    </div>
  );
}
