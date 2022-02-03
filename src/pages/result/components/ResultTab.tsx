import {
  MDBContainer,
  MDBIcon,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Business } from "../../../services/types/business.type";
import { ResultCard } from "./ResultCard";
import { ResultLikeList } from "./ResultLikeList";

type ResultTabProps = {
  businesses: Business[];
  swipeCard: () => void;
  addToLikeList: (business: Business) => void;
  likeList: Business[];
  updateMapCenter: (lat: number, lng: number) => void;
};

export const ResultTab: React.FC<ResultTabProps> = (props) => {
  const [basicActive, setBasicActive] = useState<string>("tab1");
  const { businesses, swipeCard, likeList, addToLikeList, updateMapCenter } =
    props;

  const handleBasicClick = (value: string) => {
    if (value === "tab1" && businesses.length > 0) {
      updateMapCenter(
        businesses[0].coordinates.latitude,
        businesses[0].coordinates.longitude
      );
    }
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

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
        addToLikeList={addToLikeList}
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
    <>
      <MDBTabs className="m-2">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            Search Results
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            Like List
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}>{currCard}</MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab2"}>
          <ResultLikeList
            likeList={likeList}
            updateMapCenter={updateMapCenter}
          />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
};
