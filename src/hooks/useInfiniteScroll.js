import debounce from "just-debounce-it";
import { useRef, useCallback } from "react";

export const useInfiniteScroll = (
  hasMore,
  isLoading,
  currentPage,
  setCurrentPage
) => {
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const debounceNextPage = useCallback(
    debounce(() => handleNextPage(), 1000),
    []
  );
  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          debounceNextPage();
          console.log("h");
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, debounceNextPage]
  );
  return [lastElement];
};
