interface CommentListProps {
  reviewId: number;
}

const mock_comments = [
  {
    id: 1,
    author: "popop",
    content: "조만간 이사갈 예정인데 제가 좀 게을러서 큰일이네요 ㅋㅋ",
    likes: 1,
    date: "2025.01.22",
  },
  {
    id: 2,
    author: "kimzzupzzup",
    content: "교통 하나는 최고죠!ㅋㅋ",
    likes: 0,
    date: "2025.01.22",
  },
];

export default function CommentList({ reviewId }: CommentListProps) {
  return (
    <div className="flex flex-col bg-gray-100">
      {mock_comments.map((comment) => (
        <div key={comment.id} className="flex flex-col gap-2 border border-t-gray-300 px-5 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-500" />
              <span className="text-body2 text-black">{comment.author}</span>
            </div>
            {/* 버튼 컴포넌트 추가 예정 */}
            <span className="text-gray-400">···</span>
          </div>

          <p className="text-subtitle3 text-black">{comment.content}</p>

          {/* 하단: 공감 + 날짜 */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-caption3 text-gray-900">
              <img src="/icons/thumbsup-outline.svg" alt="like" width={16} height={16} />
              {comment.likes > 0 ? `공감 ${comment.likes}` : "공감하기"}
            </button>
            <span className="text-footnote text-gray-700-info">{comment.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
