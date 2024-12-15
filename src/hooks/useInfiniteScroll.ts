import { useState, useEffect, useRef } from "react";

interface UseInfiniteScrollProps<T> {
  data: T[];
  itemsPerPage: number;
}

export function useInfiniteScroll<T>({
  data,
  itemsPerPage,
}: UseInfiniteScrollProps<T>) {
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const [displayedData, setDisplayedData] = useState<T[]>(
    data.slice(0, itemsPerPage)
  );
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDisplayedData(data.slice(0, itemsToShow));
  }, [data, itemsToShow]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect(); // Cleanup any existing observer
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedData.length < data.length) {
          setItemsToShow((prev) => Math.min(prev + itemsPerPage, data.length));
        }
      },
      {
        root: null, // Observes viewport
        rootMargin: "0px",
        threshold: 1.0, // Fully visible
      }
    );

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [displayedData.length, data.length, itemsPerPage]);

  return { displayedData, targetRef };
}
