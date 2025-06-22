import { useEffect, useRef, useState, useCallback } from "react";

interface InfiniteScrollResponse<T> {
  content: T[];
  hasNext: boolean;
}

const useInfiniteScroll = <T>(
  fetchMore: (page: number) => Promise<InfiniteScrollResponse<T>>,
  deps: any[] = [],
  enabled: boolean = true,
) => {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loader = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setItems([]);
    setPage(0);
    setHasMore(true);
    setError(null);
  }, []);

  useEffect(() => {
    if (enabled) {
      reset();
    }
  }, deps);

  useEffect(() => {
    if (!hasMore || !enabled) return;
    setLoading(true);
    fetchMore(page)
      .then((response) => {
        setItems((prev) => [...prev, ...response.content]);
        setHasMore(response.hasNext);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [page, enabled, ...deps]);

  useEffect(() => {
    if (!hasMore || loading || !enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 },
    );
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [hasMore, loading, enabled]);

  return { items, loader, hasMore, loading, error, reset };
};

export default useInfiniteScroll;
