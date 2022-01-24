import React from "react";
import { Cuisine } from "./Cuisine";
import { SearchForm } from "./components/SearchForm";
import { MDBContainer } from "mdb-react-ui-kit";

type MainPageProps = {
  formSubmitHandler(cuisines: Cuisine[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
};

export const MainPage: React.FC<MainPageProps> = (props) => {
  const { formSubmitHandler, setModeHandler, setRadiusHandler, radius } = props;

  return (
    <MDBContainer>
      <div className="p-4 text-center">
        <h1>Time to Eat!</h1>
      </div>
      <SearchForm
        formSubmitHandler={formSubmitHandler}
        setModeHandler={setModeHandler}
        setRadiusHandler={setRadiusHandler}
        radius={radius}
      />
    </MDBContainer>
  );
};
