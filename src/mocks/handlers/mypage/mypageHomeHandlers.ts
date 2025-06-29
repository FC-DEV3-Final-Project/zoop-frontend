import { http, HttpResponse } from "msw";

export const mypageHomeHandlers = [
  // 마이페이지 홈 데이터
  http.get("/mypage/home", () => {
    return HttpResponse.json(
      {
        data: {
          userInfo: {
            nickname: "mock",
            profileImageUrl: "/imgs/default-profile.svg",
          },
          activity: {
            bookmarkedPropertyCount: 6,
            recentViewedPropertyCount: 2,
          },
          reviewOrComments: [
            {
              reviewId: 9,
              content: "review 예시 어쩌구 저쩌구 리뷰입니다.",
              createdAt: "2025-06-20",
              likeCount: 1,
              commentCount: 0,
              item: {
                propertyId: null,
                articleName: "그루",
              },
            },
            {
              commentId: 3,
              content: "comment 예시 어쩌구 저쩌구 댓글입니다.",
              createdAt: "2025-06-20",
              likeCount: 0,
              review: {
                reviewId: 3,
                content: "Lovely community and staff.",
                item: {
                  complexId: 33,
                  propertyId: null,
                  articleName: "연립(1184)",
                },
              },
            },
          ],
          bookmarkedProperties: [
            {
              propertyId: 100,
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
              imageUrl: "",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              propertyId: 200,
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
            //아파트
            {
              order: 1,
              propertyId: 1001,
              tradeTypeName: "월세",
              rentPrice: 150,
              warrantPrice: 30000,
              dealOrWarrantPrc: "3억",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 1",
              buildingName: "101동",
              realEstateTypeName: "아파트",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 2,
              propertyId: 1002,
              tradeTypeName: "전세",
              warrantPrice: 65000,
              dealOrWarrantPrc: "6억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 2",
              buildingName: "101동",
              realEstateTypeName: "아파트",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 3,
              propertyId: 1003,
              tradeTypeName: "매매",
              dealPrice: 135000,
              dealOrWarrantPrc: "13억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 3",
              buildingName: "101동",
              realEstateTypeName: "아파트",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            //오피스텔
            {
              order: 4,
              propertyId: 1004,
              tradeTypeName: "월세",
              rentPrice: 250,
              warrantPrice: 50000,
              dealOrWarrantPrc: "5억",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 4",
              buildingName: "1동",
              realEstateTypeName: "오피스텔",
              area2: "34.5",
              isBookmarked: false,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 5,
              propertyId: 1005,
              tradeTypeName: "전세",
              warrantPrice: 65000,
              dealOrWarrantPrc: "6억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 5",
              buildingName: "1동",
              realEstateTypeName: "오피스텔",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 6,
              propertyId: 1006,
              tradeTypeName: "매매",
              dealPrice: 135000,
              dealOrWarrantPrc: "13억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 6",
              buildingName: "1동",
              realEstateTypeName: "오피스텔",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            //빌라
            {
              order: 7,
              propertyId: 1007,
              tradeTypeName: "월세",
              rentPrice: 15,
              warrantPrice: 5000,
              dealOrWarrantPrc: "2억 5,700",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              //realEstateTypeName이 원룸/투룸 또는 빌라인 경우 articleName 사용으로 대체
              articleName: "최근 본 매물 7",
              //데이터가 동 데이터가 아닌 "다인일"같은 데이터나 빌라로 들어감
              buildingName: "다인힐",

              realEstateTypeName: "빌라",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 8,
              propertyId: 1008,
              tradeTypeName: "전세",
              warrantPrice: 65000,
              dealOrWarrantPrc: "6억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              articleName: "최근 본 매물 8",
              buildingName: "다인힐",
              realEstateTypeName: "빌라",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 9,
              propertyId: 1009,
              tradeTypeName: "매매",
              dealPrice: 135000,
              dealOrWarrantPrc: "13억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              aptName: "최근 본 매물 9",
              articleName: "최근 본 매물 9",
              buildingName: "다인힐",
              realEstateTypeName: "빌라",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            //원룸/투룸
            {
              order: 10,
              propertyId: 1010,
              tradeTypeName: "월세",
              rentPrice: 15,
              warrantPrice: 5000,
              dealOrWarrantPrc: "2억 5,700",
              summary: ["신축", "풀옵션", "역세권"],
              articleName: "최근 본 매물 10",
              buildingName: "A동",
              realEstateTypeName: "단독",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 11,
              propertyId: 1011,
              tradeTypeName: "전세",
              warrantPrice: 65000,
              dealOrWarrantPrc: "6억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              articleName: "최근 본 매물 11",
              buildingName: "1동",
              realEstateTypeName: "다가구",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
              latitude: 37.471515,
              longitude: 126.972487,
            },
            {
              order: 12,
              propertyId: 1012,
              tradeTypeName: "매매",
              dealPrice: 135000,
              dealOrWarrantPrc: "13억5,000",
              summary: ["25년이상", "올수리", "역세권", "대단지"],
              articleName: "최근 본 매물 12",
              buildingName: "1동",
              realEstateTypeName: "단독",
              area2: "34.5",
              isBookmarked: true,
              imageUrl: "https://cdn.example.com/images/123.jpg",
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

  // 북마크 목록 조회 (무한스크롤)
  http.get("/mypage/histories/bookmarked-properties", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const size = Number(url.searchParams.get("size")) || 2;

    if (page === 0) {
      return HttpResponse.json({
        data: {
          myProperties: [
            { propertyId: 1, realEstateTypeName: "1번매물 찜한 매물" },
            { propertyId: 2, realEstateTypeName: "2번매물 찜한 매물" },
          ],
          page: 0,
          size: 2,
          hasNext: true,
        },
      });
    } else if (page === 1) {
      return HttpResponse.json({
        data: {
          myProperties: [
            { propertyId: 3, realEstateTypeName: "3번매물 찜한 매물" },
            { propertyId: 4, realEstateTypeName: "4번매물 찜한 매물" },
          ],
          page: 1,
          size: 2,
          hasNext: true,
        },
      });
    } else if (page === 2) {
      return HttpResponse.json({
        data: {
          myProperties: [
            { propertyId: 5, realEstateTypeName: "5번매물 찜한 매물" },
            { propertyId: 6, realEstateTypeName: "6번매물 찜한 매물" },
          ],
          page: 2,
          size: 2,
          hasNext: false,
        },
      });
    }

    return HttpResponse.json({
      data: {
        myProperties: [],
        page,
        size,
        hasNext: false,
      },
    });
  }),

  // 최근 본 매물 추가
  http.post("/mypage/histories/recent-properties/:propertyId", () => {
    return HttpResponse.json(
      {
        status: 201,
        message: "성공적으로 등록되었습니다.",
      },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
];
