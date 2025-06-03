"use client";

import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";

interface PropertyCardProps {
  itemId: number;
  itemNumber?: number;
  imageUrl: string;
  transactionType: string;
  price: string;
  buildingType: string;
  area: string;
  address: string;
  detailAddress: string;
  tags: string[];
  small?: boolean;
}

const PropertyCard = ({
  itemId,
  itemNumber,
  imageUrl,
  transactionType,
  price,
  buildingType,
  area,
  address,
  detailAddress,
  tags,
  small = false,
}: PropertyCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/property/${itemId}`);
  };

  return (
    <div
      className={`flex w-full items-center gap-3 self-stretch bg-white ${small ? "px-3" : "px-5"} cursor-pointer py-2.5`}
      onClick={handleCardClick}
    >
      {/* 이미지 섹션 */}
      <div className="rounded-small relative h-24 w-24 shrink-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${buildingType} ${area}`}
          className="cur h-full w-full object-cover"
        />
        {/* 목록 번호 */}
        {itemNumber && (
          <div className="absolute left-0 top-0 flex h-5 w-5 items-center overflow-hidden rounded-br bg-black px-[8px] pb-[3px] pl-[7px] pt-[2px]">
            <p className="text-[10px] font-medium text-white">{itemNumber}</p>
          </div>
        )}
      </div>

      {/* 정보 섹션 */}
      <div className="inline-flex flex-1 flex-col justify-between self-stretch">
        <div className="flex flex-col gap-0.5 self-stretch">
          {/* 제목과 하트 버튼 */}
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="text-grey-100 text-subtitle2 flex-1 justify-start">
              {transactionType} {price}
            </div>
            <HeartButton itemId={itemId} />
          </div>

          {/* 주소와 건물 정보 */}
          <div className="flex flex-col items-start gap-0.5 self-stretch">
            <div className="inline-flex items-center gap-1 self-stretch">
              <p className="text-grey-100 text-body2 max-w-fit truncate">{address}</p>
              <p className="text-body2 min-w-fit text-black">{detailAddress}</p>
            </div>
            <div className="text-body2 h-5 self-stretch">
              {buildingType}, {area}
            </div>
          </div>
        </div>

        {/* 태그 리스트 */}
        <div className="flex h-[19px] flex-wrap items-center gap-1 self-stretch overflow-hidden">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-footnote flex flex-shrink-0 items-center justify-center gap-2.5 rounded-[50px] bg-[#E8EAEE] px-2 py-0.5 text-center"
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
