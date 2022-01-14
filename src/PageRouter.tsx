import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cuisine } from "./pages/main/Cuisine";
import { MainPageContainer } from "./pages/main/MainPageContainer";
import { ResultPageContainer } from "./pages/result/components/ResultPageContainer";

export const PageRouter: React.FC = () => {
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [mode, setMode] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(5);

  const setCuisineHandler = (cuisines: Cuisine[]) => {
    setCuisines(cuisines);
  };

  const setModeHandler = () => {
    setMode(!mode);
  };

  const setRadiusHandler = (radius: number) => {
    setRadius(radius);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPageContainer
              setCuisineHandler={setCuisineHandler}
              setModeHandler={setModeHandler}
              setRadiusHandler={setRadiusHandler}
              radius={radius}
            />
          }
        />
        <Route
          path="/result"
          element={
            <ResultPageContainer
              cuisines={cuisines}
              mode={mode}
              radius={radius}
            />
          }
        />
      </Routes>
    </Router>
  );
};
