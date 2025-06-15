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

// 타입 정의 추가
// type Post = {
//   reviewId?: number;
//   commentId?: number;
//   content: string;
//   createdAt: string;
//   likeCount: number;
//   commentCount?: number;
//   item?: {
//     complexId?: number;
//     propertyId?: number;
//     articleName: string;
//   };
//   review?: {
//     reviewId: number;
//     content: string;
//     item: {
//       complexId?: number;
//       propertyId?: number;
//       articleName: string;
//     };
//   };
// };

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
        // 리뷰에 연관된 단지 정보(Complex) 가 존재할 경우: item.articleName은 단지 이름(complexName)을 사용합니다.
        // 단지 정보가 없는 경우에는, item.articleName은 리뷰에 연결된 매물 정보의 articleName을 사용합니다.
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
        // 리뷰에 연관된 단지 정보(Complex) 가 존재할 경우: item.articleName은 단지 이름(complexName)을 사용합니다.
        // 단지 정보가 없는 경우에는, item.articleName은 리뷰에 연결된 매물 정보의 articleName을 사용합니다.
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
          // 리뷰에 연관된 단지 정보(Complex) 가 존재할 경우: item.articleName은 단지 이름(complexName)을 사용합니다.
          // 단지 정보가 없는 경우에는, item.articleName은 리뷰에 연결된 매물 정보의 articleName을 사용합니다.
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
          // 리뷰에 연관된 단지 정보(Complex) 가 존재할 경우: item.articleName은 단지 이름(complexName)을 사용합니다.
          // 단지 정보가 없는 경우에는, item.articleName은 리뷰에 연결된 매물 정보의 articleName을 사용합니다.
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
