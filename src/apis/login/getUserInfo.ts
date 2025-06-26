import axiosInstance from "../utils/axiosInstance";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/users/auth/me");
    const data = response.data;

    console.log("로그인 된 유저 data확인::", data);

    // ✅ Zustand 저장
    const setUser = useUserInfoStore.getState().setUser;
    setUser({
      userId: data.userId,
      email: data.email,
      nickname: data.nickname,
      profileImage: data.profileImage,
    });

    return data;
  } catch (error) {
    console.error("getUserInfo 에러:", error);
    throw error;
  }
};
