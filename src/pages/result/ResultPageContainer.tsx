import React, { useEffect, useState } from "react";
import { Cuisine } from "../main/Cuisine";
import { ResultPage } from "./ResultPage";

type ResultPageContainerProps = {
  cuisines: Cuisine[];
  mode: boolean;
  radius: number;
};

export const ResultPageContainer: React.FC<ResultPageContainerProps> = (
  props
) => {
  const { cuisines, mode, radius } = props;
  const [pos, setPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setPos({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }
    );
  });

  const cuisineStrings: string[] = cuisines.map((cuisine) => {
    return cuisine.cuisine_name;
  });

  return (
    <ResultPage
      cuisines={cuisineStrings}
      mode={mode}
      radius={radius}
      pos={pos}
    />
  );
};
