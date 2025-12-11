import Image from "next/image";

export default function FilePicker() {
  return (
    <div className="w-[132px] h-[127px] border border-dashed border-[#CECECE] rounded-lg flex flex-col items-center justify-center gap-2 p-1 relative overflow-hidden">
      <Image src={"/images/svg/camera.svg"} alt="Icon" width={24} height={21} />
      <p className="text-[10px] text-[#CECECE] font-medium text-center">
        Add Your Profile picture
      </p>
      <input type="file" id="file-picker" hidden />
      <label
        htmlFor="file-picker"
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
      ></label>
    </div>
  );
}
