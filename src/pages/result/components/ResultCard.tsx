/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTable,
  MDBTableBody,
} from "mdb-react-ui-kit";
import React, { CSSProperties } from "react";
import { Business } from "../../../services/types/business.type";

type ResultCardProps = {
  business: Business;
  swipeCard: () => void;
  addToLikeList: (business: Business) => void;
};

export const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { business, swipeCard, addToLikeList } = props;
  const cardCategories = business.categories.map((category) => {
    return category.title;
  });

  const imageCss: CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "contain",
    backgroundColor: "grey",
  };

  const cardCss: CSSProperties = {
    width: "100%",
  };

  return (
    <MDBCard style={cardCss}>
      <MDBCardImage
        src={business.image_url}
        position="top"
        alt="..."
        style={imageCss}
      />
      <MDBCardBody>
        <MDBCardTitle>{business.name}</MDBCardTitle>
        <MDBCardSubTitle>
          {business.location.display_address.join(", ")}
        </MDBCardSubTitle>
        <MDBCardText>
          <MDBTable borderless striped>
            <MDBTableBody>
              <tr>
                <th scope="row">Distance</th>
                <td>{(business.distance / 1000).toFixed(2)}km away</td>
              </tr>
              <tr>
                <th scope="row">Rating</th>
                <td>{business.rating}</td>
              </tr>
              <tr>
                <th scope="row">Contact Number</th>
                <td>
                  {business.display_phone === ""
                    ? "N/A"
                    : business.display_phone}
                </td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>{business.price}</td>
              </tr>
              <tr>
                <th scope="row">Cuisine</th>
                <td>{cardCategories.join(", ")}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCardText>
        <MDBBtn onClick={() => addToLikeList(business)}>
          <MDBIcon fas icon="heart" /> Add to List
        </MDBBtn>
        <MDBBtn onClick={() => swipeCard()} className="float-end" color="info">
          <MDBIcon fas icon="heart-broken" /> Pass
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

type ResultLikeCardProps = {
  business: Business;
  updateMapCenter: (lat: number, lng: number) => void;
};

export const ResultLikeCard: React.FC<ResultLikeCardProps> = (props) => {
  const { business, updateMapCenter } = props;

  const cardCss: CSSProperties = {
    width: "95%",
    height: "20vh",
    cursor: "pointer",
  };

  const imgCss: CSSProperties = {
    height: "20vh",
    width: "20vh",
    objectFit: "contain",
    backgroundColor: "grey",
  };

  return (
    <MDBCard
      onClick={() =>
        updateMapCenter(
          business.coordinates.latitude,
          business.coordinates.longitude
        )
      }
      key={business.id}
      style={cardCss}
      className="mb-2"
    >
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={business.image_url}
              alt="..."
              fluid
              style={imgCss}
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{business.name}</MDBCardTitle>
              <MDBCardSubTitle>
                {business.location.display_address.join(", ")}
              </MDBCardSubTitle>
              <MDBCardText className="text-muted">
                <MDBRow>
                  <MDBCol>
                    <MDBIcon icon="walking" />{" "}
                    {(business.distance / 1000).toFixed(2)}km away
                  </MDBCol>
                  <MDBCol>
                    <MDBIcon icon="star" /> {business.rating}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBIcon icon="dollar-sign" /> {business.price}
                  </MDBCol>
                  <MDBCol>
                    <MDBIcon icon="phone-alt" />{" "}
                    {business.display_phone === ""
                      ? "N/A"
                      : business.display_phone}
                  </MDBCol>
                </MDBRow>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        />
      </MDBRipple>
    </MDBCard>
  );
};
