import axiosInstance from "@/apis/utils/axiosInstance";

// 쿠키에서 특정 값을 가져오는 헬퍼 함수
const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
  return "";
};

// 로그아웃 API
const fetchLogout = async (): Promise<boolean> => {
  const kakaoAccess = getCookie("KAKAO_ACCESS");

  const response = await axiosInstance.post("/users/auth/logout", undefined, {
    headers: {
      "KAKAO_ACCESS": kakaoAccess || "",
    },
  });

  return response.status === 204;
};

export default fetchLogout;
