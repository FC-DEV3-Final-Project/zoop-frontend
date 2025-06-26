"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    // 쿠키에서 인증 상태 확인
    const token =
      document.cookie.includes("ACCESS_TOKEN") || document.cookie.includes("REFRESH_TOKEN");


    if (!token) {
      router.replace("/login");
    }

  }, []);

  return <>{children}</>;
};

export default AuthGuard;
