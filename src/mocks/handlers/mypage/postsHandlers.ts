import { http, HttpResponse } from "msw";

export const postsHandlers = [
  // 리뷰 목록 조회
  http.get("/mypage/reviews", () => {
    return HttpResponse.json({
      data: {
        reviews: [
          {
            reviewId: 1001,
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
            reviewId: 1001,
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
      },
      message: "요청이 정상적으로 처리되었습니다.",
      status: 200,
      result: true,
    });
  }),

  // 댓글 목록 조회
  http.get("/mypage/comments", () => {
    return HttpResponse.json({
      data: {
        comments: [
          {
            commentId: 55,
            content: "저도 이 매물 관심 있었어요!",
            createdAt: "2025-06-08",
            likeCount: 7,
            review: {
              reviewId: 1001,
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
              reviewId: 1001,
              content: "좋은 매물이네요.",
              item: {
                propertyId: 2,
                articleName: "관악산대창센시티 단지",
              },
            },
          },
        ],
      },
      message: "요청이 정상적으로 처리되었습니다.",
      status: 200,
      result: true,
    });
  }),

  http.delete("/mypage/reviews/:reviewId", () => {
    return HttpResponse.json({
      status: 200,
      result: true,
      message: "리뷰 삭제에 성공했습니다.",
      data: null,
    });
  }),

  http.delete("/mypage/comments/:commentId", () => {
    return HttpResponse.json({
      status: 200,
      result: true,
      message: "댓글 삭제에 성공했습니다.",
      data: null,
    });
  }),
];
