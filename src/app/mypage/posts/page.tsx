"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import { Header } from "@/layout/Header";
import PostItem from "@/components/mypage/posts/PostItem";
import { usePostReviewQuery } from "@/queries/mypage/usePostReviewQuery";
import { usePostCommentQuery } from "@/queries/mypage/usePostCommentQuery";
import { PostData, PostItemProps } from "@/types/post";
import EmptyListMessage from "@/components/common/EmptyListMessage";

const tabOptions = [
  { label: "리뷰", value: "reviews" },
  { label: "댓글", value: "comments" },
];

const PostsPage = () => {
  const [selectedTab, setSelectedTab] = useState("reviews");
  const router = useRouter();

  const {
    data: reviews,
    isLoading: reviewsLoading,
    refetch: reviewsRefetch,
  } = usePostReviewQuery();
  const {
    data: comments,
    isLoading: commentsLoading,
    refetch: commentsRefetch,
  } = usePostCommentQuery();

  const posts = {
    reviews,
    comments,
  };

  if (reviewsLoading || commentsLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-body2 text-gray-700-info">로딩 중...</div>
      </div>
    );
  }

  const emptyMessage =
    selectedTab === "reviews" ? "작성한 리뷰가 없습니다." : "작성한 댓글이 없습니다.";

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>내가 쓴 글</Header.Title>
      </Header>
      <div className="flex h-screen w-full flex-col bg-gray-100 pt-12">
        <div className="z-10 bg-white">
          <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        </div>
        <div className="flex-1">
          {posts?.[selectedTab as keyof PostData]?.length === 0 ? (
            <div className="fixed inset-0 flex items-center justify-center">
              <EmptyListMessage message={emptyMessage} />
            </div>
          ) : (
            <div className="mb-8 flex flex-col gap-1">
              {posts?.[selectedTab as keyof PostData]?.map((post: PostItemProps, idx: number) => (
                <PostItem
                  key={idx}
                  {...post}
                  type={selectedTab === "reviews" ? "review" : "comment"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostsPage;
