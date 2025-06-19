import { http, HttpResponse } from "msw";

const realEstateInfoHandlers = [
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
];

export default realEstateInfoHandlers;