import React, { useEffect, useState } from "react";
import { Cuisine } from "../main/Cuisine";
import { ResultPage } from "./ResultPage";

export const ResultPageContainer: React.FC<{
  cuisines: Cuisine[];
  mode: boolean;
  radius: number;
}> = (props) => {
  const { cuisines, mode, radius } = props;

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    });
  });

  const cuisineStrings: string[] = cuisines.map((cuisine) => {
    return cuisine.cuisine_name;
  });

  return <ResultPage cuisines={cuisineStrings} mode={mode} radius={radius} lng={lng} lat={lat} />;
};
