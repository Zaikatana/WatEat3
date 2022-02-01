/* eslint-disable react/jsx-no-undef */
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBSpinner,
} from "mdb-react-ui-kit";
import React from "react";
import { Business } from "../../services/types/business.type";
import { ResultMap } from "./components/ResultMap";
import { ResultTab } from "./components/ResultTab";

type ResultPageProps = {
  center: { lat: number; lng: number };
  businesses: Business[];
  swipeCard: () => void;
  isLoading: boolean;
  addToLikeList: (business: Business) => void;
  likeList: Business[];
};

export const ResultPage: React.FC<ResultPageProps> = (props) => {
  const { center, businesses, swipeCard, isLoading, addToLikeList, likeList } =
    props;

  const containerStyle = {
    width: "100%",
    height: "94vh",
  };

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
          <MDBCol md="4">
            <ResultTab
              businesses={businesses}
              swipeCard={swipeCard}
              likeList={likeList}
              addToLikeList={addToLikeList}
            />
          </MDBCol>
          <MDBCol md="8">
            <ResultMap center={center} />
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};
