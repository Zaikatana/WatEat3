import React, { useEffect, useState } from "react";
import { Business } from "../../services/types/business.type";
import { ResultPage } from "./ResultPage";

type ResultPageContainerProps = {
  businessList: Business[];
  isLoading: boolean;
  currPos: { lat: number; lng: number };
};

export const ResultPageContainer: React.FC<ResultPageContainerProps> = (
  props
) => {
  const { businessList, isLoading, currPos } = props;
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [cards, setCards] = useState<Business[]>(businessList);
  const [likeList, setLikeList] = useState<Business[]>([]);

  useEffect(() => {
    setCards([...businessList]);
    const { latitude, longitude } =
      businessList.length > 0
        ? businessList[0].coordinates
        : { latitude: currPos.lat, longitude: currPos.lng };
    setCenter({
      lat: latitude,
      lng: longitude,
    });
  }, [businessList, currPos]);

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
      // TODO: When Yelp Service is implemented, we want to offer option to get 10 more cards instead
      updateMapCenter(
        cards[0].coordinates.latitude,
        cards[0].coordinates.longitude
      );
    }
  };

  const addToLikeList = (business: Business) => {
    likeList.push(business);
    setLikeList([...likeList]);
    swipeCard();
  };

  return (
    <ResultPage
      center={center}
      businesses={cards}
      isLoading={isLoading}
      swipeCard={swipeCard}
      likeList={likeList}
      addToLikeList={addToLikeList}
      updateMapCenter={updateMapCenter}
    />
  );
};
