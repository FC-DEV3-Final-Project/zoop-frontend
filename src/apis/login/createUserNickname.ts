import { UserNickname } from "@/types/user";
import axiosInstance from "../utils/axiosInstance";

export const createUserNickname = async (nickname: string): Promise<UserNickname> => {
  try {
    const response = await axiosInstance.post("/users/auth/register", { nickname });
    return response.data;
  } catch (error) {
    console.error("createUserNickname 에러:", error);
    throw error;
  }
};
