import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config) => {
  // 쿠키 포함 명시
  config.withCredentials = true;

  // Content-Type 자동 분기
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data"; // 폼 데이터 보낼때
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        // accessToken 재발급 요청
        await axiosInstance.post("/auth/refresh", null, { withCredentials: true });

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
