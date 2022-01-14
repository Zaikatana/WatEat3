import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import { Cuisine, cuisines } from "../Cuisine";

type SearchFormProps = {
  setCuisineHandler(cuisines: Cuisine[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setCuisineHandler, setModeHandler, setRadiusHandler, radius } = props;
  const [values, setValues] = useState<Cuisine[]>([]);

  return (
    <div className="row">
      <form>
        <div className="row mb-3 d-flex align-items-center">
          <div className="col-sm-10 col-10">
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
          <div className="col-sm-2 col-2">
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
        <div className="row mb-3 d-flex align-items-center">
          <div className="col-sm-10 col-10">
            <label htmlFor="radius" className="form-label">
              Radius ({radius} km)
            </label>
            <input
              className="form-range"
              type="range"
              name="radius"
              id="radius"
              min="5"
              max="50"
              step="5"
              value={radius}
              onChange={(e) => setRadiusHandler(parseInt(e.target.value))}
            />
          </div>
          <div className="form-check col-sm-2 col-2">
            <label className="form-check-label" htmlFor="mode">
              Student Mode
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="mode"
              name="mode"
              onChange={() => setModeHandler()}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
