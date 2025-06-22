import { http, HttpResponse } from "msw";
import type { Comment } from "@/apis/property/review/fetchComments";
import type { Review } from "@/apis/property/review/fetchReviewList";

type ReviewRequestBody = {
  complexId: number | null;
  rating: number;
  content: string;
  hasChildren: "HAS_CHILDREN" | "NON_CHILDREN";
  isResident: "CURRENT_RESIDENT" | "PAST_RESIDENT" | "NON_RESIDENT";
};

type ReviewPatchRequestBody = {
  rating: number;
  content: string;
  hasChildren: "HAS_CHILDREN" | "NON_CHILDREN";
  isResident: "CURRENT_RESIDENT" | "PAST_RESIDENT" | "NON_RESIDENT";
};

// 댓글 전역 저장소
export const commentStore: Record<number, Comment[]> = {
  1001: [
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
      isLikedByMe: false,
      isMine: false,
      createdAt: "2025-06-01T11:20:00Z",
      updatedAt: null,
    },
  ],
  1002: [
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
  ],
};

// 리뷰 전역 저장소
let reviews = [
  {
    reviewId: 1001,
    userId: 789,
    nickname: "kim",
    profileImage: null,
    rating: 4.5,
    content: "좋은 동네입니다.",
    hasChildren: "NON_CHILDREN",
    isResident: "NON_RESIDENT",
    createdAt: "2025-05-28T16:40:00",
    updatedAt: null as string | null,
    likeCount: 3,
    commentCount: 2,
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
    hasChildren: "HAS_CHILDREN",
    isResident: "PAST_RESIDENT",
    createdAt: "2025-05-26T14:20:00",
    updatedAt: null as string | null,
    likeCount: 1,
    commentCount: 1,
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
    hasChildren: "HAS_CHILDREN",
    isResident: "NON_RESIDENT",
    createdAt: "2025-05-30T14:12:00",
    updatedAt: null as string | null,
    likeCount: 0,
    commentCount: 0,
    isLikedByMe: false,
    isMine: false,
  },
];

// 리뷰 리스트 조회
export const getReviewListHandler = http.get("/reviews/:propertyId", ({ params, request }) => {
  const { propertyId } = params;
  const url = new URL(request.url);
  const sort = url.searchParams.get("sort");

  let sortedReviews = [...reviews];
  if (sort === "like") {
    sortedReviews.sort((a, b) => b.likeCount - a.likeCount);
  } else if (sort === "latest") {
    sortedReviews.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  }

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data: {
      propertyId: Number(propertyId),
      reviews: sortedReviews,
    },
  });
});

// 댓글 리스트 조회
const getReviewCommentsHandler = http.get("/reviews/:reviewId/comments", ({ params }) => {
  const reviewId = Number(params.reviewId);
  const comments = commentStore[reviewId] ?? [];

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data: {
      reviewId,
      commentCount: comments.length,
      comments,
    },
  });
});

// 댓글 수정
const patchCommentHandler = http.patch(
  "/reviews/:reviewId/comments/:commentId",
  async ({ params, request }) => {
    const reviewId = Number(params.reviewId);
    const commentId = Number(params.commentId);
    const body = (await request.json()) as { content: string };

    const comments = commentStore[reviewId];
    if (!comments) {
      return HttpResponse.json(
        { status: 404, message: "댓글이 존재하지 않습니다." },
        { status: 404 },
      );
    }

    const target = comments.find((c) => c.commentId === commentId);
    if (!target) {
      return HttpResponse.json(
        { status: 404, message: "댓글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    target.content = body.content;
    target.updatedAt = new Date().toISOString();

    return HttpResponse.json({
      status: 200,
      result: true,
      message: "댓글이 성공적으로 수정되었습니다.",
      data: target,
    });
  },
);

// 리뷰 작성
export const postReviewHandler = http.post("/reviews/:propertyId", async ({ params, request }) => {
  const { propertyId } = params;
  const body = (await request.json()) as ReviewRequestBody;

  const newReview = {
    reviewId: Date.now(),
    userId: 789,
    nickname: "popop",
    profileImage: "",
    content: body.content,
    rating: body.rating,
    hasChildren: body.hasChildren,
    isResident: body.isResident,
    likeCount: 0,
    commentCount: 0,
    isLikedByMe: false,
    isMine: true,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    deletedAt: null,
  };

  reviews.unshift(newReview);

  return HttpResponse.json(
    {
      status: 201,
      message: "요청이 정상적으로 처리되었습니다.",
      data: newReview,
    },
    { status: 201 },
  );
});

// 리뷰 수정
export const patchReviewHandler = http.patch("/reviews/:reviewId", async ({ params, request }) => {
  console.log("PATCH 핸들러 동작 확인:", params.reviewId);
  const reviewId = Number(params.reviewId);

  const body = (await request.json()) as ReviewPatchRequestBody;

  const target = reviews.find((r) => r.reviewId === reviewId);
  if (!target) {
    return HttpResponse.json({ status: 404, message: "리뷰를 찾을 수 없습니다." }, { status: 404 });
  }

  // 필드 업데이트
  target.rating = body.rating;
  target.content = body.content;
  target.hasChildren = body.hasChildren;
  target.isResident = body.isResident;
  target.updatedAt = new Date().toISOString();

  return HttpResponse.json({
    status: 200,
    result: true,
    message: "리뷰 수정에 성공했습니다.",
    data: target,
  });
});

export const postCommentHandler = http.post(
  "/reviews/:reviewId/comments",
  async ({ params, request }) => {
    const reviewId = Number(params.reviewId);
    const body = (await request.json()) as { content: string };

    const newComment = {
      commentId: Date.now(),
      reviewId,
      userId: 1,
      nickname: "테스트유저",
      profileImage: "",
      content: body.content, // 💡 사용자가 입력한 댓글 내용
      likeCount: 0,
      isLikedByMe: false,
      isMine: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (!commentStore[reviewId]) commentStore[reviewId] = [];
    commentStore[reviewId].push(newComment);

    return HttpResponse.json({
      status: 201,
      result: true,
      message: "댓글이 성공적으로 등록되었습니다.",
      data: newComment,
    });
  },
);

// 댓글 삭제
export const deleteCommentHandler = http.delete(
  "/reviews/:reviewId/comments/:commentId",
  async ({ params }) => {
    const reviewId = Number(params.reviewId);
    const commentId = Number(params.commentId);

    const comments = commentStore[reviewId];
    if (!comments) {
      return HttpResponse.json(
        { status: 404, message: "댓글이 존재하지 않습니다." },
        { status: 404 },
      );
    }

    const index = comments.findIndex((c) => c.commentId === commentId);
    if (index === -1) {
      return HttpResponse.json(
        { status: 404, message: "댓글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    comments.splice(index, 1);

    return HttpResponse.json({
      status: 200,
      result: true,
      message: "댓글이 성공적으로 삭제되었습니다.",
      data: null,
    });
  },
);

// 리뷰 삭제
export const deleteReviewHandler = http.delete("/reviews/:reviewId", ({ params }) => {
  const reviewId = Number(params.reviewId);
  const index = reviews.findIndex((r) => r.reviewId === reviewId);

  if (index === -1) {
    return HttpResponse.json(
      { status: 404, result: false, message: "리뷰를 찾을 수 없습니다.", data: null },
      { status: 404 },
    );
  }

  reviews.splice(index, 1); // 배열에서 제거

  return HttpResponse.json({
    status: 200,
    result: true,
    message: "리뷰 삭제에 성공했습니다.",
    data: null,
  });
});

// 리뷰 좋아요 토글
const toggleReviewLikeHandler = http.put("/reviews/:reviewId/likes", ({ params }) => {
  const reviewId = Number(params.reviewId);
  const target = reviews.find((r) => r.reviewId === reviewId);

  if (!target) {
    return HttpResponse.json({ status: 404, message: "리뷰를 찾을 수 없습니다." }, { status: 404 });
  }

  target.isLikedByMe = !target.isLikedByMe;
  target.likeCount += target.isLikedByMe ? 1 : -1;

  return HttpResponse.json({
    status: 200,
    result: true,
    message: "리뷰 좋아요 상태가 변경되었습니다.",
    data: {
      reviewId,
      userId: 1,
      isLiked: target.isLikedByMe,
    },
  });
});

// 댓글 좋아요 토글
const toggleCommentLikeHandler = http.put(
  "/reviews/:reviewId/comments/:commentId/likes",
  ({ params }) => {
    const reviewId = Number(params.reviewId);
    const commentId = Number(params.commentId);

    const comments = commentStore[reviewId];
    if (!comments) {
      return HttpResponse.json(
        { status: 404, message: "댓글이 존재하지 않습니다." },
        { status: 404 },
      );
    }

    const comment = comments.find((c) => c.commentId === commentId);
    if (!comment) {
      return HttpResponse.json(
        { status: 404, message: "댓글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    comment.isLikedByMe = !comment.isLikedByMe;
    comment.likeCount += comment.isLikedByMe ? 1 : -1;

    return HttpResponse.json({
      status: 200,
      result: true,
      message: "댓글 좋아요 상태가 업데이트되었습니다.",
      data: {
        reviewId,
        commentId,
        userId: 1,
        isLiked: comment.isLikedByMe,
        likeCount: comment.likeCount,
      },
    });
  },
);

export const reviewHandlers = [
  getReviewListHandler,
  getReviewCommentsHandler,
  patchCommentHandler,
  postReviewHandler,
  patchReviewHandler,
  postCommentHandler,
  deleteCommentHandler,
  deleteReviewHandler,
  toggleReviewLikeHandler,
  toggleCommentLikeHandler,
];
