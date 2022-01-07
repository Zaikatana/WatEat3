import React from "react";
import { PageRouter } from "./PageRouter";

export const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <div className="container align-item-center">
        <div className="row text-center">
          <h2>
            WatEat? <small className="text-muted">v1</small>
          </h2>
        </div>
        <PageRouter />
      </div>
    </div>
  );
};
