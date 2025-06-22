import axiosInstance from "@/apis/utils/axiosInstance";

const fetchPostReview = async () => {
  try {
    const res = await axiosInstance.get("/mypage/reviews");
    return res.data.data.reviews;
  } catch (error) {
    console.error("fetchPostReview 에러:", error);
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
};

export default fetchPostReview;
