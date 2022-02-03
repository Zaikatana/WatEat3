import { AxiosInstance } from "axios";
import React, { useState } from "react";
import { Business } from "../../services/types/business.type";
import { Category } from "../../services/types/category.type";
import { YelpService } from "../../services/YelpService";
import { MainPage } from "./MainPage";

type MainPageContainerProps = {
  setBusinessListHandler: (businessList: Business[]) => void;
  setIsLoadingHandler: (bool: boolean) => void;
  currPos: { lat: number; lng: number };
  positionLoading: boolean;
};

export const MainPageContainer: React.FC<MainPageContainerProps> = (props) => {
  const { setBusinessListHandler, setIsLoadingHandler, currPos, positionLoading } = props;
  const [mode, setMode] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(1);

  const [showAlert, setShowAlert] = useState<boolean>(true);

  const setModeHandler = () => {
    setMode(!mode);
  };

  const setRadiusHandler = (radius: number) => {
    setRadius(radius);
  };

  const setShowAlertHandler = () => {
    setShowAlert(false);
  };

  const formSubmitHandler = async (categories: Category[]) => {
    setIsLoadingHandler(true);
    const categoriesString = categories
      .map((category) => {
        return category.alias;
      })
      .join(",");
    const yelpBusinessService: AxiosInstance =
      YelpService.createYelpBusinessInstance();
    yelpBusinessService
      .get("/search", {
        params: {
          latitude: currPos.lat,
          longitude: currPos.lng,
          radius: radius * 1000,
          categories: categories.length > 0 ? categoriesString : "restaurants,food",
          price: mode ? "1, 2" : "1, 2, 3, 4",
          open_at: Math.floor(Date.now()/1000),
        },
      })
      .then((response) => {
        const randArr = response.data.businesses.sort(() => Math.random() - 0.5);
        setBusinessListHandler(randArr.slice(0,20) as Business[]);
        setIsLoadingHandler(false);
      });
  };

  return (
    <MainPage
      formSubmitHandler={formSubmitHandler}
      setRadiusHandler={setRadiusHandler}
      setModeHandler={setModeHandler}
      radius={radius}
      showAlert={showAlert}
      setShowAlertHandler={setShowAlertHandler}
      positionLoading={positionLoading}
    />
  );
};
