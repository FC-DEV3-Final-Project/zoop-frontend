"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import { Header } from "@/layout/Header";
import { MyPostItem, PostItem } from "@/components/mypage/myposts/MyPostItem";

const tabOptions = [
  { label: "리뷰", value: "reviews" },
  { label: "댓글", value: "comments" },
];

type PostData = {
  reviews: PostItem[] | null;
  comments: PostItem[] | null;
};

// 임시 데이터
const posts = {
  reviews: [
    {
      reviewId: 1,
      content: "좋은 매물이네요.",
      createdAt: "2025-05-28",
      likeCount: 12,
      commentCount: 3,
      item: {
        complexId: 2,
        articleName: "관악산대창센시티 단지",
      },
    },
    {
      reviewId: 2,
      content: "좋은 매물이네요.",
      createdAt: "2025-05-28",
      likeCount: 12,
      commentCount: 3,
      item: {
        propertyId: 101,
        articleName: "관악산대창센시티(101동)",
      },
    },
  ],
  comments: [
    {
      commentId: 55,
      content: "저도 이 매물 관심 있었어요!",
      createdAt: "2025-06-08",
      likeCount: 7,
      review: {
        reviewId: 1,
        content: "좋은 매물이네요.",
        item: {
          complexId: 2,
          articleName: "관악산대창센시티 단지",
        },
      },
    },
    {
      commentId: 55,
      content: "저도 이 매물 관심 있었어요!",
      createdAt: "2025-06-08",
      likeCount: 7,
      review: {
        reviewId: 1,
        content: "좋은 매물이네요.",
        item: {
          propertyId: 2,
          articleName: "관악산대창센시티 단지",
        },
      },
    },
  ],
};

const MyPostsPage = () => {
  const [selectedTab, setSelectedTab] = useState("reviews");
  const router = useRouter();

  const handlePostClick = (title: string) => {
    router.push(`/review/${title}`);
  };

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
            {posts[selectedTab as keyof PostData].map((post, idx) => (
              <MyPostItem
                key={idx}
                type={selectedTab === "reviews" ? "review" : "comment"}
                {...post}
              />
            ))}
          </div>

          <div
            className={`${posts[selectedTab as keyof PostData].length === 0 ? "fixed inset-0 flex items-center justify-center" : ""}`}
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

export default MyPostsPage;
