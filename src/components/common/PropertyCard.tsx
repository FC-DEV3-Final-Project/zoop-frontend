import Image from "next/image";

interface PropertyCardProps {
  number?: number;
  imageUrl: string;
  title: string;
  address: string;
  detailAddress: string;
  buildingInfo: string;
  tags: string[];
  like: boolean;
  onLikeClick?: () => void;
}

const PropertyCard = ({
  number,
  imageUrl,
  title,
  address,
  detailAddress,
  buildingInfo,
  tags,
  like,
  onLikeClick,
}: PropertyCardProps) => {
  return (
    <div className="inline-flex items-center justify-start gap-3 self-stretch bg-white px-5 py-2.5">
      {/* 이미지 섹션 */}
      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        {number && (
          <div className="absolute top-0 left-0 flex h-5 w-5 items-center overflow-hidden rounded-br bg-black px-[8px] pt-[2px] pb-[3px] pl-[7px]">
            <p className="justify-center text-center text-[10px] font-medium text-white">
              {number}
            </p>
          </div>
        )}
      </div>

      {/* 정보 섹션 */}
      <div className="inline-flex flex-1 flex-col items-start justify-between self-stretch">
        <div className="flex flex-col items-start justify-start gap-0.5 self-stretch">
          {/* 제목과 하트 버튼 */}
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="text-grey-100 text-subtitle2 flex-1 justify-start font-semibold">
              {title}
            </div>
            <button
              onClick={onLikeClick}
              className="relative h-6 w-6 overflow-hidden transition-opacity hover:opacity-80"
            >
              <Image
                src={like ? "/icons/heart_true.svg" : "/icons/heart_false.svg"}
                alt={like ? "찜하기 완료" : "찜하기"}
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* 주소와 건물 정보 */}
          <div className="flex flex-col items-start justify-start self-stretch">
            <div className="inline-flex items-center justify-start gap-1 self-stretch">
              <p className="text-grey-100 text-body2 justify-start">{address}</p>
              <p className="text-body2 flex-1 justify-start text-black">{detailAddress}</p>
            </div>
            <div className="text-body2 h-5 justify-start self-stretch">{buildingInfo}</div>
          </div>
        </div>

        {/* 태그 리스트 */}
        <div className="inline-flex items-center justify-start gap-1 self-stretch">
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
