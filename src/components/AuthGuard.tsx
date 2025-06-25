"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    const isLoginPage = location.pathname === "/login";

    if (!token && !isLoginPage) {
      router.replace("/login");
    }

    if (token && isLoginPage) {
      router.replace("/"); // 로그인한 사용자가 로그인 페이지 들어올 경우 홈으로
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
