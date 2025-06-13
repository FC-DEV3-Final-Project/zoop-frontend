"use client";

import { useInfiniteScroll } from "@/hooks/common/useInfiniteScroll";

interface PropertyCardProps {
  propertyId: number;
  address: string;
}

const fetchLikedItems = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 1초 대기
  const res = await fetch(`/mypage/bookmarked-properties?page=${page}`);
  const result = await res.json();
  return {
    content: result.content as PropertyCardProps[],
    hasNext: result.hasNext,
  };
};

export default function MyPageTest() {
  const { items, loader, hasMore, loading } = useInfiniteScroll<PropertyCardProps>(
    fetchLikedItems,
    [],
  );

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>매물 리스트 테스트</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={item.propertyId + "-" + idx} style={{ border: "1px solid #eee", margin: 8, padding: 8 }}>
            <div>매물ID: {item.propertyId}</div>
            <div>주소: {item.address}</div>
          </li>
        ))}
      </ul>
      {loading && <div>로딩중...</div>}
      {hasMore && <div ref={loader} style={{ height: 30 }} />}
      {!hasMore && <div>더 이상 데이터 없음</div>}
    </div>
  );
}
