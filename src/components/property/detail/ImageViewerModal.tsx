"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useCarousel } from "@/hooks/property/useCarousel";
import Image from "next/image";

interface ImageViewerModalProps {
  images: {
    imageUrl: string;
    imageOrder: number;
  }[];
  initialIndex: number;
  onClose: () => void;
}

const ImageViewerModal = ({ images, initialIndex, onClose }: ImageViewerModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { index, goNext, goPrev } = useCarousel(images.length, initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return createPortal(
    <div
      className="fixed left-1/2 top-0 z-50 w-full max-w-[600px] -translate-x-1/2 bg-black/80"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative h-[100dvh] w-full overflow-hidden"
        onClick={stopPropagation}
      >
        <div className="absolute left-0 right-0 top-4 z-10 flex items-center justify-center px-4">
          {/* 넘버링 */}
          <div className="text-subtitle2 text-white">
            {index + 1} / {images.length}
          </div>

          {/* 닫기 버튼 */}
          <button onClick={onClose} className="absolute right-4 p-1" aria-label="닫기">
            <img src="/icons/x.svg" alt="닫기" width={24} height={24} className="invert" />
          </button>
        </div>

        {/* 이미지 슬라이드 */}
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((img) => (
            <div
              key={img.imageOrder}
              className="flex h-full w-full flex-shrink-0 items-center justify-center"
              style={{ width: `${100 / images.length}%` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={img.imageUrl}
                  alt={`property-image-${img.imageOrder}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        {/* 좌/우 클릭 영역 */}
        <button
          onClick={goPrev}
          className="absolute inset-y-0 left-0 w-1/2"
          aria-label="이전 이미지"
        />
        <button
          onClick={goNext}
          className="absolute inset-y-0 right-0 w-1/2"
          aria-label="다음 이미지"
        />
      </div>
    </div>,
    document.body,
  );
};

export default ImageViewerModal;
