import React from "react";
import { SearchForm } from "./SearchForm";

export const MainPage: React.FC<{
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
    <SearchForm
      setCuisineHandler={setCuisineHandler}
      setModeHandler={setModeHandler}
      setRadiusHandler={setRadiusHandler}
      radius={radius}
    />
  );
};
