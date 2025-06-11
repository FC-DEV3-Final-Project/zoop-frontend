import { useState } from "react";

export const useStarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index: number, isHalf: boolean) => {
    const newRating = isHalf ? index + 0.5 : index + 1;
    setRating(newRating);
  };

  const renderStarIcon = (index: number) => {
    if (rating >= index + 1) return "/icons/star-filled.svg";
    if (rating >= index + 0.5) return "/icons/star-half.svg";
    return "/icons/star-unfilled.svg";
  };

  return { rating, handleClick, renderStarIcon };
};
