import Image from "next/image";
import Button from "./ui/Button";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-[90px] bg-white border-b border-[#E9EBEC] flex items-center sm:justify-center px-5">
      <Image src={"/images/svg/logo.svg"} alt="Logo" width={191} height={59} />

      <Button
        variant="primary"
        className="absolute right-5 bg-[#177A9C] sm:min-w-[100px] rounded-md text-sm"
      >
        Logout
      </Button>
    </div>
  );
}
