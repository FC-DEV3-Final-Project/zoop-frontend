import React from "react";

import Dropdown from "../common/Dropdown";

interface SideBarItemProps {
  chatRoomId?: string; // 제목 편집 또는 삭제할 채팅 ID. 임시 optional 처리
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const SideBarItem = ({ chatRoomId, title, isSelected = false, onClick }: SideBarItemProps) => {
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
      className={`relative flex justify-between px-5 py-3 ${isSelected ? "border-l-[3px] border-blue-800 bg-blue-050-bg" : "bg-white"}`}
      onClick={onClick}
    >
      <span className="text-body2">{title}</span>
      <div onClick={(e) => e.stopPropagation()}>
        <Dropdown items={[...dropdownItems]} />
      </div>
    </div>
  );
};

export default SideBarItem;
