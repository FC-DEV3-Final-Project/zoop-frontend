"use client";

import ChatPageLayout from "./chat/ChatPageLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/apis/login/getUserInfo";
import axiosInstance from "@/apis/utils/axiosInstance";
import useAuthGuard from "@/hooks/common/useAuthGuard";

export default function HomePage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useAuthGuard();

  if (!isReady) return null;

  return <ChatPageLayout currentChatId={null} />;
}
