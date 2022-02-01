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
};

export const ResultLikeCard: React.FC<ResultLikeCardProps> = (props) => {
  const { business } = props;
  const cardCategories = business.categories.map((category) => {
    return category.title;
  });

  return (
    <MDBCard>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage src={business.image_url} alt="..." fluid />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{business.name}</MDBCardTitle>
            <MDBCardSubTitle>
              {business.location.display_address.join(", ")}
            </MDBCardSubTitle>
            <MDBCardText className="text-muted">
              <MDBTable borderless>
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
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};
