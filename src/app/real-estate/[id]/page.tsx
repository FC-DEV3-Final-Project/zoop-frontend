"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import RealEstateInfo from "@/components/real-estate/RealEstateInfo";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import RealEstateCallButton from "@/components/common/RealEstateCallButton";
import { useRealEstateInfoQuery } from "@/queries/real-estate/useRealEstateInfoQuery";
import { use } from "react";

const statsItems = [
  { label: "월세", value: "rent" },
  { label: "전세", value: "lease" },
  { label: "매매", value: "deal" },
];

const phoneNumbers = [
  { label: "registrationNumber", value: "010-1234-5678" },
  { label: "cellPhoneNo", value: "010-1234-5678" },
];

const properties = [
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
  {
    propertyId: 5,
    order: 5,
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
    propertyId: 6,
    order: 6,
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
];

const RealEstatePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const { id } = use(params);
  const realtyId = parseInt(id);

  const {
    data: realEstateInfoResponse,
    isLoading,
    error,
  } = useRealEstateInfoQuery(realtyId, { realtyId }, !!realtyId);

  if (isLoading) {
    return (
      <>
        <Header>
          <Header.Prev onPrevClick={() => router.back()} />
          <Header.Title>로딩 중...</Header.Title>
        </Header>
        <div className="flex h-64 items-center justify-center">
          <div>부동산 정보를 불러오는 중...</div>
        </div>
      </>
    );
  }

  if (error || !realEstateInfoResponse || !realEstateInfoResponse.data) {
    return (
      <>
        <Header>
          <Header.Prev onPrevClick={() => router.back()} />
          <Header.Title>오류</Header.Title>
        </Header>
        <div className="flex h-64 items-center justify-center">
          <div>부동산 정보를 불러올 수 없습니다.</div>
        </div>
      </>
    );
  }

  const realEstateData = {
    ...realEstateInfoResponse.data,
    statsItems,
  };

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{realEstateData.realtorName}</Header.Title>
      </Header>
      <RealEstateInfo {...realEstateData} />
      <div className="pb-[76px]">
        <PropertyListSection
          showMapViewButton={false}
          tabOptions={statsItems}
          propertyCount={{
            rent: realEstateData.rentCount,
            lease: realEstateData.leaseCount,
            deal: realEstateData.dealCount,
          }}
          propertyMap={{
            rent: properties,
            lease: properties,
            deal: properties,
          }}
        />
      </div>
      <RealEstateCallButton phoneNumber={phoneNumbers} />
    </>
  );
};

export default RealEstatePage;
