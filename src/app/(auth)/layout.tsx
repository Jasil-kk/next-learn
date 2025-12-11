import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-auto p-5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/auth/auth-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div
        style={{
          background:
            "linear-gradient(180deg, #1C3141 28.73%, #487EA7 233.43%)",
        }}
        className="w-full max-w-[866px] z-10 rounded-2xl overflow-hidden relative grid grid-cols-1 md:grid-cols-2 gap-5 p-3"
      >
        <div className="w-full flex flex-col items-center">
          <Image
            src="/images/auth/white-logo.svg"
            alt="Logo"
            width={250}
            height={83}
            className="mt-6"
          />

          <Image
            src="/images/auth/illustration.png"
            alt="Illustration"
            width={335}
            height={260}
            className="hidden md:block mt-20"
          />
        </div>

        <div className="w-full bg-white rounded-md">{children}</div>
      </div>
    </div>
  );
}
