import { useQuery } from "@tanstack/react-query";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "@/apis/utils/axiosInstance";

type MyPageHomeResponse = {
  data: {
    userInfo: {
      nickname: string;
      profileImageUrl: string;
    };
    reviewOrComments?: Array<{
      reviewId?: string | number;
      commentId?: string | number;
      content: string;
      likeCount: number;
      commentCount?: number;
    }>;
    activity: {
      bookmarkedPropertyCount: number;
      recentViewedPropertyCount: number;
    };
    bookmarkedProperties: PropertyCardProps[];
    recentViewedProperties: PropertyCardProps[];
  };
};

const fetchMypageHome = async (): Promise<MyPageHomeResponse> => {
    const response = await axiosInstance.get("/mypage/home");
    return response.data;
};

export const useMypageHomeQuery = () =>
  useQuery<MyPageHomeResponse>({
    queryKey: ["mypageHome"],
    queryFn: fetchMypageHome,
  });
