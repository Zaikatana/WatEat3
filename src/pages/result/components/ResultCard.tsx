import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBTable,
  MDBTableBody,
} from "mdb-react-ui-kit";
import React, { CSSProperties } from "react";
import { Business } from "../../../services/types/business.type";

type ResultCardProps = {
  business: Business;
  swipeCard: () => void;
};

export const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { business, swipeCard } = props;
  const cardCategories = business.categories.map((category) => {
    return category.title;
  });

  const imageCss: CSSProperties = {
    width: "100%",
    height: "400px",
    objectFit: "contain",
    backgroundColor: "grey",
  };

  const cardCss: CSSProperties = {
    width: "100%",
    height: "100%",
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
        <MDBTable borderless striped>
          <MDBTableBody>
            <tr>
              <th scope="row">Distance</th>
              <td>{(business.distance/1000).toFixed(2)}km away</td>
            </tr>
            <tr>
              <th scope="row">Rating</th>
              <td>{business.rating}</td>
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
        <MDBBtn onClick={() => swipeCard()} className="float-end">
          Pass
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};
