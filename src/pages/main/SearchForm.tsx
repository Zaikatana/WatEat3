import React from "react";
import { Link } from "react-router-dom";

export const SearchForm: React.FC<{
  setCuisineHandler(cuisine: string): void;
  setModeHandler(): void;
  setRadiusHandler(cuisine: string): void;
  radius: string;
}> = (props) => {
  const { setCuisineHandler, setModeHandler, setRadiusHandler, radius } = props;

  return (
    <div className="row">
      <div className="form-group input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Cuisine..."
          name="cuisine"
          onChange={(e) => setCuisineHandler(e.target.value)}
        />

        <Link to="/result">
          <button className="btn btn-primary" name="button" value="list">
            Search
          </button>
        </Link>
      </div>
      <div className="row mb-3">
        <div className="form-group form-check col">
          <input
            type="checkbox"
            className="form-check-input"
            name="mode"
            onChange={() => setModeHandler()}
          />
          <label className="form-check-label" htmlFor="mode">
            Student Mode
          </label>
        </div>
        <div className="form-group col">
          <label htmlFor="radius" className="form-label">
            Radius ({radius} km)
          </label>
          <input
            className="form-range"
            type="range"
            name="radius"
            min="5"
            max="50"
            step="5"
            value={radius}
            onChange={(e) => setRadiusHandler(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
