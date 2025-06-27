"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import useAuthGuard from "@/hooks/common/useAuthGuard";

export default function AuthGuardWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // 로그인 또는 닉네임 설정 페이지에서는 AuthGuard 실행하지 않음
  const isPublicRoute = pathname === "/login" || pathname === "/login/set-nickname";
  
  if (!isPublicRoute) {
    useAuthGuard();
  }
  
  return <>{children}</>;
}
