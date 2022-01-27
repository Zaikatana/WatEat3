import { AxiosInstance } from "axios";
import React, { useEffect, useState } from "react";
import { Business } from "../../services/types/business.type";
import { Category } from "../../services/types/category.type";
import { YelpService } from "../../services/YelpService";
import { MainPage } from "./MainPage";

type MainPageContainerProps = {
  setBusinessListHandler: (businessList: Business[]) => void;
  setIsLoadingHandler: (bool: boolean) => void;
};

export const MainPageContainer: React.FC<MainPageContainerProps> = (props) => {
  const { setBusinessListHandler, setIsLoadingHandler } = props;
  const [mode, setMode] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(1);
  const [currPos, setCurrPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [showAlert, setShowAlert] = useState<boolean>(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrPos(currentPosition);
    });
  }, []);

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
    const categoriesString = categories.join(",");
    const yelpBusinessService: AxiosInstance =
      YelpService.createYelpBusinessInstance();
    yelpBusinessService
      .get("/search", {
        params: {
          latitude: currPos.lat,
          longitude: currPos.lng,
          radius: radius * 1000,
          categories: categories.length > 0 ? categoriesString : "food",
          limit: 10,
          sort_by: "rating",
          price: mode ? "1, 2" : "1, 2, 3, 4",
          open_now: true,
        },
      })
      .then((response) => {
        setBusinessListHandler(response.data.businesses as Business[]);
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
    />
  );
};
