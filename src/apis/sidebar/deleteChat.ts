import axiosInstance from "../utils/axiosInstance";

type DeleteChatPayload = {
  chatRoomId: number;
};

export const deleteChat = async ({ chatRoomId }: DeleteChatPayload) => {
  try {
    const response = await axiosInstance.delete(`/chats/${chatRoomId}`);
    return response.data;
  } catch (error) {
    console.error("채팅 삭제하기 에러:", error);
    throw error;
  }
};
