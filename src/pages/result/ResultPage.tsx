import { MDBCol, MDBContainer, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import React, { CSSProperties } from "react";
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

  const containerCss: CSSProperties = {
    minHeight: "100%",
    height: "94vh",
    minWidth: "100%",
  };

  return (
    <MDBContainer fluid>
      {isLoading ? (
        <div
          className="border d-flex align-items-center justify-content-center"
          style={containerCss}
        >
          <MDBSpinner grow>
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        <div style={containerCss}>
          <MDBRow>
            <MDBCol md="3">{currCard}</MDBCol>
            <MDBCol md="9">
              <ResultMap center={center} />
            </MDBCol>
          </MDBRow>
        </div>
      )}
    </MDBContainer>
  );
};
