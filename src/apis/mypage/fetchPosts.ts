import { PostItemType } from "@/types/post";
import axiosInstance from "@/apis/utils/axiosInstance";

type PostData = {
  reviews: PostItemType[];
  comments: PostItemType[];
};

const fetchPosts = async (): Promise<PostData> => {
  try {
    const [reviewsRes, commentsRes] = await Promise.all([
      axiosInstance.get("/mypage/reviews"),
      axiosInstance.get("/mypage/comments"),
    ]);
    return {
      reviews: reviewsRes.data.reviews,
      comments: commentsRes.data.comments,
    };
  } catch (error) {
    console.error("fetchPosts 에러:", error);
    throw new Error("게시물을 불러오는데 실패했습니다");
  }
};

export default fetchPosts;
export type { PostData };
