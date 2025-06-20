import { http, HttpResponse } from "msw";

export const realEstateHandlers = [
  // 부동산 정보 조회
  http.post("/properties/:propertyId/realty", async ({ request }) => {
    const body = (await request.json()) as any;
    const { realtyId } = body;

    // Mock 응답 데이터
    const mockRealtyInfo = {
      realtyId: realtyId,
      realtorName: "일등 부동산 공인중개사사무소",
      establishRegistrationNo: "44862989",
      address: "서울특별시 관악구 남현동 1083-6",
      representativeTelNo: "02-123-1234",
      cellPhoneNo: "010-1111-1111",
      dealCount: 12,
      leaseCount: 23,
      rentCount: 123,
      representativeName: "김정순",
    };

    return HttpResponse.json(
      {
        data: mockRealtyInfo,
        status: 200,
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

  // 부동산 매물 리스트 조회 (무한스크롤)
  http.get("/realties/:realtyId/properties", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const size = Number(url.searchParams.get("size")) || 2;

    if (page === 0) {
      return HttpResponse.json({
        content: [
          { propertyId: 1, area2: "1번매물" },
          { propertyId: 2, area2: "2번매물" },
        ],
        page: 0,
        size: 2,
        hasNext: true,
      });
    } else if (page === 1) {
      return HttpResponse.json({
        content: [
          { propertyId: 3, area2: "3번매물" },
          { propertyId: 4, area2: "4번매물" },
        ],
        page: 1,
        size: 2,
        hasNext: true,
      });
    } else if (page === 2) {
      return HttpResponse.json({
        content: [
          { propertyId: 5, area2: "5번매물" },
          { propertyId: 6, area2: "6번매물" },
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
