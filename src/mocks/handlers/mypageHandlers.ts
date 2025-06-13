import { http, HttpResponse } from "msw";

export const mypageHandlers = [
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
            likedPropertyCount: 12,
            recentViewedCount: 5,
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
              propertyId: 101,
              order: 1,
              transactionType: "전세",
              price1: 65000,
              price: "6억5,000",
              tags: ["신축", "풀옵션", "역세권"],
              address: "1찜mock 관악산대창센시티(101동) 101동",
              aptName: "남현한일유앤아이",
              detailAddress: "101동",
              buildingType: "아파트",
              area: "34.5",
              isActive: true,
              isBookmarked: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.5575,
              longitude: 126.9239,
            },
            {
              propertyId: 102,
              order: 1,
              transactionType: "전세",
              price1: 65000,
              price: "6억5,000",
              tags: ["신축", "풀옵션", "역세권"],
              address: "2찜mock 관악산대창센시티(101동) 101동",
              aptName: "남현한일유앤아이",
              detailAddress: "101동",
              buildingType: "아파트",
              area: "34.5",
              isActive: true,
              isBookmarked: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.5575,
              longitude: 126.9239,
            },
          ],
          recentViewedProperties: [
            {
              propertyId: 201,
              order: 1,
              transactionType: "전세",
              price1: 65000,
              price: "6억5,000",
              tags: ["신축", "풀옵션", "역세권"],
              address: "1최근mock 관악산대창센시티(101동) 101동",
              aptName: "남현한일유앤아이",
              detailAddress: "101동",
              buildingType: "아파트",
              area: "34.5",
              isActive: true,
              isBookmarked: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.5575,
              longitude: 126.9239,
            },
            {
              propertyId: 202,
              order: 2,
              transactionType: "전세",
              price1: 65000,
              price: "6억5,000",
              tags: ["신축", "풀옵션", "역세권"],
              address: "2최근mock 관악산대창센시티(101동) 101동",
              aptName: "남현한일유앤아이",
              detailAddress: "101동",
              buildingType: "아파트",
              area: "34.5",
              isActive: true,
              isBookmarked: true,
              imageUrl: "/imgs/propertyExample.png",
              latitude: 37.5575,
              longitude: 126.9239,
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
          { propertyId: 1, address: "1번매물" },
          { propertyId: 2, address: "2번매물" },
        ],
        page: 0,
        size: 2,
        hasNext: true,
      });
    } else if (page === 1) {
      return HttpResponse.json({
        content: [
          { propertyId: 3, address: "3번매물" },
          { propertyId: 4, address: "4번매물" },
        ],
        page: 1,
        size: 2,
        hasNext: true,
      });
    } else if (page === 2) {
      return HttpResponse.json({
        content: [
          { propertyId: 5, address: "5번매물" },
          { propertyId: 6, address: "6번매물" },
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
