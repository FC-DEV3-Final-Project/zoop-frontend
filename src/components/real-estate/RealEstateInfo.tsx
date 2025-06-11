import React from "react";

interface RealEstateInfoProps {
  name: string;
  representative: string;
  registrationNumber: string;
  phone: string;
  address: string;
  sale: number;
  lease: number;
  rent: number;
  statsItems: Array<{
    label: string;
    value: string;
  }>;
}

export default function RealEstateInfo({
  name,
  representative,
  registrationNumber,
  phone,
  address,
  sale,
  lease,
  rent,
  statsItems,
}: RealEstateInfoProps) {
  return (
    <div className="flex flex-col gap-3 bg-white p-5">
      <div className="flex flex-col gap-[3px]">
        <div className="text-caption3">{name}</div>
        <div className="flex gap-[3px]">
          <span className="text-caption3">대표</span>
          <span className="text-body3">{representative}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-caption3">등록번호</span>
          <div className="rounded-small bg-gray-200 px-2 py-0.5 text-body3">
            {registrationNumber}
          </div>
        </div>
        <div className="flex gap-[3px]">
          <span className="text-caption3">전화</span>
          <span className="text-body3">{phone}</span>
        </div>
        <div className="flex gap-[3px]">
          <span className="whitespace-nowrap text-caption3">주소</span>
          <span className="whitespace-normal text-wrap text-body3">{address}</span>
        </div>
      </div>
      <div className="flex gap-1">
        {statsItems.map(({ label, value }) => (
          <div key={value} className="flex gap-0.5">
            <span className="text-caption2">{label}</span>
            <span className="text-caption1 text-blue-800-primary">
              {value === "sale" ? sale : value === "lease" ? lease : rent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
