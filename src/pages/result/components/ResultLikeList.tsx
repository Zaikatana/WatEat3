import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import React, { CSSProperties } from "react";
import { Business } from "../../../services/types/business.type";
import { ResultLikeCard } from "./ResultCard";

type ResultLikeListProps = {
  likeList: Business[];
  updateMapCenter: (lat: number, lng: number) => void;
};

export const ResultLikeList: React.FC<ResultLikeListProps> = (props) => {
  const { likeList, updateMapCenter } = props;

  const containerStyle: CSSProperties = {
    width: "100%",
    height: "85vh",
    overflowY: "auto",
  };

  const content =
    likeList.length > 0 ? (
      <>
        {likeList.map((business) => {
          return (
            <ResultLikeCard business={business} updateMapCenter={updateMapCenter} />
          );
        })}
      </>
    ) : (
      <div
        className="border d-flex align-items-center justify-content-center"
        style={containerStyle}
      >
        <h1 className="mb-3">
          <MDBIcon fas icon="exclamation-circle" />
        </h1>
        <h4 className="mb-3">Nothing in Like List!</h4>
      </div>
    );

  return (
    <MDBContainer>
      <div style={containerStyle}>{content}</div>
    </MDBContainer>
  );
};
