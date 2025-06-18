import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "../utils/axiosInstance";

type MyPageHomeResponse = {
  data: {
    profile: {
      nickname: string;
      profileImageUrl: string;
    };
    myReviews?: Array<{
      reviweId?: string | number;
      content: string;
      likeCount: number;
      commentCount: number;
    }>;
    myComments?: Array<{
      commentId?: string | number;
      content: string;
      likeCount: number;
      commentCount: number;
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
  try {
    // 실제 api 호출
    // const response = await axiosInstance.get("/mypage/home");
    // return response.data;

    // mock api 호출
    const response = await fetch("/mypage/home");
    return response.json();
  } catch (error) {
    console.error("fetchMypageHome 에러:", error);
    throw error;
  }
};

export default fetchMypageHome;
export type { MyPageHomeResponse };