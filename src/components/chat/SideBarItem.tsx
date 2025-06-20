import React from "react";

import Dropdown from "../common/Dropdown";
import { highlightSearchKeyword } from "@/utils/chat/highlightSearchKeyword";
import { ChatPreviewItem } from "@/types/chat";

interface SideBarItemProps extends ChatPreviewItem {
  searchKeyword: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const SideBarItem = ({
  chatRoomId,
  title,
  content,
  searchKeyword,
  isSelected = false,
  onClick,
}: SideBarItemProps) => {
  const handleEditTilte = () => {
    // TODO: 제목 편집하기 API
    alert("편집 버튼 클릭");
  };

  const handleDeleteChat = () => {
    // TODO: 채팅 삭제하기 API
    alert("삭제 버튼 클릭");
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
      <div className="flex min-w-0 flex-col">
        <span className="text-body2">{highlightSearchKeyword(title, searchKeyword)}</span>
        <span className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap text-body3 text-gray-800">
          {highlightSearchKeyword(content ?? "", searchKeyword)}
        </span>
      </div>
      <Dropdown items={[...dropdownItems]} />
    </div>
  );
};

export default SideBarItem;
