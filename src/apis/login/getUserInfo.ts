import axiosInstance from "../utils/axiosInstance";

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/users/auth/me");
    return response.data;
  } catch (error) {
    console.error("getUserInfo 에러:", error);
    throw error;
  }
};
