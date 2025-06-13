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
  http.get("/mypage/liked-items", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const pageSize = 3; // 한 페이지당 3개씩

    const allProperties = [
      {
        id: 101,
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
        id: 102,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "2찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 103,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "3찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 104,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "4찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 105,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "5찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 106,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "6찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 107,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "7찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 108,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "8찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 109,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "9찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
      {
        id: 110,
        order: 1,
        transactionType: "전세",
        price: "6억5,000",
        address: "10찜mock 관악산대창센시티(101동) 101동",
        aptName: "남현한일유앤아이",
        detailAddress: "101동",
        buildingType: "아파트",
        area: "34.5",
        imageUrl: "/imgs/propertyExample.png",
      },
    ];

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProperties = allProperties.slice(startIndex, endIndex);

    return HttpResponse.json(
      {
        bookmarkedProperties: paginatedProperties,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
];
