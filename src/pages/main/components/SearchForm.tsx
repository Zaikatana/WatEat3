import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBRange,
  MDBRow,
} from "mdb-react-ui-kit";
import { categories, Category } from "../../../services/types/category.type";

type SearchFormProps = {
  formSubmitHandler(categories: Category[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
  positionLoading: boolean;
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { formSubmitHandler, setModeHandler, setRadiusHandler, radius, positionLoading } = props;
  const [values, setValues] = useState<Category[]>([]);

  return (
    <>
      <form>
        <MDBRow className="mb-3">
          <MDBCol>
            <Select
              multi
              placeholder="Select Cuisines..."
              options={categories}
              onChange={(values) => setValues(values)}
              values={values}
              labelField="title"
              valueField="alias"
              closeOnSelect={true}
              keepSelectedInList={false}
              searchBy="title"
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
              disabled={positionLoading}
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
