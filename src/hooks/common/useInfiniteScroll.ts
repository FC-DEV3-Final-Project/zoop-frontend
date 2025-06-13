import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll<T>(fetchMore: (page: number) => Promise<T[]>, deps: any[] = []) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
  }, deps);

  useEffect(() => {
    if (!hasMore) return;
    setLoading(true);
    fetchMore(page)
      .then((newItems) => {
        if (newItems.length === 0) {
          setHasMore(false);
        } else {
          setItems((prev) => [...prev, ...newItems]);
        }
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [page, ...deps]);

  useEffect(() => {
    if (!hasMore) return;
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
  }, [hasMore, loading]);

  return { items, loader, hasMore, loading };
}
