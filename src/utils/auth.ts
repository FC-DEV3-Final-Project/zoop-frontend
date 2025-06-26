import { useUserInfoStore } from "@/stores/useUserInfoStore";

const clearAuthTokens = () => {
  // 쿠키 삭제 (대문자 토큰명 사용)
  document.cookie = "ACCESS_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "REFRESH_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "KAKAO_ACCESS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Zustand store 초기화
  const clearUser = useUserInfoStore.getState().clearUser;
  clearUser();

  // 기존 localStorage 데이터도 정리 (혹시 남아있을 수 있으므로)
  localStorage.removeItem("kakao_access");
  localStorage.removeItem("userInfo-storage");
};

export { clearAuthTokens };
