import React, { useState } from "react";
import { Business, testResponse } from "../../services/types/business.type";
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
  const businesses = testResponse.businesses;
  const { latitude, longitude } = businesses[0].coordinates;

  const [pos, setPos] = useState<{ lat: number; lng: number }>({
    lat: latitude,
    lng: longitude,
  });
  const [cards, setCards] = useState<Business[]>(businesses);

  const updateMapCenter = (lat: number, lng: number) => {
    setPos({
      lat,
      lng,
    });
  };

  const swipeCard = () => {
    cards.shift();
    setCards([...cards]);
    if (cards.length > 0) {
      // TODO: When Yelp Service is implemented, we want to get 10 more cards instead
      updateMapCenter(
        cards[0].coordinates.latitude,
        cards[0].coordinates.longitude
      );
    }
  };

  const cuisineStrings: string[] = cuisines.map((cuisine) => {
    return cuisine.cuisine_name;
  });

  return (
    <ResultPage
      cuisines={cuisineStrings}
      mode={mode}
      radius={radius}
      pos={pos}
      businesses={cards}
      updateMapCenter={updateMapCenter}
      swipeCard={swipeCard}
    />
  );
};
