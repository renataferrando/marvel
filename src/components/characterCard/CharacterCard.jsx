import React from "react";
import "./_character-card.scss";
import { useLazyLoading } from "../../hooks/useLazyLoading";
const CharacterCard = ({ name, image, onClick }) => {
  const [ref, inViewPort] = useLazyLoading({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div className="character-card" onClick={onClick} ref={ref}>
      {inViewPort && <img src={image} className="image" alt="" />}
      <h4>{name}</h4>
    </div>
  );
};

export default CharacterCard;
