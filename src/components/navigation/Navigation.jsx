import React, { useContext } from "react";
import Drawer from "../drawer/Drawer";
import { useNavigate } from "react-router-dom";
import "./_navigation.scss";
import Loading from "../loading/Loading";
// import { ApiContext } from '../../ApiContext';

const Navigation = ({ isOpen, onClose, comicsOpen, seriesOpen, width }) => {
  const navigate = useNavigate();
  // const { comics, series, comicsLoading, seriesLoading, setComicsQuery, setSeriesQuery } = useContext(ApiContext)

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
      {/* {comicsOpen && (
        <div>
          <h4>COMICS</h4>
          <input
            placeholder="Search comic"
            type="text"
            onChange={(e) => setComicsQuery(e.target.value)}
          />
          {comicsLoading && <Loading />}
          {comics.map(({ title, id }) => (
            <li
              className="list-items"
              onClick={() => navigate(`/comics/${id}`) & onClose()}
              key={id}
            >
              {[title]}
            </li>
          ))}
        </div>
      )}
      {seriesOpen && (
        <div>
          <h4>SERIES</h4>
          <input
            type="text"
            placeholder="Search serie"
            onChange={(e) => setSeriesQuery(e.target.value)}
          />
          {seriesLoading && <Loading />}
          {series.map(({ title, id }) => (
            <li
              className="list-items"
              onClick={() => navigate(`/series/${id}`) & onClose()}
              key={id}
            >
              {[title]}
            </li>
          ))}
        </div>
      )} */}
    </Drawer>
  );
};

export default Navigation;
