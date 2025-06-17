import { PostItemType } from "@/types/post";

type PostData = {
  reviews: PostItemType[];
  comments: PostItemType[];
};

const fetchPosts = async (): Promise<PostData> => {
  const [reviewsResponse, commentsResponse] = await Promise.all([
    fetch("/mypage/reviews"),
    fetch("/mypage/comments"),
  ]);

  if (!reviewsResponse.ok || !commentsResponse.ok) {
    throw new Error("게시물을 불러오는데 실패했습니다");
  }

  const [reviewsData, commentsData] = await Promise.all([
    reviewsResponse.json(),
    commentsResponse.json(),
  ]);

  return {
    reviews: reviewsData.reviews,
    comments: commentsData.comments,
  };

};

export default fetchPosts;
export type { PostData };
