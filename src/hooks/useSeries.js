import getSeries from "../service/getSeries";
import { useEffect, useContext, useState } from "react";
import ApiContext from "../context/ApiContext";

export function useSeries() {
  const { series, setSeries, seriesQuery, setSeriesQuery } =
    useContext(ApiContext);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 20;
  let offset = currentPage * limit;

  useEffect(() => {
    setLoading(true);
    getSeries(limit, offset, seriesQuery).then((response) => {
      if (currentPage === 0) {
        setSeries(response.data.results);
      } else {
        setSeries((prev) => [...prev, ...response.data.results]);
      }
      setHasMore(true);
      if (response.data.results.length === 0) {
        setHasMore(false);
      }
      setLoading(false);
    });
  }, [offset, seriesQuery]);

  useEffect(() => {
    setSeries([]);
    setCurrentPage(0);
  }, [seriesQuery]);

  return {
    series,
    setSeries,
    loading,
    setLoading,
    setCurrentPage,
    currentPage,
    hasMore,
    seriesQuery,
    setSeriesQuery,
  };
}
