import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth,
  loading,
  className,
  ...props
}: ButtonProps) {
  const base =
    "px-4 py-2.5 rounded-[10px] text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-[#1C3141] text-white hover:bg-[#163a53]",
    secondary: "bg-[#CECECE] text-gray-800 hover:bg-[#bdbbbb]",
    outline: "border border-[#1C3141] text-[#1C3141] hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        fullWidth && "w-full",
        loading && "opacity-70 cursor-not-allowed",
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
