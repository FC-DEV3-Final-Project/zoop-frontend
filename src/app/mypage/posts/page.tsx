"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import { Header } from "@/layout/Header";
import { PostItem } from "@/components/mypage/posts/PostItem";
import fetchPosts, { PostData } from "@/apis/mypage/fetchPosts";

const tabOptions = [
  { label: "리뷰", value: "reviews" },
  { label: "댓글", value: "comments" },
];

const PostsPage = () => {
  const [selectedTab, setSelectedTab] = useState("reviews");
  const [posts, setPosts] = useState<PostData>({
    reviews: [],
    comments: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-body2 text-gray-700-info">로딩 중...</div>
      </div>
    );
  }

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>내가 쓴 글</Header.Title>
      </Header>
      <div className="flex w-full flex-col bg-gray-100 pt-16">
        <div className="sticky top-16 z-10 bg-white">
          <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        </div>
        <div>
          <div className="mb-8 flex flex-col gap-1">
            {posts[selectedTab as keyof PostData]?.map((post, idx) => (
              <PostItem
                key={idx}
                type={selectedTab === "reviews" ? "review" : "comment"}
                {...post}
              />
            ))}
          </div>

          <div
            className={`${posts[selectedTab as keyof PostData]?.length === 0 ? "fixed inset-0 flex items-center justify-center" : ""}`}
          >
            <div className={"flex h-[60px] items-center justify-center"}>
              <div className="text-body2 text-gray-700-info">더 이상 표시할 콘텐츠가 없어요.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsPage;
