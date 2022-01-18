import React from "react";
import { Cuisine } from "./Cuisine";
import { SearchForm } from "./components/SearchForm";

type MainPageProps = {
  formSubmitHandler(cuisines: Cuisine[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
};

export const MainPage: React.FC<MainPageProps> = (props) => {
  const { formSubmitHandler, setModeHandler, setRadiusHandler, radius } = props;

  return (
    <SearchForm
      formSubmitHandler={formSubmitHandler}
      setModeHandler={setModeHandler}
      setRadiusHandler={setRadiusHandler}
      radius={radius}
    />
  );
};
