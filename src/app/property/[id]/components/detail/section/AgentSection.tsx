"use client";

import { useRouter } from "next/navigation";
import GrayButton from "../GrayButton";

export default function AgentSection() {
  const router = useRouter();
  const agentInfo = [
    { label: "대표", value: "김정순" },
    { label: "", value: "경기도 수원시 장안구 경수대로 1083 1층" }, // 주소
    {
      label: "전화",
      value: ["031-271-5309", "010-8711-6151"],
    },
    {
      label: "최근 3개월 집주인확인",
      value: "169건",
    },
  ];

  const feeInfo = [
    {
      label: "중개보수",
      values: ["최대 204만원(VAT 별도)", "상한요율 0.4%", "약 561만원"],
    },
    {
      label: "취득세",
      values: ["취득세 510만원", "지방교육세 51만원", "농어촌특별세 -원"],
    },
  ];

  return (
    <section id="agent" className="mb-[75px] scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">중개정보</div>
      <div className="mb-5 text-subtitle1 text-black">일등 부동산 공인중개사사무소</div>
      <div className="flex flex-col gap-1 text-body2 text-black">
        {agentInfo.map((item, idx) => (
          <div key={idx}>
            {/* label 존재 mapping */}
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
                  <span className="text-caption1">{item.value}</span>
                )}
                {item.label === "대표" && " 등록번호 ⌄"}
              </>
            )}
            {/* label 제외하는 주소 */}
            {!item.label && <>{item.value}</>}
          </div>
        ))}
      </div>

      <div className="border-b-[1px] border-b-gray-200 pb-4" />

      <div className="mb-5 mt-4 text-subtitle1">중개보수 및 세금정보</div>
      {feeInfo.map((item, idx) => (
        <div
          key={idx}
          className={`${idx !== 0 ? "mt-4" : ""} grid grid-cols-[70px_1fr] gap-x-[18px] text-body2 text-black`}
        >
          <div>{item.label}</div>
          <div className="flex flex-col gap-2">
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
        {/* 우선은 홈으로 연동해놨는데 추후 수정할 예정 */}
        <GrayButton
          label={
            <div className="flex items-center justify-center gap-2">
              <span>해당 부동산의 다른 매물 보러가기</span>
              <img src="/icons/arrow-right.svg" alt="arrow" width={14} height={14} />
            </div>
          }
          onClick={() => router.push("/")}
        />{" "}
      </div>
    </section>
  );
}
