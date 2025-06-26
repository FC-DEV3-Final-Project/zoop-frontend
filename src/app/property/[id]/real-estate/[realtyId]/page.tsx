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

const RealEstatePage = ({ params }: { params: Promise<{ realtyId: string }> }) => {
  const router = useRouter();
  const { realtyId: realtyIdString } = use(params);
  const realtyId = Number(realtyIdString);

  // 부동산 정보
  const {
    data: realEstateInfoResponse,
    isLoading: isInfoLoading,
    error: infoError,
  } = useRealEstateInfoQuery(Number(realtyId), !!realtyId);

  const phoneNumbers = [
    ...(realEstateInfoResponse?.data?.representativeTelNo
      ? [
          {
            label: "representativeTelNo",
            value: realEstateInfoResponse.data.representativeTelNo,
          },
        ]
      : []),
    ...(realEstateInfoResponse?.data?.cellPhoneNo
      ? [{ label: "cellPhoneNo", value: realEstateInfoResponse.data.cellPhoneNo }]
      : []),
  ];

  if (isInfoLoading) {
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

  if (infoError || !realEstateInfoResponse || !realEstateInfoResponse.data) {
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
      <div className="flex min-h-screen flex-col bg-white pb-[76px] pt-12">
        <RealEstateInfo {...realEstateData} />
        <PropertyListSection
          showMapViewButton={false}
          tabOptions={statsItems}
          propertyCount={{
            rent: realEstateData.rentCount,
            lease: realEstateData.leaseCount,
            deal: realEstateData.dealCount,
          }}
          realtyId={Number(realtyId)}
        />
        <RealEstateCallButton phoneNumber={phoneNumbers} />
      </div>
    </>
  );
};

export default RealEstatePage;