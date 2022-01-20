import React from "react";
import { Business } from "../../services/types/business.type";
import { ResultCard } from "./components/ResultCard";
import { ResultMap } from "./components/ResultMap";

type ResultPageProps = {
  center: { lat: number; lng: number };
  businesses: Business[];
  updateMapCenter: (lat: number, lng: number) => void;
  swipeCard: () => void;
  isLoading: boolean;
};

export const ResultPage: React.FC<ResultPageProps> = (props) => {
  const { center, businesses, updateMapCenter, swipeCard, isLoading } = props;

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
    <div className="row">
      <div className="col-4">
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          currCard
        )}
      </div>
      <div className="col-8">
        <ResultMap center={center} />
      </div>
    </div>
  );
};
