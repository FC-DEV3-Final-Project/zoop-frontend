"use client";

import { useState } from "react";
import { Tab } from "@/components/Tab";
import { MyReviewItem } from "@/components/common/MyReviewItem";
import { MyCommentItem } from "@/components/common/MyCommentItem";

const tabOptions = [
  { label: "리뷰", value: "review" },
  { label: "댓글", value: "comment" },
];

// 임시 데이터
const reviewData = [
  {
    title: "방배마에스트로(주상복합)",
    content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
    date: "2025.05.21",
    likes: 0,
    comments: 2,
  },
  {
    title: "방배마에스트로(주상복합)",
    content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
    date: "2025.05.20",
    likes: 2,
    comments: 3,
  },
  {
    title: "방배마에스트로(주상복합)",
    content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
    date: "2025.05.19",
    likes: 3,
    comments: 5,
  },
];

// 임시 데이터 추가
const commentData = [
  {
    title: "방배마에스트로(주상복합)",
    review: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
    reply: "맞아요 교통이 정말 편해요",
    date: "2025.05.20",
    likes: 3,
  },
  // ... 더 많은 댓글 데이터
];

export default function MyCommentsPage() {
  const [selectedTab, setSelectedTab] = useState("review");

  return (
    <div className="flex w-full flex-col items-start">
      {/* 탭 영역 */}
      <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />

      {/* 리스트 영역 */}
      <div className="flex w-full flex-col gap-1 bg-stone-50">
        {selectedTab === "review"
          ? reviewData.map((review, idx) => (
              <MyReviewItem
                key={idx}
                title={review.title}
                content={review.content}
                date={review.date}
                likes={review.likes}
                comments={review.comments}
              />
            ))
          : commentData.map((comment, idx) => (
              <MyCommentItem
                key={idx}
                title={comment.title}
                review={comment.review}
                reply={comment.reply}
                date={comment.date}
                likes={comment.likes}
              />
            ))}
      </div>
    </div>
  );
}
