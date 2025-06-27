"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getUserInfo } from "@/apis/login/getUserInfo";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

export default function useAuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const { setUser, clearUser } = useUserInfoStore();

  useEffect(() => {
    // 로그인 또는 닉네임 설정 페이지에서는 인증 체크 하지 않음
    const isPublicRoute = pathname === "/login" || pathname === "/login/set-nickname";

    if (isPublicRoute) {
      return;
    }

    const checkLogin = async () => {
      try {
        const checkLogin = await getUserInfo();
        setUser(checkLogin);
      } catch {
        clearUser();
        router.replace("/login");
      }
    };

    checkLogin();
  }, [pathname]);
}
