"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/apis/login/getUserInfo";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

export default function useAuthGuard() {
  const router = useRouter();
  const { setUser, clearUser } = useUserInfoStore();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const checkLogin = await getUserInfo();
        setUser(checkLogin);
        router.replace("/");
      } catch {
        clearUser();
        router.replace("/login");
      }
    };

    checkLogin();
  }, []);
}
