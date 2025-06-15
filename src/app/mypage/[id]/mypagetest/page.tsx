"use client";

import { useEffect, useState } from "react";
import { useInfiniteScroll } from "@/hooks/common/useInfiniteScroll";

interface PropertyCardProps {
  propertyId: number;
  address: string;
}

// 1. 초기 데이터 (home API)
const fetchInitialData = async () => {
  const res = await fetch("/mypage/home");
  const result = await res.json();
  return result.data.bookmarkedProperties as PropertyCardProps[];
};

// 2. 추가 데이터 (bookmark API)
const fetchLikedItems = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
  const res = await fetch(`/mypage/bookmarked-properties?page=${page}`);
  const result = await res.json();
  return {
    content: result.content as PropertyCardProps[],
    hasNext: result.hasNext,
  };
};

export default function MyPageTest() {
  // 초기 데이터 상태
  const [initialData, setInitialData] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // 초기 데이터 로드
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const data = await fetchInitialData();
        setInitialData(data);
      } catch (e) {
        console.error("초기 데이터 로드 실패:", e);
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  // 추가 데이터 로드 (무한스크롤)
  const {
    items: additionalItems,
    loader,
    hasMore,
    loading: loadingMore,
  } = useInfiniteScroll<PropertyCardProps>(fetchLikedItems, []);

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  const allItems = [...initialData, ...additionalItems];

  if (loading) return <div>초기 데이터 로딩중...</div>;

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>매물 리스트 테스트</h2>
      <ul>
        {allItems.map((item, idx) => (
          <li
            key={item.propertyId + "-" + idx}
            style={{ border: "1px solid #eee", margin: 8, padding: 8 }}
          >
            <div>매물ID: {item.propertyId}</div>
            <div>주소: {item.address}</div>
          </li>
        ))}
      </ul>
      {loadingMore && <div>추가 데이터 로딩중...</div>}
      {hasMore && <div ref={loader} style={{ height: 30 }} />}
      {!hasMore && <div>더 이상 데이터 없음</div>}
    </div>
  );
}
