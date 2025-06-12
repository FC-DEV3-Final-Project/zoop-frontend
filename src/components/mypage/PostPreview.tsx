import PostPreviewItem from "./PostPreviewItem";

type PostPreviewProps = {
  posts: Array<{
    reviweId?: string | number;
    content: string;
    likeCount: number;
    commentCount: number;
  }>;
  onMorePosts: () => void;
};

export default function PostPreview({ posts, onMorePosts }: PostPreviewProps) {
  return (
    <div className="shadow3 flex flex-col items-start justify-center gap-3.5 self-stretch rounded-lg bg-white px-5 py-4 outline outline-1 outline-offset-[-1px] outline-neutral-200">
      <div className="inline-flex items-center justify-between self-stretch bg-white">
        <div className="text-title4">내가 쓴 글</div>
        <button onClick={onMorePosts} className="flex items-center gap-1">
          <div className="text-body2 text-neutral-600">더보기</div>
          <img src="/icons/arrow-right.svg" alt="더보기" className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col items-start self-stretch">
        {posts && posts.length > 0 ? (
          posts.map((post, idx) => (
            <PostPreviewItem
              key={post.reviweId || idx}
              content={post.content}
              likes={post.likeCount}
              comments={post.commentCount}
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
}
