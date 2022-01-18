import React from "react";
import { Business } from "../../services/types/business.type";
import { ResultCard } from "./components/ResultCard";
import { ResultMap } from "./components/ResultMap";

type ResultPageProps = {
  center: { lat: number; lng: number };
  businesses: Business[];
  updateMapCenter: (lat: number, lng: number) => void;
  swipeCard: () => void;
};

export const ResultPage: React.FC<ResultPageProps> = (props) => {
  const { center, businesses, updateMapCenter, swipeCard } = props;
  console.log(businesses);
  
  const currCard =
    businesses.length > 0 ? (
      <ResultCard
        business={businesses[0]}
        updateMapCenter={updateMapCenter}
        swipeCard={swipeCard}
        key={businesses[0].id}
      />
    ) : (
      <></>
    );

  return (
    <div>
      <ResultMap center={center} />
      {currCard}
    </div>
  );
};
