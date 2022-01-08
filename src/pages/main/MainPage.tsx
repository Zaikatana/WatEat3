import React from "react";
import { Cuisine } from "./Cuisine";
import { SearchForm } from "./SearchForm";

export const MainPage: React.FC<{
  setCuisineHandler(cuisines: Cuisine[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
}> = (props) => {
  const {
    setCuisineHandler,
    setModeHandler,
    setRadiusHandler,
    radius,
  } = props;

  return (
    <SearchForm
      setCuisineHandler={setCuisineHandler}
      setModeHandler={setModeHandler}
      setRadiusHandler={setRadiusHandler}
      radius={radius}
    />
  );
};
