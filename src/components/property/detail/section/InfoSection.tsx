"use client";

import Image from "next/image";
import React, { forwardRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPropertyInfo } from "@/apis/property/detail/fetchPropertyInfo";

const InfoSection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["propertyInfo", propertyId],
    queryFn: () => fetchPropertyInfo(propertyId),
  });

  if (isLoading || error || !data) return null;

  // 아파트는 principalUse, 빌라는 realestateTypeName 사용
  const 건축물용도 = data.principalUse || data.realestateTypeName || "-";

  const infoList = [
    ["전용/공급면적", `${data.area1}m²/${data.area2}m²`],
    ["건축물 용도", 건축물용도],
    ["아파트 명", data.aptName],
    ["동", data.buildingName],
    ["해당층/전체층", data.floorInfo],
    ["방/욕실 수", `${data.roomCount}개/${data.bathroomCount}개`],
    ["방거실형태", "분리형"], // 하드코딩 그대로 유지
    ["주실기준/방향", `${data.directionBaseTypeName}/${data.direction}`],
    ["현관유형", data.entranceTypeName],
    ["총세대수", `${data.householdCount}세대`],
    ["총주차대수", `${data.parkingCount}대(세대당 ${data.parkingCountPerHousehold}대)`],
    ["주차", data.parkingPossibleYN === "Y" ? "가능" : "불가능"],
    [
      "사용승인일",
      typeof data.useApproveYmd === "string" && data.useApproveYmd.length === 8
        ? `${data.useApproveYmd.slice(0, 4)}.${data.useApproveYmd.slice(4, 6)}.${data.useApproveYmd.slice(6, 8)}`
        : "미정",
    ],
  ];

  return (
    <section
      ref={ref}
      id="info"
      className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">매물정보</div>

      {data.images?.[0]?.imageUrl ? (
        <div className="relative mb-5 h-[200px] w-full overflow-hidden rounded-small bg-gray-500">
          <Image src={data.images[0].imageUrl} alt="매물정보 사진" fill className="object-cover" />
        </div>
      ) : (
        <div className="mb-5 h-[200px] w-full rounded-small bg-gray-500"></div>
      )}

      <div className="grid grid-cols-[auto_1fr] gap-x-[45px] gap-y-[20px] text-black">
        {infoList.map(([label, value], idx) => (
          <React.Fragment key={idx}>
            <div className="text-caption2">{label}</div>
            <div className="text-body2">{value}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
});

export default InfoSection;
