"use client";

interface StarRatingProps {
  rating: number;
  onChange: (value: number) => void;
}

const StarRating = ({ rating, onChange }: StarRatingProps) => {
  const handleClick = (index: number, isHalf: boolean) => {
    const newRating = isHalf ? index + 0.5 : index + 1;
    onChange(newRating);
  };

  const renderStarIcon = (index: number) => {
    if (rating >= index + 1) return "/icons/star-filled.svg";
    if (rating >= index + 0.5) return "/icons/star-half.svg";
    return "/icons/star-unfilled.svg";
  };

  return (
    <div className="flex h-[50px] items-center justify-between">
      <div className="flex gap-[4px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-8 w-8">
            <button
              type="button"
              className="absolute left-0 top-0 z-10 h-full w-1/2"
              onClick={() => handleClick(i, true)}
            />
            <button
              type="button"
              className="absolute right-0 top-0 z-10 h-full w-1/2"
              onClick={() => handleClick(i, false)}
            />
            <img
              src={renderStarIcon(i)}
              alt="star"
              className="pointer-events-none"
              width={32}
              height={32}
            />
          </div>
        ))}
      </div>

      <span className="text-title3 text-black">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
