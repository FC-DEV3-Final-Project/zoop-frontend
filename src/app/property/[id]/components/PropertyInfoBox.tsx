import Image from "next/image";

export default function PropertyInfoBox() {
  return (
    <div className="flex w-full flex-col gap-[24px] bg-white px-[20px] py-[18px] text-black">
      <div className="flex justify-between">
        <div className="text-subtitle2">방배마에스트로(주상복합) 1동 703호</div>
        <div className="flex gap-[13px]">
          <button>
            <Image
              src="/icons/heart-outline.svg"
              alt="heart-icon"
              width={24}
              height={24}
              cursor-pointer
            />
          </button>
          <button>
            <Image src="/icons/share.svg" alt="share" width={24} height={24} cursor-pointer />
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
          {/* 아파트 / 2층 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src="/icons/share.svg" alt="건물" width={24} height={24} />
              <span>아파트</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/share.svg" alt="층수" width={24} height={24} />
              <span>2층</span>
            </div>
          </div>

          {/* 면적 / 주차 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src="/icons/share.svg" alt="면적" width={24} height={24} />
              <span>34.59m²</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/share.svg" alt="주차" width={24} height={24} />
              <span>가능</span>
            </div>
          </div>
        </div>
        <div className="whitespace-nowrap text-body2 text-gray-800">19시간전</div>
      </div>
    </div>
  );
}
