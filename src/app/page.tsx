"use client";

import ChatPageLayout from "./chat/ChatPageLayout";
import useAuthGuard from "@/hooks/common/useAuthGuard";

export default function HomePage() {
  useAuthGuard();

  return <ChatPageLayout currentChatId={null} />;
}
