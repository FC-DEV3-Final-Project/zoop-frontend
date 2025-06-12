"use client";

/**
 * KakaoInit 컴포넌트는 클라이언트에서 카카오 SDK를 초기화합니다.
 * - 카카오 SDK 로드 후, 앱 키를 이용해 window.Kakao.init()을 실행합니다.
 * - 이미 초기화된 경우 중복 초기화를 방지합니다.
 * - 앱 전체에서 한 번만 포함되면 충분합니다.
 */

import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoInit() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_KAKAO_LOGIN_JS_KEY;

    if (!window.Kakao?.isInitialized() && key) {
      window.Kakao.init(key);
    }
  }, []);

  return null;
}
