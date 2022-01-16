import React from "react";
import { Business } from "../../services/types/business.type";
import { ResultCard } from "./components/ResultCard";
import { ResultMap } from "./components/ResultMap";

type ResultPageProps = {
  cuisines: string[];
  mode: boolean;
  radius: number;
  pos: { lat: number; lng: number };
  businesses: Business[];
  updateMapCenter: (lat: number, lng: number) => void;
  swipeCard: () => void;
};

export const ResultPage: React.FC<ResultPageProps> = (props) => {
  const {
    cuisines,
    mode,
    radius,
    pos,
    businesses,
    updateMapCenter,
    swipeCard,
  } = props;

  const tableRows = cuisines.map((cuisine) => {
    return (
      <tr key={cuisine}>
        <td>{cuisine}</td>
        <td>{mode ? "True" : "False"}</td>
        <td>{radius}</td>
      </tr>
    );
  });

  const currCard =
    businesses.length > 0 ? (
      <ResultCard
        business={businesses[0]}
        updateMapCenter={updateMapCenter}
        swipeCard={swipeCard}
        key={businesses[0].id}
      />
    ) : (
      <></>
    );

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cuisine</th>
            <th scope="col">Is Student Mode?</th>
            <th scope="col">Radius (km)</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <ResultMap pos={pos} />
      {currCard}
    </div>
  );
};
