interface Props {
  count: number;
  current: number;
}

const RecommendationDots = ({ count, current }: Props) => {
  return (
    <div className="flex w-full justify-center gap-1 pb-3 pt-1">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={
            idx + 1 === current
              ? "h-1 w-2 rounded-full bg-gray-950-dark"
              : "h-1 w-1 rounded-full bg-gray-500-alternative"
          }
        />
      ))}
    </div>
  );
};

export default RecommendationDots;
