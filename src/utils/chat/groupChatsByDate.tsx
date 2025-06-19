import { format, isToday, isYesterday, differenceInCalendarDays } from "date-fns";

// 백엔드 Response
type ChatItem = {
  order?: number;
  chatRoomId: number;
  title: string;
  lastMessageAt: string;
};

type GroupedChats = {
  [key: string]: ChatItem[];
};

const groupChatsByDate = (chats: ChatItem[]): GroupedChats => {
  const groups: GroupedChats = {};

  // 마지막으로 채팅 보낸 시간을 기준으로 최신순 정렬
  const sortedChats = [...chats].sort((a, b) => {
    return new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime();
  });

  sortedChats.forEach((chat) => {
    const date = new Date(chat.lastMessageAt);

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
