import { PostType } from "@/types/post";

type PostPreviewItemProps = {
  type: PostType;
  content: string;
  likes: number;
  comments: number;
};

const PostPreviewItem = ({ type, content, likes, comments }: PostPreviewItemProps) => {
  return (
    <div className="flex h-8 w-full items-center gap-6 py-[5px] pr-[3px]">
      <div className="flex-1 truncate">{content}</div>

      {/* 아이콘 영역*/}
      <div className="flex items-center gap-1 text-body3 text-gray-600-hint">
        {type === "review" && (
        <div className="flex w-[26px] gap-0.5">
          <img src="/icons/chat-text-disabled.svg" alt="댓글" className="h-4 w-4" />
          <span>{comments}</span>
        </div>
        )}
        <div className="flex w-[26px] gap-0.5">
          <img src="/icons/thumbsup-disabled.svg" alt="좋아요" className="h-4 w-4" />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}

export default PostPreviewItem;