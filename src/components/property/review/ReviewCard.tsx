import Image from "next/image";

interface ReviewCardProps {
  nickname: string;
  date: string;
  content: string;
  rating: number;
  likes: number;
  comments: number;
  profileImageUrl: string;
  residenceStatus: string;
  hasChildStatus: string;
  onClick?: () => void;
}

const ReviewCard = ({
  nickname,
  date,
  content,
  rating,
  likes,
  comments,
  profileImageUrl,
  residenceStatus,
  hasChildStatus,
  onClick,
}: ReviewCardProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="flex flex-col gap-4 border-b border-t border-gray-300 bg-white px-5 py-4">
        {/* 상단: 프로필 */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {profileImageUrl ? (
              <Image
                src={profileImageUrl}
                alt="profile"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            )}
            <div className="flex flex-col">
              <span className="text-body2 text-black">{nickname}</span>
              <span className="text-body3 text-gray-800">
                {residenceStatus} / {hasChildStatus}
              </span>
            </div>
          </div>
          <span className="text-gray-400">···</span>
        </div>

        {/* 별점 */}
        <div className="flex items-center text-caption1 text-blue-800-primary">
          {[0, 1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`/icons/${i < Math.floor(rating) ? "star-filled" : "star-unfilled"}.svg`}
              alt="star"
              width={16}
              height={16}
            />
          ))}
          <span className="ml-[5px] text-body2 text-black">{rating.toFixed(1)}</span>
        </div>

        {/* 본문 */}
        <p className="text-subtitle3 text-black">{content}</p>

        {/* 날짜 */}
        <p className="text-right text-body3 text-gray-700-info">{date}</p>
      </div>

      {/* 하단 버튼 */}
      <div className="bg-white px-5 py-3">
        <div className="flex gap-4 text-caption1 text-gray-700">
          <button className="flex items-center gap-1 text-caption2 text-gray-900">
            <img src="/icons/thumbsup-outline.svg" width={20} height={20} alt="like" />
            공감 {likes}
          </button>
          <button className="flex items-center gap-1 text-caption2 text-gray-900">
            <img src="/icons/chat-text.svg" width={20} height={20} alt="comment" />
            댓글 {comments}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
