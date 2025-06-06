type ReviewItemProps = {
  content: string;
  likes: number;
  comments: number;
};

export default function ReviewItem({ content, likes, comments }: ReviewItemProps) {
  return (
    <div className="flex h-8 w-full items-center gap-6 py-[5px] pr-[3px]">
      <div className="flex-1 truncate text-sm">{content}</div>
      {/* 아이콘 영역*/}
      <div className="flex items-center gap-1">
        <div className="flex w-[26px] items-center gap-0.5">
          <img src="/icons/chat-text-disabled.svg" alt="댓글" className="h-4 w-4" />
          <span className="text-xs text-[#b2b2b2]">{comments}</span>
        </div>
        <div className="flex w-[26px] items-center gap-0.5">
          <img src="/icons/thumbsup-disabled.svg" alt="좋아요" className="h-4 w-4" />
          <span className="text-xs text-[#b2b2b2]">{likes}</span>
        </div>
      </div>
    </div>
  );
}
