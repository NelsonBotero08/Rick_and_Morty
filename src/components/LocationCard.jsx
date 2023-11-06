import React from "react";
import "../Style/LocationCard.css";

const LocationCard = ({ location }) => {
  return (
    <div className="container">
      <article className="article__location article">
        <h2 className="article__title">{location?.name}</h2>
        <ul className="article__ul">
          <li className="article__li">
            <span className="aticle__span--descrition">Type:</span>
            <span className="article__span--description">{location?.type}</span>
          </li>
          <li className="article__li">
            <span className="aticle__span--descrition">Dimension:</span>
            <span className="article__span--description">
              {location?.dimension}
            </span>
          </li>
          <li className="article__li">
            <span className="aticle__span--descrition">Population:</span>
            <span className="article__span--description">
              {location?.residents.length}
            </span>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default LocationCard;
