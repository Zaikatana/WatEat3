import React from "react";
import { ResultPage } from "./ResultPage";

export const ResultPageContainer: React.FC<{
    cuisine: string;
    mode: boolean;
    radius: string;
}> = (props) => {
  const {
    cuisine,
    mode,
    radius,
  } = props;

  return (
    <ResultPage
      cuisine={cuisine}
      mode={mode}
      radius={radius}
    />
  );
};
