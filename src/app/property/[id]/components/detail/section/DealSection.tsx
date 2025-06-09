import React from "react";

export default function DealSection() {
  const dealInfo = [
    {
      label: "거래방식",
      type: "전세",
      amount: "5억 3,000만원",
    },
    {
      label: "관리비",
      value: "18만원",
    },
    {
      label: "융자금",
      value: "융자금 없음",
    },
    {
      label: "입주가능일",
      value: "2025. 06. 중순",
    },
  ];

  return (
    <section id="deal" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">거래정보</div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[63px] gap-y-5 text-subtitle3 text-black">
        {dealInfo.map((item, idx) => (
          <React.Fragment key={idx}>
            <div>{item.label}</div>
            <div>{item.label === "거래방식" ? `${item.type} ${item.amount}` : item.value}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
