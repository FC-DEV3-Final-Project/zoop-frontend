import { http, HttpResponse } from "msw";

const basicInfoHAndler = http.get("/properties/:propertyId/basic_info", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    tradeTypeName: "매매",
    articleName: "남현한일유앤아이201동",
    dealPrice: 530000,
    dealOrWarrantPrc: "5억3,000",
    articleFeatureDesc: "조용하며 앞뒤 베란다 넓고 밝고 햇살 가득한집",
    realEstateTypeName: "아파트",

    area2: "107.01",
    correspondingFloorCount: "7",
    parkingPossibleYN: "Y",
    isBookmarked: true,
    exposeStartYMD: "20250516",
    summary: ["신축", "풀옵션", "역세권"],

    images: [
      // 다중 이미지 리스트
      {
        imageUrl: "",
        imageType: "STRUCTURE",
        imageOrder: 0,
        isMain: true,
      },
      {
        imageUrl: "",
        imageType: "STRUCTURE",
        imageOrder: 1,
        isMain: false,
      },
      {
        imageUrl: "",
        imageType: "ARTICLE",
        imageOrder: 2,
        isMain: false,
      },
    ],
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const transactionHandler = http.get("/properties/:propertyId/transaction", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    tradeTypeName: "전세",
    warrantPrice: 53000,
    dealOrWarrantPrc: "5억3000",
    etcFeeAmount: 180000,
    financePrice: 0,
    moveInPossibleYmd: "20270114",
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const propertyInfoHandler = http.get("/properties/:propertyId/property_info", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    area1: "84.9",
    area2: "107.01",
    principalUse: "공동주택",
    aptName: "남현한일유앤아이",
    buildingName: "101동",
    floorInfo: "4/11",
    roomCount: "3",
    bathroomCount: "2",
    directionBaseTypeName: "거실 기준",
    direction: "남동향",
    entranceTypeName: "계단식",
    householdCount: "170",
    parkingCount: "59",
    parkingCountPerHousehold: "1.2",
    parkingPossibleYN: "Y",
    useApproveYmd: "20050805",
    images: [
      {
        imageUrl: "",
        imageType: "STRUCTURE",
        imageOrder: 1,
        main: true,
      },
    ],
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const facilitiesHandler = http.get("/properties/:propertyId/facilities", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    heatMethodTypeName: "개별난방",
    securityFacilities: ["비디오폰", "CCTV", "현관보안"],
    lifeFacilities: ["신발장", "냉장고", "세탁기", "비데", "싱크대", "인덕션레인지"],
    etcFacilities: ["엘리베이터", "화재경보기", "베란다"],
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const locationHandler = http.get("/properties/:propertyId/location", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    exposureAddress: "서울시 서울 관악구 봉천동",
    latitude: 37.471515,
    longitude: 126.972487,
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const descriiptionHandler = http.get("/properties/:propertyId/description", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    articleFeatureDescription: "방3 화장실2, 국악고.포이초 도보 5분 거리, 현재 전세 4억",
    detailDescription:
      "1. 방3  화장실2이며 전용 21.44평으로  거실 넓고 베란다 따로 있음. \n2. 거실 기준 남동향으로  주차 가능. 월 관리비 1만5000원.\n3. 현재 전세 4억으로 2027년 2월경이 만기임.(갭 4억이면 매수 가능함.)\n4. 국악고, 포이초 도보 5분에서 7분 거리임.\n5. 도보 5분 거리에 고객사랑마트(중형할인마트) 있어서 매우 편리함.\n6. 차량 10분 거리 내에 양재하나로마트, 이마트, 삼성서울병원, 강남세브란스 있음.\n7. 안심부동산 : 010-5205-5440, 02-573-8945",
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const agentHandler = http.get("/properties/:propertyId/agent", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    realtorName: "미래공인중개사사무소",
    representativeName: "유한철",
    establishRegistrationNo: "92480000-04023",
    address: "서울특별시 관악구 봉천동 1673-33 1층",
    representativeTelNo: "02-888-3111",
    cellPhoneNo: "010-8480-9292",
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

const brokerFeeHandler = http.get("/properties/:propertyId/broker_fee", ({ params }) => {
  const { propertyId } = params;

  const data = {
    propertyId: Number(propertyId),
    maxBrokerFee: 0.4, // 상한요율 0.4%
    brokerFee: 2400000, // 중개보수
    acquisitionTax: 6000000, // 취득세
    specialTax: 2200000, // 지방교육세
  };

  return HttpResponse.json({
    status: 200,
    message: "요청이 정상적으로 처리되었습니다.",
    data,
  });
});

export const detailHandlers = [
  basicInfoHAndler,
  transactionHandler,
  propertyInfoHandler,
  facilitiesHandler,
  locationHandler,
  descriiptionHandler,
  agentHandler,
  brokerFeeHandler,
];
