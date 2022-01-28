import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSpinner,
} from "mdb-react-ui-kit";
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

  const containerStyle = {
    width: "100%",
    height: "94vh",
  };

  const currCard =
    businesses.length > 0 ? (
      <ResultCard
        business={businesses[0]}
        swipeCard={swipeCard}
        key={businesses[0].id}
      />
    ) : (
      <MDBContainer>
        <div
          className="border d-flex align-items-center justify-content-center"
          style={containerStyle}
        >
          <h1 className="mb-3">
            <MDBIcon fas icon="exclamation-circle" />
          </h1>
          <h4 className="mb-3">No results retrieved!</h4>
        </div>
      </MDBContainer>
    );

  return (
    <MDBContainer fluid>
      {isLoading ? (
        <div
          className="border d-flex align-items-center justify-content-center"
          style={containerStyle}
        >
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
