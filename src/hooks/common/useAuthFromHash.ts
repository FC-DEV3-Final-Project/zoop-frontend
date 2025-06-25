"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAuthFromHash({
  redirectIfNicknameNeeded,
}: { redirectIfNicknameNeeded?: boolean } = {}) {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");
    const kakaoAccess = params.get("kakao_access");
    const needsNickname = params.get("needsNickname") === "true";

    if (!accessToken) {
      alert("로그인 실패: 토큰이 없습니다.");
      router.replace("/login");
      return;
    }

    localStorage.setItem("access_token", accessToken);
    if (refreshToken) localStorage.setItem("refresh_token", refreshToken);
    if (kakaoAccess) localStorage.setItem("kakao_access", kakaoAccess);

    if (redirectIfNicknameNeeded) {
      if (needsNickname) {
        router.replace("/login/nicknameForm");
      } else {
        router.replace("/"); // 기존 회원이면 메인 페이지로 이동
      }
    }

    // 해시 제거
    window.history.replaceState(null, "", window.location.pathname);
  }, []);
}
