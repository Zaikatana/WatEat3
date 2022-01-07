import React from "react";

export const ResultPage: React.FC<{
  cuisine: string;
  mode: boolean;
  radius: string;
}> = (props) => {
  const { cuisine, mode, radius } = props;

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
          <tr>
            <td>{cuisine}</td>
            <td>{mode ? "True" : "False"}</td>
            <td>{radius}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
