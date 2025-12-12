"use client";

import Image from "next/image";
import { useRef } from "react";

interface FilePickerProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
  label?: string;
}

export default function FilePicker({
  value,
  onChange,
  label = "Add Your Profile picture",
}: FilePickerProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
  };

  return (
    <div
      className="relative w-[132px] h-[127px] border border-dashed border-[#CECECE] rounded-lg flex flex-col items-center justify-center gap-2 p-1 overflow-hidden cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      {value ? (
        <>
          <Image
            src={URL.createObjectURL(value)}
            alt="Preview"
            fill
            className="object-cover"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange?.(null);
            }}
            className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm rounded-full p-1 shadow"
          >
            <Image
              src={"/images/svg/cross-icon.svg"}
              alt="Cross"
              width={10}
              height={10}
            />
          </button>
        </>
      ) : (
        <>
          <Image
            src="/images/svg/camera.svg"
            alt="Icon"
            width={24}
            height={21}
          />
          <p className="text-[10px] text-[#CECECE] font-medium text-center">
            {label}
          </p>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
