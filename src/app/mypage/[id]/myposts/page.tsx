"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import { Header } from "@/layout/Header";
import MyPostItem, { PostItem } from "@/components/mypage/myposts/MyPostItem";

const tabOptions = [
  { label: "리뷰", value: "reviews" },
  { label: "댓글", value: "comments" },
];

type PostData = {
  reviews: PostItem[] | null;
  comments: PostItem[] | null;
};

const MyPostsPage = () => {
  const [selectedTab, setSelectedTab] = useState("reviews");
  const [posts, setPosts] = useState<PostData>({
    reviews: null,
    comments: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reviewsResponse, commentsResponse] = await Promise.all([
          fetch("/mypage/reviews"),
          fetch("/mypage/comments"),
        ]);

        const [reviewsData, commentsData] = await Promise.all([
          reviewsResponse.json(),
          commentsResponse.json(),
        ]);

        setPosts({
          reviews: reviewsData.reviews,
          comments: commentsData.comments,
        });
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = (title: string) => {
    router.push(`/review/${title}`);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-body2 text-gray-700-info">로딩 중...</div>
      </div>
    );
  }

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>내가 쓴 글</Header.Title>
      </Header>
      <div className="flex w-full flex-col bg-gray-100 pt-16">
        <div className="sticky top-16 z-10 bg-white">
          <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        </div>
        <div>
          <div className="mb-8 flex flex-col gap-1">
            {posts[selectedTab as keyof PostData]?.map((post, idx) => (
              <MyPostItem
                key={idx}
                type={selectedTab === "reviews" ? "review" : "comment"}
                {...post}
              />
            ))}
          </div>

          <div
            className={`${posts[selectedTab as keyof PostData]?.length === 0 ? "fixed inset-0 flex items-center justify-center" : ""}`}
          >
            <div className={"flex h-[60px] items-center justify-center"}>
              <div className="text-body2 text-gray-700-info">더 이상 표시할 콘텐츠가 없어요.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPostsPage;
