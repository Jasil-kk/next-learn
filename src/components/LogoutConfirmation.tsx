"use client";

import Button from "@/components/ui/Button";
import Modal from "./Modal";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function LogoutConfirmation({
  open,
  onClose,
  onSubmit,
}: ModalProps) {
  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-[393px]">
      <div className="w-full p-5 pt-10 text-center">
        <h2 className="text-xl font-bold">Logout Confirmation</h2>
        <p className="mt-2 text-base font-normal text-slate-600">
          Are you sure you want to logout?
        </p>

        <div className="mt-5 w-full flex items-center gap-3">
          <Button onClick={onClose} variant="outline" fullWidth>
            Cancel
          </Button>
          <Button onClick={onSubmit} fullWidth>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
}
