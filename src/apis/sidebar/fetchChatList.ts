import axiosInstance from "../utils/axiosInstance";

type FetchChatListPayload = {
  searchText: string;
};

export const fetchChatList = async ({ searchText }: FetchChatListPayload) => {
  try {
    const response = await axiosInstance.post("/chats", { searchText });
    return response.data;
  } catch (error) {
    console.error("채팅 목록 불러오기 에러:", error);
    throw error;
  }
};
