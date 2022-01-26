import { MDBCol, MDBContainer, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import React from "react";
import { Business } from "../../services/types/business.type";
import { ResultCard } from "./components/ResultCard";
import { ResultMap } from "./components/ResultMap";

type ResultPageProps = {
  center: { lat: number; lng: number };
  businesses: Business[];
  swipeCard: () => void;
  isLoading: boolean;
};

export const ResultPage: React.FC<ResultPageProps> = (props) => {
  const { center, businesses, swipeCard, isLoading } = props;

  const currCard =
    businesses.length > 0 ? (
      <ResultCard
        business={businesses[0]}
        swipeCard={swipeCard}
        key={businesses[0].id}
      />
    ) : (
      <></>
    );

  return (
    <MDBContainer fluid>
      {isLoading ? (
        <div className="border d-flex align-items-center justify-content-center">
          <MDBSpinner grow>
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        <MDBRow>
          <MDBCol md="4">{currCard}</MDBCol>
          <MDBCol md="8">
            <ResultMap center={center} />
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};
