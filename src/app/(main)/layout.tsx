import Header from "@/components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-full pt-[90px] min-h-screen bg-[#F4FCFF]">
        {children}
      </main>
    </>
  );
}
