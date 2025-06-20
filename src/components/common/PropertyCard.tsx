"use client";

import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";

interface PropertyCardProps {
  // BE 전달 데이터
  // 필수데이터
  propertyId: number;
  order: number;
  tradeTypeName: string; // ex."월세", "전세", "매매"
  summary: string[]; // ex. ["신축", "풀옵션", "역세권"],없으면 []
  realEstateTypeName: string; //  ex."아파트","오피스텔", "빌라", "단독", "다가구"
  dealOrWarrantPrc: string; // ex."3억"
  buildingName: string; // ex. "101동"  빌라인 경우  "빌라" 또는 "다인힐"등 건물명
  area2: string; // ex."34.5",
  isBookmarked: boolean; // ex. true,
  imageUrl: string; // ex. "https://cdn.example.com/images/123.jpg", 없으면 ""
  // latitude: number; // ex. 37.471515
  // longitude: number; // ex. 126.972487

  // 선택데이터
  rentPrice?: number; // ex.150 월세인 경우만 존재
  // warrantPrice?: number; // ex.65000 월세/전세인 경우만 존재, fe 사용X
  // dealPrice?: number; // ex.135000 매매인 경우만 존재, fe 사용X
  aptName?: string; // ex."남현한일유앤아이" 등 건물명 (아파트/오피스텔인 경우만 사용)
  articleName?: string; // ex. "빌라","단독" 또는 "다인힐","메트하임" 등 건물명 (아파트/오피스텔이 아닌 경우만 사용)
  isActive?: boolean; // ex.true,

  // FE 추가 속성
  size?: "sm" | "md";
  isNumberVisible?: boolean;
}

const PropertyCard = ({
  propertyId,
  order,
  tradeTypeName,
  summary,
  realEstateTypeName,
  dealOrWarrantPrc,
  buildingName,
  area2,
  isBookmarked,
  imageUrl,
  // latitude,
  // longitude,
  rentPrice,
  // warrantPrice,
  // dealPrice,
  aptName,
  articleName: originalArticleName,
  isActive = true,
  size = "md",
  isNumberVisible = true,
}: PropertyCardProps) => {
  const router = useRouter();

  const articleName =
    realEstateTypeName === "아파트" || realEstateTypeName === "오피스텔"
      ? aptName
      : originalArticleName;

  const handleCardClick = () => {
    router.push(`/property/${propertyId}`);
  };

  return (
    <div
      className={`flex w-full items-center gap-3 self-stretch bg-white ${size === "sm" ? "px-3" : "px-5"} cursor-pointer py-2.5`}
      onClick={handleCardClick}
    >
      {/* 이미지 섹션 */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-small">
        <img
          src={imageUrl || "/imgs/default-property-image.svg"}
          alt={`${tradeTypeName} ${dealOrWarrantPrc}`}
          className="cur h-full w-full object-cover"
        />
        {/* 목록 번호 */}
        {order && isActive && isNumberVisible && (
          <div className="absolute left-0 top-0 flex h-5 w-5 items-center overflow-hidden rounded-br bg-black px-[8px] pb-[3px] pl-[7px] pt-[2px]">
            <p className="text-[10px] font-medium text-white">{order}</p>
          </div>
        )}
        {!isActive && (
          <div className="absolute left-0 top-0 h-24 w-24 overflow-hidden rounded-lg bg-white/80">
            <div className="absolute bottom-0 left-0 inline-flex h-6 w-24 items-center justify-center gap-2.5 bg-black/60 p-[5px]">
              <div className="text-center text-caption3 leading-none text-white">거래 완료</div>
            </div>
          </div>
        )}
      </div>

      {/* 정보 섹션 */}
      <div className="inline-flex flex-1 flex-col justify-between self-stretch">
        <div
          className={`flex flex-col gap-0.5 self-stretch ${isActive ? "text-black" : "text-gray-600-hint"}`}
        >
          {/* 제목과 하트 버튼 */}
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="text-grey-100 flex-1 justify-start text-subtitle2">
              {tradeTypeName} {dealOrWarrantPrc}
              {rentPrice ? `/${rentPrice}` : ""}
            </div>
            <HeartButton itemId={propertyId} />
          </div>

          {/* 주소와 건물 정보 */}
          <div className="flex flex-col items-start gap-0.5 self-stretch">
            <div className="inline-flex items-center gap-1 self-stretch">
              <p className="text-grey-100 max-w-fit truncate text-body2">{articleName}</p>
              <p className="min-w-fit text-body2">{buildingName}</p>
            </div>
            <div className="h-5 self-stretch text-body2">
              {realEstateTypeName}, {area2}㎡
            </div>
          </div>
        </div>

        {/* 태그 리스트 */}
        <div className="flex h-[19px] flex-wrap items-center gap-1 self-stretch overflow-hidden">
          {summary?.map((tag, index) => (
            <div
              key={index}
              className={`flex flex-shrink-0 items-center justify-center gap-2.5 rounded-[50px] px-2 py-0.5 text-center text-footnote ${isActive ? "bg-[#E8EAEE]" : "bg-gray-200 text-gray-700-info"}`}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

export type { PropertyCardProps };
