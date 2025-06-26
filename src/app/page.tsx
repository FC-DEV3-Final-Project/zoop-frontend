"use client";

import ChatPageLayout from "./chat/ChatPageLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  // const router = useRouter();
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   const token = document.cookie.includes("accessToken");

  //   if (!token) {
  //     router.replace("/login");
  //     return;
  //   }
  //   setIsReady(true);
  // }, []);

  // if (!isReady) return null;

  return <ChatPageLayout currentChatId={null} />;
}
