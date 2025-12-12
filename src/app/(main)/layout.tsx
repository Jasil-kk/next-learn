"use client";

import Header from "@/components/Header";
import FullPageLoader from "@/components/loaders/FullPageLoader";
import { useMcq } from "@/hooks/useMcq";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { fetchQuestions, loading: mcqLoading } = useMcq();

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");

    if (!token || token === "undefined" || token.trim() === "") {
      router.replace("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (!loading) {
      fetchQuestions();
    }
  }, [loading, fetchQuestions]);

  if (loading || mcqLoading) {
    return <FullPageLoader />;
  }

  return (
    <>
      <Header />
      <main className="w-full pt-[90px] min-h-screen bg-[#F4FCFF]">
        {children}
      </main>
    </>
  );
}
