"use client";

import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import { useAgentQuery } from "@/queries/property/detail/useAgentQuery";
import { useBrokerFeeQuery } from "@/queries/property/detail/useBrokerFeeQuery";
import DetailActionButton from "@/components/property/detail/DetailActionButton";

const AgentSection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const router = useRouter();

  const { data: agent, isLoading: loadingAgent } = useAgentQuery(propertyId);
  const { data: fee, isLoading: loadingFee } = useBrokerFeeQuery(propertyId);

  if (loadingAgent || loadingFee || !agent || !fee) return null;

  const agentInfo = [
    { label: "", value: agent.address },
    { label: "대표", value: agent.representativeName },
    { label: "등록번호", value: agent.establishRegistrationNo },
    {
      label: "전화",
      value: [agent.representativeTelNo, agent.cellPhoneNo],
    },
  ];

  const feeInfo = [
    {
      label: "중개보수",
      values: [
        fee.brokerFee != null ? `최대 ${fee.brokerFee.toLocaleString()}원` : "중개보수 정보 없음",
        fee.maxBrokerFee != null ? `상한요율 ${fee.maxBrokerFee}%` : "상한요율 정보 없음",
      ],
    },
    {
      label: "취득세",
      values: [
        fee.acquisitionTax != null
          ? `취득세 ${fee.acquisitionTax.toLocaleString()}원`
          : "취득세 정보 없음",
        fee.specialTax != null
          ? `지방교육세 ${fee.specialTax.toLocaleString()}원`
          : "지방교육세 정보 없음",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="agent"
      className="mb-[75px] min-h-[200px] scroll-mt-[158px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">중개정보</div>
      <div className="mb-5 text-title3 text-black">{agent.realtorName}</div>
      <div className="flex flex-col gap-1 text-caption1 text-black">
        {agentInfo.map((item, idx) => (
          <div key={idx}>
            {item.label && (
              <>
                {item.label}{" "}
                {Array.isArray(item.value) ? (
                  item.value.map((v, i) => (
                    <span key={i} className="text-caption1">
                      {v}
                      {i !== item.value.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span className="text-body2">{item.value}</span>
                )}
              </>
            )}
            {!item.label && <div className="text-body2">{item.value}</div>}
          </div>
        ))}
      </div>

      <div className="border-b-[1px] border-b-gray-200 pb-4" />

      <div className="mb-5 mt-4 text-subtitle1">중개보수 및 세금정보</div>
      {feeInfo.map((item, idx) => (
        <div
          key={idx}
          className={`${idx !== 0 ? "mt-4" : ""} grid grid-cols-[70px_1fr] gap-x-[18px] text-black`}
        >
          <div className="text-caption2">{item.label}</div>
          <div className="flex flex-col gap-2 text-body2">
            {item.values.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </div>
        </div>
      ))}

      <p className="mt-4 text-footnote text-black">
        중개보수 및 세금 정보는 실제 적용되는 금액과 다를 수 있습니다.
      </p>
      <div className="mt-4">
        <DetailActionButton
          label={
            <div className="flex items-center justify-center">
              <span>해당 부동산의 다른 매물 보러가기</span>
              <img src="/icons/arrow-right.svg" alt="arrow" width={18} height={18} />
            </div>
          }
          onClick={() => router.push(`/real-estate/${propertyId}`)}
        />
      </div>
    </section>
  );
});

AgentSection.displayName = "AgentSection";

export default AgentSection;
