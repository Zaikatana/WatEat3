import React from "react";
import { Cuisine } from "./Cuisine";
import { MainPage } from "./MainPage";

export const MainPageContainer: React.FC<{
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
    <MainPage
      setCuisineHandler={setCuisineHandler}
      setRadiusHandler={setRadiusHandler}
      setModeHandler={setModeHandler}
      radius={radius}
    />
  );
};
