"use client";

export default function FullPageLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
