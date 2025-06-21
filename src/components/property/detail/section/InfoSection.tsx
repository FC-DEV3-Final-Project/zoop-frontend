"use client";

import Image from "next/image";
import React, { forwardRef } from "react";
import { usePropertyInfoQuery } from "@/queries/property/detail/usePropertyInfoQuery";

const InfoSection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const { data, isLoading, error } = usePropertyInfoQuery(propertyId);

  if (isLoading || error || !data) return null;

  const formatDate = (ymd: string | null | undefined) => {
    if (!ymd || ymd.length !== 8) return "정보 없음";
    return `${ymd.slice(0, 4)}.${ymd.slice(4, 6)}.${ymd.slice(6, 8)}`;
  };

  const infoList = [
    ["전용/공급면적", data.area1 && data.area2 ? `${data.area1}m²/${data.area2}m²` : "정보 없음"],
    ["건축물 용도", data.principalUse || data.realEstateTypeName || "정보 없음"],
    ["해당층/전체층", data.floorInfo || "정보 없음"],
    [
      "방/욕실 수",
      data.roomCount && data.bathroomCount
        ? `${data.roomCount}개/${data.bathroomCount}개`
        : "정보 없음",
    ],
    [
      "주실기준/방향",
      data.directionBaseTypeName && data.direction
        ? `${data.directionBaseTypeName}/${data.direction}`
        : "정보 없음",
    ],
    ["현관유형", data.entranceTypeName || "정보 없음"],
    ["총세대수", data.householdCount ? `${data.householdCount}세대` : "정보 없음"],
    [
      "총주차대수",
      data.parkingCount
        ? `${data.parkingCount}대${data.parkingCountPerHousehold ? ` (세대당 ${data.parkingCountPerHousehold}대)` : ""}`
        : "정보 없음",
    ],
    [
      "주차",
      data.parkingPossibleYN === "Y"
        ? "가능"
        : data.parkingPossibleYN === "N"
          ? "불가능"
          : "정보 없음",
    ],
    ["사용승인일", formatDate(data.useApproveYmd)],

    ...(data.aptName ? [["아파트 명", data.aptName]] : []),
    ...(data.buildingName ? [["동", data.buildingName]] : []),
  ];

  return (
    <section
      ref={ref}
      id="info"
      className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">매물정보</div>
      {data.images?.[0]?.imageUrl && (
        <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden rounded-small bg-white">
          <Image
            src={data.images[0].imageUrl}
            alt="매물정보 사진"
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            className="object-contain"
          />
        </div>
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
