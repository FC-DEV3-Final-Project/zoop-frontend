import { http, HttpResponse } from "msw";
import type { Comment } from "@/apis/property/review/fetchComments";

const getReviewListHandler = http.get("/reviews/:propertyId", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    complexId: null,
    reviews: [
      {
        reviewId: 1001,
        userId: 789,
        nickname: "kim",
        profileImage: null,
        rating: 4.5,
        content: "좋은 동네입니다.",
        hasChildren: true,
        isResident: true,
        createdAt: "2025-05-28T16:40:00",
        likeCount: 3,
        commentCount: 0,
        isLikedByMe: false,
        isMine: true,
      },
      {
        reviewId: 1002,
        userId: 101,
        nickname: "lee",
        profileImage: "",
        rating: 4.0,
        content: "조용하고 좋아요.",
        hasChildren: false,
        isResident: false,
        createdAt: "2025-05-26T14:20:00",
        likeCount: 1,
        commentCount: 2,
        isLikedByMe: true,
        isMine: false,
      },
      {
        reviewId: 1003,
        userId: 222,
        nickname: "park",
        profileImage: "",
        rating: 4.5,
        content: "살 만 합니다.",
        hasChildren: true,
        isResident: false,
        createdAt: "2025-05-26T14:12:00",
        likeCount: 0,
        commentCount: 0,
        isLikedByMe: false,
        isMine: false,
      },
    ],
  };

  return HttpResponse.json({ status: 200, message: "요청이 정상적으로 처리되었습니다.", data });
});

const getReviewCommentsHandler = http.get("/reviews/:reviewId/comments", ({ params }) => {
  const { reviewId } = params;
  const numericId = Number(reviewId);

  let comments: Comment[] = [];

  if (numericId === 1001) {
    comments = [
      {
        commentId: 124,
        userId: 789,
        nickname: "popop",
        profileImage: null,
        content: "이사갈 예정인데 궁금해서요.",
        likeCount: 3,
        isLikedByMe: false,
        isMine: true,
        createdAt: "2025-06-01T10:20:00Z",
        updatedAt: null,
      },
      {
        commentId: 125,
        userId: 890,
        nickname: "hana",
        profileImage: "",
        content: "학교 가까워요!",
        likeCount: 0,
        isLikedByMe: true,
        isMine: false,
        createdAt: "2025-06-01T11:20:00Z",
        updatedAt: null,
      },
    ];
  } else if (numericId === 1002) {
    comments = [
      {
        commentId: 201,
        userId: 777,
        nickname: "alice",
        profileImage: null,
        content: "주차는 어떤가요?",
        likeCount: 2,
        isLikedByMe: true,
        isMine: false,
        createdAt: "2025-06-02T08:00:00Z",
        updatedAt: null,
      },
    ];
  } else {
    comments = [];
  }

  const data = {
    reviewId: numericId,
    commentCount: comments.length,
    comments,
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

export const reviewHandlers = [getReviewListHandler, getReviewCommentsHandler];
