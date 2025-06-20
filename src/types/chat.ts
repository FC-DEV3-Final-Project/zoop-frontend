export interface ChatPreviewItem {
  order?: number;
  chatRoomId: number;
  title: string;
  content?: string;
  lastMatchingMessage?: string;
  lastMessageAt?: string;
}

export interface ChatItem extends ChatPreviewItem {
  message: {
    messageId: number;
    senderType: "CHATBOT" | "USER";
    content: string;
    createdAt: string;
  };
}
