import React from "react";

export const ResultPage: React.FC<{
  cuisines: string[];
  mode: boolean;
  radius: number;
}> = (props) => {
  const { cuisines, mode, radius } = props;

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
    </div>
  );
};
