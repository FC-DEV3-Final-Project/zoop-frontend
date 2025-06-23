"use client";

import { useParams } from "next/navigation";
import ChatPageLayout from "../ChatPageLayout";

const ChatRoomPage = () => {
  const { chatRoomId } = useParams();

  if (!chatRoomId) return;

  return <ChatPageLayout selectedChatId={Number(chatRoomId)} />;
};

export default ChatRoomPage;
