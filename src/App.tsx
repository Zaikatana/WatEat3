import React from "react";
import { PageRouter } from "./PageRouter";

export const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <div className="container align-item-center">
        <div className="row text-center">
          <a className="navbar-brand mb-3" href="/">
            <span className="h1">WatEat?</span>
            <small className="text-muted">v1</small>
          </a>
        </div>
        <PageRouter />
      </div>
    </div>
  );
};
