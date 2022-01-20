import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPageContainer } from "./pages/main/MainPageContainer";
import { ResultPageContainer } from "./pages/result/ResultPageContainer";
import { Business } from "./services/types/business.type";

export const PageRouter: React.FC = () => {
  const [businessList, setBusinessList] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setBusinessListHandler = (businessList: Business[]) => {
    setBusinessList([...businessList]);
  }

  const setIsLoadingHandler = (bool: boolean) => {
    setIsLoading(bool);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPageContainer
              setBusinessListHandler={setBusinessListHandler}
              setIsLoadingHandler={setIsLoadingHandler}
            />
          }
        />
        <Route
          path="/result"
          element={
            <ResultPageContainer
              businessList={businessList}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </Router>
  );
};
