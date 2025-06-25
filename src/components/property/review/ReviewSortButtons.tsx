interface ReviewSortButtonsProps {
  sortType: "like" | "latest";
  onChange: (type: "like" | "latest") => void;
}

const ReviewSortButtons = ({ sortType, onChange }: ReviewSortButtonsProps) => {
  const getClass = (type: "like" | "latest") =>
    `${sortType === type ? "text-caption1 text-blue-800-primary" : "text-body2 text-gray-600-hint"}`;

  return (
    <div className="flex gap-2">
      <button className={getClass("like")} onClick={() => onChange("like")}>
        공감순
      </button>
      <button className={getClass("latest")} onClick={() => onChange("latest")}>
        최신순
      </button>
    </div>
  );
};

export default ReviewSortButtons;
