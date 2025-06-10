interface ReviewSortButtonsProps {
  sortType: "recommended" | "latest" | "mine";
  onChange: (type: "recommended" | "latest" | "mine") => void;
}

const ReviewSortButtons = ({ sortType, onChange }: ReviewSortButtonsProps) => {
  const getClass = (type: "recommended" | "latest" | "mine") =>
    `${sortType === type ? "text-caption1 text-blue-800-primary" : "text-body2 text-gray-600-hint"}`;

  return (
    <div className="flex gap-2">
      <button className={getClass("recommended")} onClick={() => onChange("recommended")}>
        추천순
      </button>
      <button className={getClass("latest")} onClick={() => onChange("latest")}>
        최신순
      </button>
      <button className={getClass("mine")} onClick={() => onChange("mine")}>
        내 리뷰
      </button>
    </div>
  );
};

export default ReviewSortButtons;
