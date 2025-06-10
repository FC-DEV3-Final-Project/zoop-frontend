import React from "react";

interface RealEstateInfoProps {
  name: string;
  representative: string;
  registrationNumber: string;
  phone: string;
  address: string;
  stats: {
    sale: number;
    lease: number;
    rent: number;
  };
}

const STATS_ITEMS = [
  { label: "매매", key: "sale" },
  { label: "전세", key: "lease" },
  { label: "월세", key: "rent" },
] as const;

export default function RealEstateInfo({
  name,
  representative,
  registrationNumber,
  phone,
  address,
  stats,
}: RealEstateInfoProps) {
  return (
    <div className="flex flex-col gap-3 bg-white p-5">
      <div className="flex flex-col gap-[3px]">
        <div className="text-subtitle3">{name}</div>
        <div className="flex gap-[3px]">
          <span className="text-subtitle3">대표</span>
          <span className="text-subtitle3">{representative}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-subtitle3">등록번호</span>
          <div className="rounded-small bg-gray-100 px-2 py-0.5">
            <span className="text-subtitle3">{registrationNumber}</span>
          </div>
        </div>
        <div className="flex gap-[3px]">
          <span className="text-subtitle3">전화</span>
          <span className="text-subtitle3">{phone}</span>
        </div>
        <div className="flex gap-[3px]">
          <span className="text-subtitle3">주소</span>
          <span className="text-subtitle3">{address}</span>
        </div>
      </div>
      <div className="flex gap-1">
        {STATS_ITEMS.map(({ label, key }) => (
          <div key={key} className="flex gap-0.5">
            <span className="text-body1">{label}</span>
            <span className="text-body1 text-blue-700">{stats[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
