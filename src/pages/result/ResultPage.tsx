import React from "react";
import { testResponse } from "../../services/types/business.type";
import { ResultCard } from "./components/ResultCard";
import { ResultMap } from "./components/ResultMap";

type ResultPageProps = {
  cuisines: string[];
  mode: boolean;
  radius: number;
  pos: { lat: number; lng: number };
  updateMapCenter: (lat: number, lng: number) => void;
};

export const ResultPage: React.FC<ResultPageProps> = (props) => {
  const { cuisines, mode, radius, pos, updateMapCenter } = props;

  const tableRows = cuisines.map((cuisine) => {
    return (
      <tr key={cuisine}>
        <td>{cuisine}</td>
        <td>{mode ? "True" : "False"}</td>
        <td>{radius}</td>
      </tr>
    );
  });

  const businesses = testResponse;
  const cards = businesses.businesses.map((business) => {
    return (
      <ResultCard business={business} updateMapCenter={updateMapCenter} key={business.id}/>
    );
  });

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
      {cards}
    </div>
  );
};
