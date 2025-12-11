"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = "max-w-lg",
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-center items-start p-5 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 animate-fadeIn"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`my-auto relative bg-white rounded-xl w-full ${maxWidth} shadow-xl opacity-0 scale-95 animate-zoomIn`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
