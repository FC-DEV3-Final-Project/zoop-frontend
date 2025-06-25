"use client";

import { useEffect, useRef, useState } from "react";
import { useCarousel } from "@/hooks/property/useCarousel";
import Image from "next/image";
import ImageViewerModal from "@/components/property/detail/ImageViewerModal";

interface ImageCarouselProps {
  propertyInfo: {
    images: {
      imageUrl: string;
      imageOrder: number;
    }[];
  };
}

const ImageCarousel = ({ propertyInfo }: ImageCarouselProps) => {
  const { images } = propertyInfo;
  const { index, goNext, goPrev, handleTouchStart, handleTouchEnd } = useCarousel(images.length);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasImages = images.length > 0;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "238px" }}
      onTouchStart={hasImages ? handleTouchStart : undefined}
      onTouchEnd={hasImages ? handleTouchEnd : undefined}
    >
      {/* 이미지 전체보기 버튼 */}
      {hasImages && (
        <button
          className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-1"
          aria-label="expand image"
          onClick={() => setIsModalOpen(true)}
        >
          <img src="/icons/white-expand.svg" alt="expand" width={24} height={24} />
        </button>
      )}

      {/* 슬라이드 or 기본 이미지 */}
      {hasImages ? (
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((img) => (
            <div
              key={img.imageOrder}
              className="relative flex-shrink-0"
              style={{ width: `${100 / images.length}%`, height: "238px" }}
            >
              <Image
                src={img.imageUrl}
                alt={`property-image-${img.imageOrder}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100">
          <img
            src="/icons/default-property.svg"
            alt="기본 이미지"
            className="h-20 w-20 object-contain opacity-60"
          />
        </div>
      )}

      {/* 하단 넘버링 */}
      <div className="absolute bottom-3 right-3 rounded-[20px] bg-black/40 px-[12px] py-[4px] text-body2 text-white">
        {hasImages ? index + 1 : 1} / {hasImages ? images.length : 1}
      </div>

      {isModalOpen && (
        <ImageViewerModal
          images={images}
          initialIndex={index}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* 좌/우 클릭 영역 */}
      {hasImages && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
