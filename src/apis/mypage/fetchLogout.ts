import axiosInstance from "@/apis/utils/axiosInstance";

// 로그아웃 API
const fetchLogout = async (): Promise<boolean> => {
  const response = await axiosInstance.post("/users/auth/logout"); 
  return response.status === 204;
};

export default fetchLogout;
