import { UserNickname } from "@/types/user";
import axiosInstance from "../utils/axiosInstance";

export const insertUserNickname = async (nickname: string): Promise<UserNickname> => {
  try {
    const response = await axiosInstance.post("/users/auth/register", { nickname });
    return response.data;
  } catch (error) {
    console.error("insertUserNickname 에러:", error);
    throw error;
  }
};
