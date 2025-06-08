type MyPostItemProps = {
  type: "review" | "comment";
  title: string;
  content: string;
  date: string;
  likes: number;
  comments?: number;
  reply?: string;
};

export const MyPostItem = ({
  type,
  title,
  content,
  date,
  likes,
  comments,
  reply,
}: MyPostItemProps) => {
  return (
    <div className="flex flex-col gap-1 bg-white p-5">
      {/* 건물명, 더보기 버튼 */}
      <div className="flex items-center">
        <div className="flex-1 text-caption2 text-blue-700">{title}</div>
        <img src="/icons/more.svg" alt="more" className="h-4 w-4" />
      </div>
      {/* 내용 */}
      <div className={`text-caption2 ${type === "comment" ? "truncate text-gray-700-info" : ""}`}>
        {content}
      </div>
      {type === "comment" && reply && (
        <div className="flex items-center gap-1">
          {/* <div className="py-[5px]"> */}
          <img src="/icons/reply-arrow.svg" alt="reply" className="h-[6px] w-[6px]" />
          {/* </div> */}
          <div className="text-sm font-medium text-black">{reply}</div>
        </div>
      )}
      {/* 날짜, 공감 수, 댓글 수 */}
      <div className="flex items-center justify-between">
        {/* 날짜 */}
        <div className="text-body3 text-gray-700-info">{date}</div>
        <div className="flex items-center gap-1 text-body3 text-gray-600-hint">
          {/* 댓글 수 */}
          {type === "review" && comments !== undefined && (
            <div className="flex w-[26px] gap-0.5">
              <img src="/icons/chat-text-disabled.svg" alt="댓글" className="h-4 w-4" />
              <span>{comments}</span>
            </div>
          )}
          {/* 공감 수 */}
          <div className="flex w-[26px] gap-0.5">
            <img src="/icons/thumbsup-disabled.svg" alt="좋아요" className="h-4 w-4" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
