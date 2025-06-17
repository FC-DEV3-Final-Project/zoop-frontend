"use client";

import useAuthFromHash from "@/hooks/common/useAuthFromHash";

export default function LoginCompletePage() {
  useAuthFromHash({ redirectIfNicknameNeeded: true });

  return <div>로그인 처리 중입니다...</div>; // 사용자에게 거의 안 보임
}
