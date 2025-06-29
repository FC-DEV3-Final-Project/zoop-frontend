import axiosInstance from "@/apis/utils/axiosInstance";

const fetchPostReview = async () => {
  const res = await axiosInstance.get("/mypage/reviews");
  return res.data.data || [];
};

export default fetchPostReview;
