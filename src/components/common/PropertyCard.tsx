"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  liked: boolean;
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
  liked,
  small = false,
}: PropertyCardProps) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(liked);

  const handleCardClick = () => {
    router.push(`/property/${itemId}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    setIsLiked((prev) => !prev);
    // onLikeClick?.();
  };

  return (
    <div
      className={`flex w-full items-center gap-3 self-stretch bg-white ${small ? "px-3" : "px-5"} cursor-pointer py-2.5`}
      onClick={handleCardClick}
    >
      {/* 이미지 섹션 */}
      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={`${buildingType} ${area}`}
          className="cur h-full w-full object-cover"
        />
        {/* 목록 번호 */}
        {itemNumber && (
          <div className="absolute top-0 left-0 flex h-5 w-5 items-center overflow-hidden rounded-br bg-black px-[8px] pt-[2px] pb-[3px] pl-[7px]">
            <p className="text-[10px] font-medium text-white">{itemNumber}</p>
          </div>
        )}
      </div>

      {/* 정보 섹션 */}
      <div className="inline-flex flex-1 flex-col justify-between self-stretch">
        <div className="flex flex-col gap-0.5 self-stretch">
          {/* 제목과 하트 버튼 */}
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="text-grey-100 text-subtitle2 flex-1 justify-start font-semibold">
              {transactionType} {price}
            </div>
            <button
              onClick={handleLikeClick}
              className="relative h-6 w-6 cursor-pointer overflow-hidden"
            >
              <Image
                src={isLiked ? "/icons/heart_true.svg" : "/icons/heart_false.svg"}
                alt={isLiked ? "찜하기 완료" : "찜하기"}
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* 주소와 건물 정보 */}
          <div className="flex flex-col items-start gap-0.5 self-stretch">
            <div className="inline-flex items-center gap-1 self-stretch">
              <p className="text-grey-100 text-body2 max-w-[131px] truncate">{address}</p>
              <p className="text-body2 flex-1 text-black">{detailAddress}</p>
            </div>
            <div className="text-body2 h-5 self-stretch">
              {buildingType}, {area}
            </div>
          </div>
        </div>

        {/* 태그 리스트 */}
        <div className="flex flex-wrap items-center gap-1 self-stretch">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-footnote flex items-center justify-center gap-2.5 rounded-[50px] bg-[#E8EAEE] px-2 py-0.5 text-center"
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
