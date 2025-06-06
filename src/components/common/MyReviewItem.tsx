type MyReviewItemProps = {
  title: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
};

export const MyReviewItem = ({ title, content, date, likes, comments }: MyReviewItemProps) => {
  return (
    <div className="flex flex-col gap-1 bg-white p-5">
      <div className="flex items-center">
        <div className="flex-1 text-sm font-medium text-blue-700">{title}</div>
        <div className="h-4 w-4">
          <img src="/icons/more.svg" alt="more" className="h-4 w-4" />
        </div>
      </div>
      <div className="text-sm font-medium text-black">{content}</div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-400">{date}</div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            <img src="/icons/thumbsup-disabled.svg" alt="likes" className="h-4 w-4" />
            <span className="text-xs text-neutral-300">{likes}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <img src="/icons/chat-text-disabled.svg" alt="comments" className="h-4 w-4" />
            <span className="text-xs text-neutral-300">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
