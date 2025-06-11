import { useState } from "react";

export const useCarousel = (length: number) => {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      goPrev();
    } else if (deltaX < -50) {
      goNext();
    }

    setTouchStartX(null);
  };

  return {
    index,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchEnd,
  };
};
