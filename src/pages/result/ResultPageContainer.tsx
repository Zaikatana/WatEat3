import React, { useState } from "react";
import { Business } from "../../services/types/business.type";
import { ResultPage } from "./ResultPage";

type ResultPageContainerProps = {
  businessList: Business[];
};

export const ResultPageContainer: React.FC<ResultPageContainerProps> = (
  props
) => {
  const { businessList } = props;
  const { latitude, longitude } = businessList[0].coordinates;

  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: latitude,
    lng: longitude,
  });
  // TODO: Get Rid of This
  const [cards, setCards] = useState<Business[]>(businessList);

  const updateMapCenter = (lat: number, lng: number) => {
    setCenter({
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

  return (
    <ResultPage
      center={center}
      businesses={cards}
      updateMapCenter={updateMapCenter}
      swipeCard={swipeCard}
    />
  );
};
