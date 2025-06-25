import Link from "next/link";
import ChatBubble from "./ChatBubble";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

const InitialFilterPrompt = () => {
  const { user } = useUserInfoStore();

  return (
    <ChatBubble className="flex flex-col gap-2" type="CHATBOT">
      <p>
        {user?.nickname}님 반가워요. <br /> {user?.nickname}님께 딱 맞는 매물을 추천해드릴게요.
        <br /> 지역, 매매 형태, 주거 형태, 예산을 선택해 주세요.
      </p>
      <Link
        href="/filter"
        className="w-full rounded-[50px] bg-blue-50 py-2 text-center text-caption1"
      >
        필터 설정하기
      </Link>
    </ChatBubble>
  );
};

export default InitialFilterPrompt;
