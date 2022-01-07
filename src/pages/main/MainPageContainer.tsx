import React from "react";
import { MainPage } from "./MainPage";

export const MainPageContainer: React.FC<{
  setCuisineHandler(cuisine: string): void;
  setModeHandler(): void;
  setRadiusHandler(cuisine: string): void;
  radius: string;
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
