"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import RealEstateInfo from "@/components/real-estate/RealEstateInfo";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import RealEstateCallButton from "@/components/common/RealEstateCallButton";

const statsItems = [
  { label: "월세", value: "rent" },
  { label: "전세", value: "lease" },
  { label: "매매", value: "deal" },
];

const realEstateData = {
  realtyId: 1,
  realtorName: "일등 부동산 공인중개사사무소",
  establishRegistrationNo: "44862989",
  representative: "김정순",
  representativeTelNo: "02-123-1234",
  cellPhoneNo: "010-1111-1111",
  address:
    "경기도 수원시 장안구 경수대로 1083 1층 경기도 수원시 장안구 경수대로 1083 1층 경기도 수원시 장안구 경수대로 1083 1층",
  dealCount: 19,
  leaseCount: 4,
  rentCount: 30,
  statsItems,
};

const phoneNumbers = [
  { label: "registrationNumber", value: realEstateData.representativeTelNo },
  { label: "cellPhoneNo", value: realEstateData.cellPhoneNo },
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

const RealEstatePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
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
          propertyMap={{
            rent: properties,
            lease: properties,
            sale: properties,
          }}
        />
      </div>
      <RealEstateCallButton phonNumber={phoneNumbers} />
    </>
  );
}

export default RealEstatePage;
