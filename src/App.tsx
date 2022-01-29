import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import React from "react";
import { PageRouter } from "./PageRouter";

export const App: React.FC = () => {
  return (
    <div className="App">
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
        <MDBNavbarBrand href='/wateat'>WatEat?</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <PageRouter />
    </div>
  );
};
