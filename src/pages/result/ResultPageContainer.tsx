import React from "react";
import { Cuisine } from "../main/Cuisine";
import { ResultPage } from "./ResultPage";

export const ResultPageContainer: React.FC<{
  cuisines: Cuisine[];
  mode: boolean;
  radius: number;
}> = (props) => {
  const { cuisines, mode, radius } = props;

  const cuisineStrings: string[] = cuisines.map((cuisine) => {
    return cuisine.cuisine_name;
  });

  return <ResultPage cuisines={cuisineStrings} mode={mode} radius={radius} />;
};
