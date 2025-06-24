import React from "react";

import Dropdown from "../common/Dropdown";
import { highlightSearchText } from "@/utils/common/highlightSearchText";
import { ChatPreviewItem } from "@/types/chat";
import { useDeleteChatMutation } from "@/queries/chat/useDeleteChatMutation";
import { useUpdateChatTitle } from "@/queries/chat/useUpdateChatTitleMutation";

interface SideBarItemProps extends ChatPreviewItem {
  searchText: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const SideBarItem = ({
  chatRoomId,
  title,
  lastMatchingMessage,
  searchText,
  isSelected = false,
  onClick,
}: SideBarItemProps) => {
  const { mutate: deleteChatRoom } = useDeleteChatMutation();
  const { mutate: updateTitle } = useUpdateChatTitle();

  const handleEditTilte = () => {
    const newTitle = window.prompt("제목 편집하기", title);

    if (newTitle && newTitle.trim() !== "" && newTitle !== title) {
      updateTitle({ chatRoomId, newTitle });
    }
  };

  const handleDeleteChat = () => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

    if (isConfirmed) {
      deleteChatRoom({ chatRoomId });
    }
  };

  const dropdownItems = [
    {
      type: "edit",
      label: "제목 편집하기",
      onClick: handleEditTilte,
    },
    {
      type: "delete",
      label: "목록에서 삭제",
      onClick: handleDeleteChat,
    },
  ] as const;

  return (
    <div
      className={`relative flex w-full items-center justify-between px-5 py-3 ${isSelected ? "border-l-[3px] border-blue-800 bg-blue-050-bg" : "bg-white"}`}
      onClick={onClick}
    >
      <div className="flex flex-col min-w-0">
        <span className="w-[92%] truncate text-body2">
          {highlightSearchText(title, searchText)}
        </span>
        <span className="w-3/4 overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap text-body3">
          {lastMatchingMessage && highlightSearchText(lastMatchingMessage, searchText)}
        </span>
      </div>
      <Dropdown items={[...dropdownItems]} />
    </div>
  );
};

export default SideBarItem;
