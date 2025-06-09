"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tab } from "@/components/Tab";
import { MyPostItem } from "@/components/common/MyPostItem";

const tabOptions = [
  { label: "리뷰", value: "review" },
  { label: "댓글", value: "comment" },
];

// 타입 정의 추가
type Post = {
  type: "review" | "comment";
  title: string;
  content: string;
  date: string;
  likes: number;
  comments?: number;
  reply?: string;
};

type PostData = {
  review: Post[];
  comment: Post[];
};

// 임시 데이터
const postData: PostData = {
  review: [
    {
      type: "review",
      title: "방배마에스트로(주상복합)",
      content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
      date: "2025.05.21",
      likes: 0,
      comments: 2,
    },
    {
      type: "review",
      title: "방배마에스트로(주상복합)",
      content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
      date: "2025.05.20",
      likes: 2,
      comments: 3,
    },
    {
      type: "review",
      title: "방배마에스트로(주상복합)",
      content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
      date: "2025.05.19",
      likes: 3,
      comments: 5,
    },
  ],
  comment: [
    {
      type: "comment",
      title: "방배마에스트로(주상복합)",
      content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
      date: "2025.05.20",
      likes: 2,
      reply: "맞아요 교통이 정말 편해요",
    },
    // ... 더 많은 댓글 데이터
  ],
};

const MyPostsPage = () => {
  const [selectedTab, setSelectedTab] = useState("review");
  const router = useRouter();

  const handlePostClick = (title: string) => {
    router.push(`/review/${title}`);
  };

  return (
    <div className="flex w-full flex-col bg-gray-100">
      <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
      <div className="flex flex-col gap-1">
        {postData[selectedTab as keyof PostData].map((post, idx) => (
          <div key={idx} onClick={() => handlePostClick(post.title)}>
            <MyPostItem {...post} />
          </div>
        ))}
      </div>
      <div className="flex h-[104px] items-center justify-center text-body2 text-gray-700-info">
        더 이상 표시할 콘텐츠가 없습니다
      </div>
    </div>
  );
};

export default MyPostsPage;
