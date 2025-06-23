"use client";

interface GoodBadSummaryProps {
  good: string[];
  bad: string[];
}

const GoodBadSummary = ({ good, bad }: GoodBadSummaryProps) => {
  const renderBlock = (label: "GOOD" | "BAD", items: string[]) => (
    <div className="flex min-w-[45%] flex-1 flex-col gap-3 px-2 py-3">
      <div className="rounded-lg border border-blue-800-primary px-3 py-1 text-center text-caption1 text-blue-800-primary">
        {label}
      </div>
      <ul className="list-decimal pl-5 text-body2 text-black">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );

  if (good.length === 0 && bad.length === 0) {
    return (
      <div className="text-body2 text-gray-500">아직 긍정/부정 리뷰 분석 결과가 없습니다.</div>
    );
  }

  return (
    <div className="flex flex-row justify-between gap-[15px] overflow-x-auto">
      {good.length > 0 && renderBlock("GOOD", good)}
      {bad.length > 0 && renderBlock("BAD", bad)}
    </div>
  );
};

export default GoodBadSummary;
