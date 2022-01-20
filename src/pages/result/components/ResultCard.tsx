import React, { CSSProperties } from "react";
import { Business } from "../../../services/types/business.type";

type ResultCardProps = {
  business: Business;
  updateMapCenter: (lat: number, lng: number) => void;
  swipeCard: () => void;
};

export const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { business, updateMapCenter, swipeCard } = props;
  const cardCategories = business.categories.map((category) => {
    return category.title;
  });

  const imageCss: CSSProperties = {
    width: "100%",
    height: "11.25rem",
    objectFit: "contain",
    backgroundColor: "grey",
  };

  const cardCss: CSSProperties = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="card" style={cardCss}>
      <img
        src={business.image_url}
        className="card-img-top"
        alt="..."
        style={imageCss}
      />
      <div className="card-body">
        <h5 className="card-title">{business.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {business.location.display_address.join(", ")}
        </h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Distance: </b>
            {Math.ceil(business.distance)} away
          </li>
          <li className="list-group-item">
            <b>Rating: </b>
            {business.rating}
          </li>
          <li className="list-group-item">
            <b>Cuisine: </b>
            {cardCategories.join(", ")}
          </li>
          <button
            className="btn btn-primary mb-2"
            onClick={() =>
              updateMapCenter(
                business.coordinates.latitude,
                business.coordinates.longitude
              )
            }
          >
            Go on map
          </button>
          <button className="btn btn-primary" onClick={() => swipeCard()}>
            Pass
          </button>
        </ul>
      </div>
    </div>
  );
};
