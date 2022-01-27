import React from "react";
import { SearchForm } from "./components/SearchForm";
import { MDBContainer } from "mdb-react-ui-kit";
import { Category } from "../../services/types/category.type";

type MainPageProps = {
  formSubmitHandler(categories: Category[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
  showAlert: boolean;
  setShowAlertHandler(): void;
};

export const MainPage: React.FC<MainPageProps> = (props) => {
  const {
    formSubmitHandler,
    setModeHandler,
    setRadiusHandler,
    radius,
    showAlert,
    setShowAlertHandler,
  } = props;

  return (
    <MDBContainer>
      {showAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show mt-4"
          role="alert"
        >
          <MDBContainer fluid>
            Before using, please access{" "}
            <a
              href="https://cors-anywhere.herokuapp.com/corsdemo"
              className="alert-link"
              target="_blank"
              rel="noreferrer"
              onClick={setShowAlertHandler}
            >
              this link
            </a>{" "}
            and select "Request temporary access to the demo server".
            <button
              type="button"
              className="close float-end"
              data-dismiss="alert"
              aria-label="Close"
              onClick={setShowAlertHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </MDBContainer>
        </div>
      )}
      <div className="p-4 text-center">
        <h1>Time to Eat!</h1>
      </div>
      <SearchForm
        formSubmitHandler={formSubmitHandler}
        setModeHandler={setModeHandler}
        setRadiusHandler={setRadiusHandler}
        radius={radius}
      />
    </MDBContainer>
  );
};
