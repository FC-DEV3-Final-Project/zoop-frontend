"use client";

import BookmarkButton from "@/components/common/BookmarkButton";
import { formatRelativeDate } from "@/utils/property/dateFormat";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

interface InfoBoxProps {
  propertyInfo: {
    propertyId: number;
    articleName: string;
    articleFeatureDesc: string;
    tradeTypeName: string;
    dealOrWarrantPrc: string;
    realEstateTypeName: string;
    correspondingFloorCount: string;
    area2: string;
    isBookmarked: boolean;
    warrantPrice: number;
    rentPrice: number;
    parkingPossibleYN: "Y" | "N";
    exposeStartYMD: string;
    summary: string[];
  };
}

const InfoBox = ({ propertyInfo }: InfoBoxProps) => {
  const router = useRouter();
  const {
    propertyId,
    articleName,
    articleFeatureDesc,
    tradeTypeName,
    dealOrWarrantPrc,

    realEstateTypeName,
    correspondingFloorCount,
    area2,
    isBookmarked,
    parkingPossibleYN,
    summary,
    exposeStartYMD,
  } = propertyInfo;

  const infoColumns = [
    [
      { icon: "/icons/building.svg", label: realEstateTypeName },
      { icon: "/icons/stairs.svg", label: `${correspondingFloorCount}층` },
    ],
    [
      { icon: "/icons/ruler.svg", label: `${area2}m²` },
      { icon: "/icons/parking.svg", label: parkingPossibleYN === "Y" ? "가능" : "불가능" },
    ],
  ];

  const showBookmarkToast = (added: boolean) => {
    toast(
      ({ id }) => (
        <CustomToast
          message={added ? "찜한 매물에 추가했어요." : "찜한 매물에서 제외됐어요."}
          actionText={added ? "찜한 매물 보기" : undefined}
          onClickAction={
            added
              ? () => {
                  router.push("/mypage");
                  toast.dismiss(id);
                }
              : undefined
          }
        />
      ),
      { duration: 2000 },
    );
  };

  return (
    <div className="flex w-full flex-col gap-[24px] bg-white px-[20px] py-[18px] text-black">
      <div className="flex justify-between">
        <div className="text-subtitle2">{articleName}</div>
        <div className="flex gap-[13px]">
          <BookmarkButton
            itemId={propertyId}
            initialBookmarked={isBookmarked}
            onSuccess={showBookmarkToast}
          />
          <button>
            <img src="/icons/share.svg" alt="share" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="text-title1">
          {tradeTypeName === "월세"
            ? `${tradeTypeName} ${dealOrWarrantPrc}/${Number(propertyInfo.rentPrice).toLocaleString()}`
            : `${tradeTypeName} ${dealOrWarrantPrc}`}
        </div>
        <div className="text-subtitle3">{articleFeatureDesc}</div>
        <div className="flex flex-wrap gap-[5px]">
          {summary.map((label, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-full bg-blue-050-bg px-[9.6px] py-[2.4px] text-caption2 text-blue-800-primary"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full items-end justify-between">
        <div className="flex gap-[47px]">
          {infoColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {column.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img src={item.icon} alt={item.label} width={18} height={18} />
                  <span className="text-body2">{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="whitespace-nowrap text-body2 text-gray-800">
          {formatRelativeDate(exposeStartYMD)}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
