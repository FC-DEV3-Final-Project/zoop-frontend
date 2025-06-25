"use client";

import React, { forwardRef } from "react";
import { useTransactionQuery } from "@/queries/property/detail/useTransactionQuery";

const DealSection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const { data: deal, isLoading, error } = useTransactionQuery(propertyId);

  if (isLoading || error || !deal) return null;

  const dealInfo = [
    {
      label: "거래방식",
      type: deal.tradeTypeName,
      amount:
        deal.tradeTypeName === "월세"
          ? `${deal.rentPrice}만원 / 보증금 ${deal.dealOrWarrantPrc}만원`
          : `${deal.dealOrWarrantPrc}만원`,
    },
    {
      label: "관리비",
      value: `${deal.etcFeeAmount?.toLocaleString() ?? "0"}원`,
    },
    {
      label: "융자금",
      value: `${(deal.financePrice ?? 0).toLocaleString()}원`,
    },
    {
      label: "입주가능일",
      value:
        typeof deal.moveInPossibleYmd === "string" && deal.moveInPossibleYmd.length === 8
          ? `${deal.moveInPossibleYmd.slice(0, 4)}.${deal.moveInPossibleYmd.slice(4, 6)}.중순`
          : "미정",
    },
  ];

  return (
    <section
      ref={ref}
      id="deal"
      className="mb-2 min-h-[200px] scroll-mt-[158px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">거래정보</div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[63px] gap-y-5 text-black">
        {dealInfo.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="text-caption2">{item.label}</div>
            <div className="text-body2">
              {item.label === "거래방식" ? `${item.type} ${item.amount}` : item.value}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
});

DealSection.displayName = "DealSection";

export default DealSection;
