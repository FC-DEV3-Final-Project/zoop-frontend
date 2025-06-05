import HeartButton from "@/components/common/HeartButton";

interface InfoBoxProps {
  itemId: number;
}

export default function InfoBox({ itemId }: InfoBoxProps) {
  const infoColumns = [
    [
      { icon: "/icons/building.svg", label: "아파트" },
      { icon: "/icons/stairs.svg", label: "2층" },
    ],
    [
      { icon: "/icons/ruler.svg", label: "34.59m²" },
      { icon: "/icons/parking.svg", label: "가능" },
    ],
  ];

  return (
    <div className="flex w-full flex-col gap-[24px] bg-white px-[20px] py-[18px] text-black">
      <div className="flex justify-between">
        <div className="text-subtitle2">방배마에스트로(주상복합) 1동 703호</div>
        <div className="flex gap-[13px]">
          <HeartButton itemId={itemId} />
          <button>
            <img src="/icons/share.svg" alt="share" width={24} height={24} cursor-pointer />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-title1">전세 5억 3,000</div>
        <div className="text-subtitle3">이수역 도보2분거리 깔끔한 주상복합아파트</div>
      </div>
      {/* 아이콘 섹션 */}
      <div className="flex w-full items-end justify-between">
        <div className="flex gap-[47px]">
          {infoColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {column.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img src={item.icon} alt={item.label} width={24} height={24} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="whitespace-nowrap text-body2 text-gray-800">19시간전</div>
      </div>
    </div>
  );
}
