import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import { Cuisine, cuisines } from "./Cuisine";

export const SearchForm: React.FC<{
  setCuisineHandler(cuisines: Cuisine[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
}> = (props) => {
  const { setCuisineHandler, setModeHandler, setRadiusHandler, radius } = props;
  const [values, setValues] = useState<Cuisine[]>([]);

  return (
    <div className="row">
      <div className="form-group mb-3">
        <div className="row">
          <div className="col-8 col-md-10 col-xl-10">
            <Select
              multi
              className="form-select"
              placeholder="Select Cuisines..."
              options={cuisines}
              onChange={(values) => setValues(values)}
              values={values}
              labelField="cuisine_name"
              valueField="cuisine_id"
              closeOnSelect={true}
              keepSelectedInList={false}
              searchBy="cuisine_name"
              dropdownHandle={false}
            />
          </div>
          <div className="col-2 col-md-2 col-xl-2">
            <Link to="/result">
              <button
                className="btn btn-primary"
                name="button"
                value="list"
                onClick={() => setCuisineHandler(values)}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <div className="form-check col-5 col-md-2 col-xl-2 ms-3">
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
          <div className="col-6 col-md-9 col-xl-8">
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
              onChange={(e) => setRadiusHandler(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
