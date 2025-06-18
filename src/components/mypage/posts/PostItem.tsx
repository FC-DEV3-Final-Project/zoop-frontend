import Dropdown from "@/components/common/Dropdown";
import { PostItemProps } from "@/types/post";
import { useRouter } from "next/navigation";

export const PostItem = ({
  type,
  reviewId,
  commentId,
  content,
  createdAt,
  likeCount,
  commentCount,
  item,
  review,
}: PostItemProps) => {
  const router = useRouter();

  const targetReviewId = type === "review" ? reviewId : review?.reviewId;
  const propertyOrComplexId =
    type === "review"
      ? item?.complexId || item?.propertyId
      : review?.item.complexId || review?.item.propertyId;

  return (
    <div
      className="flex cursor-pointer flex-col gap-1 bg-white p-5"
      onClick={() => router.push(`/property/${propertyOrComplexId}/review/${targetReviewId}`)}
    >
      {/* 건물명, 더보기 버튼 */}
      <div className="flex items-center">
        <div className="flex-1 text-caption2 text-blue-700">
          {item?.articleName || review?.item.articleName}
        </div>
        <Dropdown
          items={[
            {
              type: "delete",
              label: "삭제하기",
              onClick: () => {
                alert("삭제 버튼 클릭됨");
              },
            },
          ]}
        />
      </div>
      {/* 리뷰 내용 */}
      <div className={`text-caption2 ${type === "comment" ? "truncate text-gray-700-info" : ""}`}>
        {type === "review" ? content : review?.content}
      </div>
      {type === "comment" && (
        <div className="flex items-center gap-1">
          <img src="/icons/reply-arrow.svg" alt="reply" className="h-[6px] w-[6px]" />
          <div className="text-sm font-medium text-black">{content}</div>
        </div>
      )}
      {/* 날짜, 공감 수, 댓글 수 */}
      <div className="flex items-center justify-between">
        {/* 날짜 */}
        <div className="text-body3 text-gray-700-info">{createdAt}</div>
        <div className="flex items-center gap-1 text-body3 text-gray-600-hint">
          {/* 댓글 수 */}
          {type === "review" && commentCount !== undefined && (
            <div className="flex w-[26px] gap-0.5">
              <img src="/icons/chat-text-disabled.svg" alt="댓글" className="h-4 w-4" />
              <span>{commentCount}</span>
            </div>
          )}
          {/* 공감 수 */}
          <div className="flex w-[26px] gap-0.5">
            <img src="/icons/thumbsup-disabled.svg" alt="좋아요" className="h-4 w-4" />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
