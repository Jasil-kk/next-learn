"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { useState } from "react";
import LogoutConfirmation from "./LogoutConfirmation";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { handleLogout } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full h-[90px] bg-white border-b border-[#E9EBEC] flex items-center sm:justify-center px-5">
      <Image src={"/images/svg/logo.svg"} alt="Logo" width={191} height={59} />

      <Button
        onClick={() => setShowConfirm(true)}
        variant="primary"
        className="absolute right-5 bg-[#177A9C] sm:min-w-[100px] rounded-md text-sm"
      >
        Logout
      </Button>

      <LogoutConfirmation
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onSubmit={handleLogout}
      />
    </div>
  );
}
