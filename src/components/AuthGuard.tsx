"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const isLoginPage = location.pathname === "/login";

    if (!token && !isLoginPage) {
      router.replace("/login");
    } else if (token && isLoginPage) {
      router.replace("/"); // 로그인한 사용자가 로그인 페이지 들어올 경우 홈으로
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-400 border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
