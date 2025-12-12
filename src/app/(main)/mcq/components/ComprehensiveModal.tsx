"use client";

import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  text: string;
}

export default function ComprehensiveModal({
  open,
  onClose,
  text,
}: ModalProps) {
  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-[1200px]">
      <div className="w-full p-5">
        <div className="w-full border-b border-[#CECECE] pb-3">
          <h5 className="text-base font-medium">Comprehensive Paragraph</h5>
        </div>
        <p className="mt-6 font-medium text-base sm:text-lg">{text}</p>
        <Button
          onClick={onClose}
          fullWidth
          className="ml-auto mt-5 max-w-[350px]"
        >
          Minimize
        </Button>
      </div>
    </Modal>
  );
}
