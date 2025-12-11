export default function QNSheet() {
  return (
    <div>
      <div className="w-full grid grid-cols-5 sm:grid-cols-10 gap-2">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="w-full aspect-square bg-white rounded-md border border-[#CECECE] grid place-items-center font-medium text-base sm:text-lg"
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-5 gap-y-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#4CAF50] border border-[#CECECE] rounded-sm"></div>
          <p className="font-medium text-sm">Attended</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#EE3535] border border-[#CECECE] rounded-sm"></div>
          <p className="font-medium text-sm">Not Attended</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#800080] border border-[#CECECE] rounded-sm"></div>
          <p className="font-medium text-sm">Marked For Review</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#4CAF50] border-4 border-[#800080] rounded-sm"></div>
          <p className="font-medium text-sm">Answered and Marked For Review</p>
        </div>
      </div>
    </div>
  );
}
