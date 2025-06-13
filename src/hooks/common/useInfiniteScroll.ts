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
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItems([]);
    setPage(0);
    setHasMore(true);
  }, deps);

  useEffect(() => {
    if (!hasMore) return;
    setLoading(true);
    fetchMore(page)
      .then((response) => {
        setItems((prev) => [...prev, ...response.content]);
        setHasMore(response.hasNext);
      })
      .finally(() => setLoading(false));
  }, [page, ...deps]);

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
