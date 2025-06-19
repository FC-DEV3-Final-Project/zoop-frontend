import axiosInstance from "@/apis/utils/axiosInstance";

// 로그아웃 API
const fetchLogout = async (): Promise<boolean> => {
  try {
    const kakaoAccess = localStorage.getItem("kakao_access");
    const response = await axiosInstance.post("/users/auth/logout", undefined, {
      headers: {
        "Kakao-Access": kakaoAccess || "",
      },
    });

    if (response.status === 204) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("로그아웃 실패:", error);
    return false;
  }
};

export default fetchLogout;
