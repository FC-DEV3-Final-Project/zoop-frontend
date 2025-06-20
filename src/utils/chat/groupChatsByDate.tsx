import { ChatPreviewItem } from "@/types/chat";
import { format, isToday, isYesterday, differenceInCalendarDays } from "date-fns";

type GroupedChats = {
  [key: string]: ChatPreviewItem[];
};

const groupChatsByDate = (chats: ChatPreviewItem[]): GroupedChats => {
  const groups: GroupedChats = {};

  // 마지막으로 채팅 보낸 시간을 기준으로 최신순 정렬
  const sortedChats = [...chats].sort((a, b) => {
    return new Date(b.lastMessageAt ?? 0).getTime() - new Date(a.lastMessageAt ?? 0).getTime();
  });

  sortedChats.forEach((chat) => {
    const date = new Date(chat.lastMessageAt ?? 0);

    let groupName = "";
    if (isToday(date)) {
      groupName = "오늘";
    } else if (isYesterday(date)) {
      groupName = "어제";
    } else if (differenceInCalendarDays(new Date(), date) < 7) {
      groupName = "지난주";
    } else {
      groupName = format(date, "yyyy.MM.dd");
    }

    if (!groups[groupName]) groups[groupName] = [];
    groups[groupName].push(chat);
  });

  return groups;
};

export default groupChatsByDate;
