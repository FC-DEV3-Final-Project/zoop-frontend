import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// 인스턴스 생성
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // 쿠키 포함 설정
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, tokenRefreshed = false) => {
  failedQueue.forEach((prom) => {
    if (tokenRefreshed) {
      prom.resolve(axiosInstance(prom.config));
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

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
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 500) &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await axiosInstance.post("/auth/refresh");

        processQueue(null, true);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, false);

        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
