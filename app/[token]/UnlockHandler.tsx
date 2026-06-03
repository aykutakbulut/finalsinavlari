"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/useQuizStore";

export default function UnlockHandler({ valid }: { valid: boolean }) {
  const setUnlocked = useQuizStore((s) => s.setUnlocked);
  const router = useRouter();

  useEffect(() => {
    if (valid) setUnlocked(true);
    router.replace("/");
  }, [valid, setUnlocked, router]);

  return (
    <div className="h-[100dvh] w-full flex items-center justify-center bg-[#050505]">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin" />
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
      </div>
    </div>
  );
}
