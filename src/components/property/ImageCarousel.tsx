"use client";

import Image from "next/image";
import { useCarousel } from "@/hooks/property/useCarousel";

const mockImages = Array(20).fill(null); // 추후 이미지로 대체
const mockTags = ["반려동물 입주", "역세권", "대학가"]; // 추후 태그 대체

const ImageCarousel = () => {
  const { index, goNext, goPrev, handleTouchStart, handleTouchEnd } = useCarousel(
    mockImages.length,
  );

  return (
    <div
      className="relative h-[238px] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 이미지 슬라이드 */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${mockImages.length * 100}%`,
        }}
      >
        {mockImages.map((_, i) => (
          <div
            key={i}
            className="flex h-[238px] w-full flex-shrink-0 items-center justify-center bg-gray-300"
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-between px-3">
        {/* 태그 */}
        <div className="flex items-center gap-[10px] rounded-[20px] bg-white/50 px-[12px] py-[4px]">
          <Image src="/icons/smile.svg" alt="icon" width={22} height={22} />
          <span className="text-subtitle2 text-blue-800">{mockTags.join(" / ")}</span>
        </div>

        {/* 이미지 넘버링 */}
        <div className="rounded-[20px] bg-black/40 px-[12px] py-[4px] text-body2 text-white">
          {index + 1} / {mockImages.length}
        </div>
      </div>

      {/* 좌/우 클릭 영역 */}
      <button
        onClick={goPrev}
        className="absolute inset-y-0 left-0 w-1/2"
        aria-label="prev image"
      />
      <button
        onClick={goNext}
        className="absolute inset-y-0 right-0 w-1/2"
        aria-label="next image"
      />
    </div>
  );
};

export default ImageCarousel;
