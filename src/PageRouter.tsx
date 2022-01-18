import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPageContainer } from "./pages/main/MainPageContainer";
import { ResultPageContainer } from "./pages/result/ResultPageContainer";
import { Business, testResponse } from "./services/types/business.type";

export const PageRouter: React.FC = () => {
  const businesses = testResponse.businesses;
  const [businessList, setBusinessList] = useState<Business[]>(businesses);

  const setBusinessListHandler = (businessList: Business[]) => {
    setBusinessList(businessList);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPageContainer
              setBusinessListHandler={setBusinessListHandler}
            />
          }
        />
        <Route
          path="/result"
          element={
            <ResultPageContainer
              businessList={businessList}
            />
          }
        />
      </Routes>
    </Router>
  );
};
