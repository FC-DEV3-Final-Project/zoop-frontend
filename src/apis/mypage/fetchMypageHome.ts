import { PropertyCardProps } from "@/components/common/PropertyCard";

export type MyPageHomeResponse = {
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

export const fetchMypageHome = async (): Promise<MyPageHomeResponse> => {
  const response = await fetch("/mypage/home");
  if (!response.ok) {
    throw new Error("마이페이지 데이터를 가져오는데 실패했습니다");
  }
  return response.json();
};
