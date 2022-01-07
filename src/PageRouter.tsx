import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPageContainer } from "./pages/main/MainPageContainer";
import { ResultPageContainer } from "./pages/result/ResultPageContainer";

export const PageRouter: React.FC = () => {
  const [cuisine, setCuisine] = useState("");
  const [mode, setMode] = useState(false);
  const [radius, setRadius] = useState("5");

  const setCuisineHandler = (cuisine: string) => {
    setCuisine(cuisine);
  };

  const setModeHandler = () => {
    setMode(!mode);
  };

  const setRadiusHandler = (radius: string) => {
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
              cuisine={cuisine}
              mode={mode}
              radius={radius}
            />
          }
        />
      </Routes>
    </Router>
  );
};
