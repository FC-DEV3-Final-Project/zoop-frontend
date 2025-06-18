import { PostItemType } from "@/types/post";
import axiosInstance from "@/apis/utils/axiosInstance";

type PostData = {
  reviews: PostItemType[];
  comments: PostItemType[];
};

const fetchPosts = async (): Promise<PostData> => {
  try {
    // 실제 api 호출
    // const [reviews, comments] = await Promise.all([
    //   axiosInstance.get("/mypage/reviews").then((res) => res.data.reviews),
    //   axiosInstance.get("/mypage/comments").then((res) => res.data.comments),
    // ]);

    // mock api 호출
    const reviews = await fetch("/mypage/reviews").then((res) => res.json().then((data) => data.reviews));
    const comments = await fetch("/mypage/comments").then((res) => res.json().then((data) => data.comments));

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
export type { PostData };
