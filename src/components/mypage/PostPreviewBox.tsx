import { useRouter } from "next/navigation";
import PostPreviewItem from "./PostPreviewItem";

type PostPreviewBoxProps = {
  postPreviewItems: Array<{
    reviewId?: string | number;
    commentId?: string | number;
    content: string;
    likeCount: number;
    commentCount?: number;
  }>;
};

const PostPreviewBox = ({ postPreviewItems }: PostPreviewBoxProps) => {
  const router = useRouter();

  return (
    <div className="shadow3 flex flex-col items-start justify-center gap-3.5 self-stretch rounded-lg bg-white px-5 py-4 outline outline-1 outline-offset-[-1px] outline-neutral-200">
      <div className="inline-flex items-center justify-between self-stretch bg-white">
        <div className="text-title4">내가 쓴 글</div>
        <button onClick={() => router.push(`/mypage/posts`)} className="flex items-center gap-1">
          <div className="text-body2 text-neutral-600">더보기</div>
          <img src="/icons/arrow-right.svg" alt="더보기" className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col items-start self-stretch">
        {postPreviewItems && postPreviewItems.length > 0 ? (
          postPreviewItems.map((post, idx) => (
            <PostPreviewItem
              type={post.reviewId ? "review" : "comment"}
              key={idx}
              content={post.content}
              likes={post.likeCount}
              comments={post.commentCount || 0}
            />
          ))
        ) : (
          <div className="h-5 justify-center self-stretch text-body2 leading-tight">
            내가 작성한 글이 없어요
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPreviewBox;
