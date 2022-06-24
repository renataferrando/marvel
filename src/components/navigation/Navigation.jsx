import React from "react";
import Drawer from "../drawer/Drawer";
import { useNavigate } from "react-router-dom";
import "./_navigation.scss";
import Loading from "../loading/Loading";
import { useSeries } from "../../hooks/useSeries";
import { useComics } from "../../hooks/useComics";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

const Navigation = ({ isOpen, onClose, comicsOpen, seriesOpen, width }) => {
  const navigate = useNavigate();
  const {
    series,
    loading: seriesLoading,
    currentPage: seriesCurrentPage,
    setCurrentPage: setSeriesCurrentPage,
    hasMore: moreSeries,
    setSeriesQuery,
  } = useSeries();

  const {
    comics,
    loading: comicsLoading,
    currentPage: comicsCurrentPage,
    hasMore: moreComics,
    setCurrentPage: setComicsCurrentPage,
    setComicsQuery,
  } = useComics();

  const [lastSerie] = useInfiniteScroll(
    moreSeries,
    seriesLoading,
    seriesCurrentPage,
    setSeriesCurrentPage
  );

  const [lastComic] = useInfiniteScroll(
    moreComics,
    comicsLoading,
    comicsCurrentPage,
    setComicsCurrentPage
  );
  const handleSearchSeries = (e) => {
    setSeriesQuery(`titleStartsWith=${e.target.value}`);
  };
  const handleSearchComics = (e) => {
    setComicsQuery(`titleStartsWith=${e.target.value}`);
  };
  return (
    <Drawer
      className="list"
      isOpen={isOpen}
      onClose={onClose}
      position="left"
      width={width}
      closeBtn={true}
      positionCloseRight
    >
      {seriesOpen && (
        <div>
          <h4>SERIES</h4>
          <input
            placeholder="Search serie"
            type="text"
            onChange={handleSearchSeries}
          />
          {series.map(({ title, id }) => (
            <li
              className="list-items"
              onClick={() => navigate(`/series/${id}`) & onClose()}
              key={id}
            >
              {[title]}
            </li>
          ))}
          {seriesLoading && <Loading />}
          <div
            style={{ minHeight: "100px" }}
            ref={lastSerie}
            className="viewer"
          ></div>
        </div>
      )}
      {comicsOpen && (
        <div>
          <h4>COMICS</h4>
          <input
            type="text"
            placeholder="Search comic"
            onChange={handleSearchComics}
          />
          {comics.map(({ title, id, i }) => (
            <li
              className="list-items"
              onClick={() => navigate(`/comics/${id}`) & onClose()}
              key={i}
            >
              {[title]}
            </li>
          ))}
          {comicsLoading && <Loading />}
          <div
            style={{ minHeight: "100px" }}
            ref={lastComic}
            className="viewer"
          ></div>
        </div>
      )}
    </Drawer>
  );
};

export default Navigation;
