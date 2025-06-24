"use client";

import { useEffect, useRef, useState } from "react";
import { useCarousel } from "@/hooks/property/useCarousel";

interface ImageCarouselProps {
  propertyInfo: {
    summary: string[];
    images: {
      imageUrl: string;
      imageOrder: number;
    }[];
  };
}

const ImageCarousel = ({ propertyInfo }: ImageCarouselProps) => {
  const { images, summary } = propertyInfo;
  const { index, goNext, goPrev, handleTouchStart, handleTouchEnd } = useCarousel(images.length);

  const [isTwoLine, setIsTwoLine] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const el = textRef.current;
      if (!el) return;
      setIsTwoLine(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [summary]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "238px" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 슬라이드 wrapper */}
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
            style={{
              width: `${100 / images.length}%`,
              height: "238px",
            }}
            className="flex flex-shrink-0 items-center justify-center bg-gray-100"
          >
            <img
              src={img.imageUrl}
              alt={`property-image-${img.imageOrder}`}
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* 하단 정보 바 */}
      <div className="absolute bottom-3 left-0 right-0 px-3">
        <div className="flex w-full items-end justify-between">
          {/* 태그 박스 */}
          <div className="flex min-w-0 flex-shrink items-center gap-[10px] rounded-[20px] bg-white/50 px-[12px] py-[4px]">
            <div className="flex-shrink-0">
              <img src="/icons/smile.svg" alt="icon" width={22} height={22} />
            </div>

            {/* summary 텍스트 */}
            {isTwoLine ? (
              <div className="flex flex-col justify-center text-subtitle2 leading-tight text-blue-800">
                {Array.from({ length: Math.ceil(summary.length / 2) }, (_, i) => (
                  <span key={i}>{summary.slice(i * 2, i * 2 + 2).join(" / ")}</span>
                ))}
              </div>
            ) : (
              <span
                ref={textRef}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-subtitle2 leading-tight text-blue-800"
              >
                {summary.join(" / ")}
              </span>
            )}
          </div>

          {/* 넘버링 */}
          <div className="flex-shrink-0 whitespace-nowrap rounded-[20px] bg-black/40 px-[12px] py-[4px] text-body2 text-white">
            {index + 1} / {images.length}
          </div>
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
