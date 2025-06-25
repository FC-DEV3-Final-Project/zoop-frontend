import axiosInstance from "@/apis/utils/axiosInstance";

// 로그아웃 API
const fetchLogout = async (): Promise<boolean> => {
  let kakaoAccess = "";

  if (typeof window !== "undefined") {
    kakaoAccess = localStorage.getItem("kakao_access") || "";
  }

  const response = await axiosInstance.post("/users/auth/logout", undefined, {
    headers: {
      "Kakao-Access": kakaoAccess || "",
    },
  });

  return response.status === 204;
};

export default fetchLogout;
