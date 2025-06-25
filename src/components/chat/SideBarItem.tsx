import React, { useState } from "react";

import Dropdown from "../common/Dropdown";
import { highlightSearchText } from "@/utils/common/highlightSearchText";
import { ChatPreviewItem } from "@/types/chat";
import { useDeleteChatMutation } from "@/queries/chat/useDeleteChatMutation";
import { useUpdateChatTitle } from "@/queries/chat/useUpdateChatTitleMutation";
import CustomDialog from "@/components/common/CustomDialog";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

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
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditAlert, setShowEditAlert] = useState(false);

  const { mutate: deleteChatRoom } = useDeleteChatMutation();
  const { mutate: updateTitle } = useUpdateChatTitle();

  const handleEditTitle = () => {
    setShowEditAlert(true);
  };

  const confirmEditTitle = (newTitle?: string) => {
    if (newTitle && newTitle.trim() !== "" && newTitle !== title) {
      updateTitle(
        { chatRoomId, newTitle },
        {
          onSuccess: () => {
            toast.custom(
              ({ id }) => (
                <CustomToast
                  message="제목이 성공적으로 변경되었습니다."
                  type="success"
                  onClickAction={() => toast.dismiss(id)}
                />
              ),
              { duration: 3000 },
            );
          },
          onError: () => {
            toast.custom(
              ({ id }) => (
                <CustomToast
                  message="제목 변경에 실패했습니다. 잠시 후 다시 시도해주세요."
                  type="error"
                  onClickAction={() => toast.dismiss(id)}
                />
              ),
              { duration: 3000 },
            );
          },
        },
      );
    }
    setShowEditAlert(false);
  };

  const handleDeleteChat = () => {
    setShowDeleteAlert(true);
  };

  const confirmDelete = () => {
    deleteChatRoom(
      { chatRoomId },
      {
        onSuccess: () => {
          toast.custom(
            ({ id }) => (
              <CustomToast
                message="채팅방이 성공적으로 삭제되었습니다."
                type="success"
                onClickAction={() => toast.dismiss(id)}
              />
            ),
            { duration: 3000 },
          );
        },
        onError: () => {
          toast.custom(
            ({ id }) => (
              <CustomToast
                message="채팅방 삭제에 실패했습니다. 잠시 후 다시 시도해주세요."
                type="error"
                onClickAction={() => toast.dismiss(id)}
              />
            ),
            { duration: 3000 },
          );
        },
      },
    );
    setShowDeleteAlert(false);
  };

  const dropdownItems = [
    {
      type: "edit",
      label: "제목 편집하기",
      onClick: handleEditTitle,
    },
    {
      type: "delete",
      label: "목록에서 삭제",
      onClick: handleDeleteChat,
    },
  ] as const;

  return (
    <div
      className={`relative flex w-full cursor-pointer items-center justify-between px-5 py-3 ${isSelected ? "border-l-[3px] border-blue-800 bg-blue-050-bg" : "bg-white"}`}
      onClick={onClick}
    >
      <div className="flex w-full min-w-0 flex-col">
        <span className="w-[92%] truncate text-body2">
          {highlightSearchText(title, searchText)}
        </span>
        <span className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap text-body3 text-gray-800">
          {lastMatchingMessage && highlightSearchText(lastMatchingMessage, searchText)}
        </span>
      </div>
      <Dropdown items={[...dropdownItems]} />
      {showDeleteAlert && (
        <div onClick={(e) => e.stopPropagation()}>
          <CustomDialog
            title="채팅방 삭제"
            description="정말 삭제하시겠습니까?"
            onConfirm={confirmDelete}
            cancelLabel="취소"
            confirmLabel="삭제"
            open={showDeleteAlert}
            onOpenChange={setShowDeleteAlert}
          />
        </div>
      )}
      {showEditAlert && (
        <div onClick={(e) => e.stopPropagation()}>
          <CustomDialog
            title="제목 편집하기"
            description="새로운 제목을 입력하세요."
            placeholder="제목을 입력하세요"
            defaultValue={title}
            onConfirm={confirmEditTitle}
            cancelLabel="취소"
            confirmLabel="저장"
            open={showEditAlert}
            onOpenChange={setShowEditAlert}
          />
        </div>
      )}
    </div>
  );
};

export default SideBarItem;
