import React, { CSSProperties } from "react";
import { SearchForm } from "./components/SearchForm";
import { MDBContainer, MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import { Category } from "../../services/types/category.type";

type MainPageProps = {
  formSubmitHandler(categories: Category[]): void;
  setModeHandler(): void;
  setRadiusHandler(radius: number): void;
  radius: number;
  showAlert: boolean;
  setShowAlertHandler(): void;
  positionLoading: boolean;
};

export const MainPage: React.FC<MainPageProps> = (props) => {
  const {
    formSubmitHandler,
    setModeHandler,
    setRadiusHandler,
    radius,
    showAlert,
    setShowAlertHandler,
    positionLoading,
  } = props;

  const containerCss: CSSProperties = {
    height: "85.5vh",
  };

  return (
    <>
      <MDBContainer style={containerCss}>
        {showAlert && (
          <div
            className="alert alert-warning alert-dismissible fade show mt-4"
            role="alert"
          >
            <MDBContainer fluid>
              <MDBIcon fas icon="exclamation-circle" /> Before using, please
              access{" "}
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
          positionLoading={positionLoading}
        />
      </MDBContainer>
      <MDBFooter>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          WatEat v1.0 - Created by Brian Luc {" "}
          <a
            href="https://www.flaticon.com/free-icons/dinner"
            title="dinner icons"
          >
            Dinner icon created by Freepik - Flaticon
          </a>
        </div>
      </MDBFooter>
    </>
  );
};
