import axiosInstance from "../utils/axiosInstance";

type UpdateChatTitlePayload = {
  chatRoomId: number;
  newTitle: string;
};

export const updateChatTitle = async ({ chatRoomId, newTitle }: UpdateChatTitlePayload) => {
  try {
    const response = await axiosInstance.patch(`/chats/${chatRoomId}`, {
      title: newTitle,
    });
    return response.data;
  } catch (error) {
    console.error("채팅 제목 수정하기 에러:", error);
    throw error;
  }
};
