import axiosInstance from "../utils/axiosInstance";

export const fetchChatList = async () => {
  try {
    const response = await axiosInstance.get("/chats");
    return response.data;
  } catch (error) {
    console.error("채팅 목록 불러오기 에러:", error);
    throw error;
  }
};
