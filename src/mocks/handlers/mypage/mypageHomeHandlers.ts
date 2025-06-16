import { http, HttpResponse } from "msw";

export const mypageHomeHandlers = [
  http.get("/api/mypage/:id/user-info", ({ params }) => {
    // params.id를 활용할 수도 있음
    return HttpResponse.json(
      {
        account: {
          email: "kakao_user@example.com",
          nickname: "지윤",
          profileImage: `https://api.dicebear.com/7.x/miniavs/png?seed=${params.id}`,
        },
        message: "요청이 정상적으로 처리되었습니다.",
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  // /api/mypage/home mock
  http.get("/mypage/home", () => {
    return HttpResponse.json(
      {
        data: {
          profile: {
            nickname: "mock",
            profileImageUrl: "/imgs/default-profile.jpg",
          },
          activity: {
            bookmarkedCount: 6,
            recentViewedCount: 2,
          },
          myReviews: [
            {
              reviweId: 1,
              content: "mock 교통이 너무 편함 단, 퇴근러시 사람 많음...",
              likeCount: 5,
              commentCount: 3,
            },
            {
              reviweId: 2,
              content: "mock 아이들 학교가 가까워서 좋아요, 교통도 좋아요.",
              likeCount: 3,
              commentCount: 3,
            },
          ],
          myComments: null,
          bookmarkedProperties: [
            {
              propertyId: 1,
              order: 1,
              tradeTypeName: "전세",
              rentPrice: undefined,
              warrantPrice: 53000,
              dealPrice: 0,
              dealOrWarrantPrc: "5억 3,000",
              summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
              realestateTypeName: "주상복합",
              aptName: "방배마에스트로",
              articleName: "방배마에스트로",
              buildingName: "1동 703호",
              area2: "34.5",
              isBookmarked: false,
              isActive: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              propertyId: 2,
              order: 2,
              tradeTypeName: "전세",
              rentPrice: undefined,
              warrantPrice: 27500,
              dealPrice: 0,
              dealOrWarrantPrc: "2억 7,500",
              summary: ["헬스장 근처", "카페많음", "대학교 인접"],
              realestateTypeName: "주상복합",
              aptName: "방배마에스트로",
              articleName: "방배마에스트로",
              buildingName: "201동 1103호",
              area2: "38.67",
              isBookmarked: false,
              isActive: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.471515,
              longitude: 126.972487,
            },
          ],
          recentViewedProperties: [
            {
              propertyId: 3,
              order: 3,
              tradeTypeName: "전세",
              rentPrice: undefined,
              warrantPrice: 53000,
              dealPrice: 0,
              dealOrWarrantPrc: "5억 3,000",
              summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
              realestateTypeName: "주상복합",
              aptName: "방배마에스트로",
              articleName: "방배마에스트로",
              buildingName: "1동 703호",
              area2: "34.5",
              isBookmarked: false,
              isActive: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              propertyId: 4,
              order: 4,
              tradeTypeName: "전세",
              rentPrice: undefined,
              warrantPrice: 27500,
              dealPrice: 0,
              dealOrWarrantPrc: "2억 7,500",
              summary: ["헬스장 근처", "카페많음", "대학교 인접"],
              realestateTypeName: "주상복합",
              aptName: "방배마에스트로",
              articleName: "방배마에스트로",
              buildingName: "201동 1103호",
              area2: "38.67",
              isBookmarked: false,
              isActive: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.471515,
              longitude: 126.972487,
            },
          ],
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),

  // /api/mypage/home mock
  http.get("/mypage/bookmarked-properties", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const size = Number(url.searchParams.get("size")) || 2;

    if (page === 0) {
      return HttpResponse.json({
        content: [
          { id: 1, realestateTypeName: "1번매물" },
          { id: 2, realestateTypeName: "2번매물" },
        ],
        page: 0,
        size: 2,
        hasNext: true,
      });
    } else if (page === 1) {
      return HttpResponse.json({
        content: [
          { propertyId: 5, realestateTypeName: "3번매물" },
          { propertyId: 6, realestateTypeName: "4번매물" },
        ],
        page: 1,
        size: 2,
        hasNext: true,
      });
    } else if (page === 2) {
      return HttpResponse.json({
        content: [
          { propertyId: 7, realestateTypeName: "5번매물" },
          { propertyId: 8, realestateTypeName: "6번매물" },
        ],
        page: 2,
        size: 2,
        hasNext: false,
      });
    }

    return HttpResponse.json({
      content: [],
      page,
      size,
      hasNext: false,
    });
  }),
];
