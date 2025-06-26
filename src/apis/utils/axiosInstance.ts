import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// 인스턴스 생성
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // 쿠키 포함 설정
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Authorization 헤더는 제거
    // 쿠키 기반 인증은 자동으로 전달되므로 헤더를 따로 추가할 필요 없음

    // Content-Type 자동 설정
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    console.error("요청 인터셉터 오류:", error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        // accessToken 재발급 요청 (withCredentials 이미 포함됨)
        await axiosInstance.post("/auth/refresh");

        // 실패한 요청 재시도
        return axiosInstance(error.config);
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
