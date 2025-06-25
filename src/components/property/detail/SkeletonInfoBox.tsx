const SkeletonInfoBox = () => {
  return (
    <div className="space-y-4 p-5">
      <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
      <div className="h-40 animate-pulse rounded bg-gray-200" />
      <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200" />
      <div className="h-20 animate-pulse rounded bg-gray-200" />
    </div>
  );
};

export default SkeletonInfoBox;
