"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/apis/utils/axiosInstance";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [checked, setChecked] = useState(false); // 로그인 체크 완료 여부

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosInstance.get("/users/auth/me"); // 서버가 쿠키로 인증 확인
        if (location.pathname === "/login" || location.pathname === "/set-nickname") {
          router.replace("/"); // 이미 로그인 중이면 메인으로
        }
      } catch (err) {
        router.replace("/login"); // 로그인 안 되어 있으면 로그인 페이지로
      } finally {
        setChecked(true);
      }
    };

    checkAuth();
  }, []);

  if (!checked) return null;

  return <>{children}</>;
};
export default AuthGuard;
