import React from "react";
import clsx from "clsx";

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FloatingInput({
  label,
  error,
  className,
  ...props
}: FloatingInputProps) {
  const hasValue = props.value || props.defaultValue;

  return (
    <div className="relative w-full">
      <input
        {...props}
        placeholder=" "
        className={clsx(
          "block w-full px-4 py-3 text-base bg-transparent border rounded-md outline-none transition-all",
          "peer border-[#CECECE] focus:border-[#1C3141]",
          error && "border-red-500",
          className
        )}
      />

      <label
        className={clsx(
          "absolute left-3 pointer-events-none transition-all duration-200 bg-white px-1 text-[#5C5C5C]",
          "peer-focus:-top-2 peer-focus:text-xs peer-focus:translate-y-0",
          hasValue
            ? "-top-2 text-xs translate-y-0"
            : "top-1/2 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
        )}
      >
        {label}
        {props.required && <span className="ml-0.5">*</span>}
      </label>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
