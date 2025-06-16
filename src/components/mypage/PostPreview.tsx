type PostPreviewProps = {
  content: string;
  likeCount: number;
  commentCount: number;
};

export default function PostPreview({ content, likeCount, commentCount }: PostPreviewProps) {
  return (
    <div className="flex h-8 w-full items-center gap-6 py-[5px] pr-[3px]">
      <div className="flex-1 truncate">{content}</div>

      {/* 아이콘 영역*/}
      <div className="flex items-center gap-1 text-body3 text-gray-600-hint">
        <div className="flex w-[26px] gap-0.5">
          <img src="/icons/chat-text-disabled.svg" alt="댓글" className="h-4 w-4" />
          <span>{commentCount}</span>
        </div>
        <div className="flex w-[26px] gap-0.5">
          <img src="/icons/thumbsup-disabled.svg" alt="좋아요" className="h-4 w-4" />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}