import axiosInstance from "@/apis/utils/axiosInstance";
import { PostData } from "@/types/post";

const fetchPosts = async (): Promise<PostData> => {
  try {
    const [reviews, comments] = await Promise.all([
      axiosInstance.get("/mypage/reviews").then((res) => res.data.reviews),
      axiosInstance.get("/mypage/comments").then((res) => res.data.comments),
    ]);
    return {
      reviews,
      comments,
    };
  } catch (error) {
    console.error("fetchPosts 에러:", error);
    throw new Error("게시물을 불러오는데 실패했습니다");
  }
};

export default fetchPosts;
