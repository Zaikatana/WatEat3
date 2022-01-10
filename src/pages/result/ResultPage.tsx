import React from "react";
import { ResultMap } from "./ResultMap";

export const ResultPage: React.FC<{
  cuisines: string[];
  mode: boolean;
  radius: number;
  lat: number;
  lng: number;
}> = (props) => {
  const { cuisines, mode, radius, lat, lng } = props;

  const tableRows = cuisines.map((cuisine) => {
    return (
      <tr>
        <td>{cuisine}</td>
        <td>{mode ? "True" : "False"}</td>
        <td>{radius}</td>
      </tr>
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
        <tbody>
          {tableRows}
        </tbody>
      </table>
      <ResultMap lat={lat} lng={lng} />
    </div>
  );
};
