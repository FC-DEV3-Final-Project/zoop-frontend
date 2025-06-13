import { useEffect, useRef, useState } from "react";

interface InfiniteScrollResponse<T> {
  content: T[];
  hasNext: boolean;
}

export function useInfiniteScroll<T>(
  fetchMore: (page: number) => Promise<InfiniteScrollResponse<T>>,
  deps: any[] = [],
) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(0); // 0부터 시작
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement>(null);

  // 중복 fetch 방지용
  const fetchedPages = useRef<Set<number>>(new Set());

  // deps가 바뀌면 완전 초기화
  useEffect(() => {
    console.log("이 코드는 개발 환경에서 2번 실행됩니다!");
    setItems([]);
    setPage(0);
    setHasMore(true);
    fetchedPages.current = new Set();
  }, deps);

  // page가 바뀔 때마다 fetch, 중복 방지
  useEffect(() => {
    if (!hasMore) return;
    if (fetchedPages.current.has(page)) return; // 이미 요청한 페이지면 무시
    setLoading(true);
    fetchedPages.current.add(page);
    fetchMore(page)
      .then((response) => {
        setItems((prev) => [...prev, ...response.content]);
        setHasMore(response.hasNext);
      })
      .finally(() => setLoading(false));
  }, [page, ...deps]);

  // loader가 화면에 보이면 page 증가
  useEffect(() => {
    if (!hasMore || loading || items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [hasMore, loading, items.length]);

  return { items, loader, hasMore, loading };
}
