import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPageContainer } from "./pages/main/MainPageContainer";
import { ResultPageContainer } from "./pages/result/ResultPageContainer";
import { Business } from "./services/types/business.type";

export const PageRouter: React.FC = () => {
  const [businessList, setBusinessList] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currPos, setCurrPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [positionLoading, setPositionLoading] = useState<boolean>(true);

  const setBusinessListHandler = (businessList: Business[]) => {
    setBusinessList([...businessList]);
  };

  const setIsLoadingHandler = (bool: boolean) => {
    setIsLoading(bool);
  };

  useEffect(() => {
    setPositionLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrPos(currentPosition);
    });
    setPositionLoading(false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/wateat"
          element={
            <MainPageContainer
              setBusinessListHandler={setBusinessListHandler}
              setIsLoadingHandler={setIsLoadingHandler}
              positionLoading={positionLoading}
              currPos={currPos}
            />
          }
        />
        <Route
          path="/wateat/result"
          element={
            <ResultPageContainer
              businessList={businessList}
              isLoading={isLoading}
              currPos={currPos}
            />
          }
        />
      </Routes>
    </Router>
  );
};
