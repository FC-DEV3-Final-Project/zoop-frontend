import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Content-Type 자동 설정
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    console.log("📌 access_token =", token);
    console.log("axiosInstance headers 확인:", config.headers);

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
