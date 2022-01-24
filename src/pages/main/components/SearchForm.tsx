import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import { Cuisine, cuisines } from "../Cuisine";
import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBRange,
  MDBRow,
} from "mdb-react-ui-kit";

type SearchFormProps = {
  formSubmitHandler(cuisines: Cuisine[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { formSubmitHandler, setModeHandler, setRadiusHandler, radius } = props;
  const [values, setValues] = useState<Cuisine[]>([]);

  return (
    <>
      <form>
        <MDBRow className="mb-3">
          <MDBCol>
            <Select
              multi
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
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <MDBRange
              value={radius}
              min="1"
              max="5"
              step="1"
              id="radius"
              label={`Radius (${radius} km)`}
              onChange={(e: any) => setRadiusHandler(parseInt(e.target.value))}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <MDBCheckbox
              name="mode"
              id="mode"
              onChange={() => setModeHandler()}
              label="Student Mode"
            />
          </MDBCol>
          <MDBCol>
            <Link to="/result">
              <MDBBtn
                name="button"
                className="float-end"
                value="list"
                onClick={() => formSubmitHandler(values)}
              >
                Search
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </form>
    </>
  );
};
