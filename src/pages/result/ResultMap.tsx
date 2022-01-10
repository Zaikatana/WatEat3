import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export const ResultMap: React.FC<{lat: number, lng: number}> = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB_pDxzfhiV1J2rHKZAu1RJiZKrY8Hu1bI",
  });

  const [map, setMap] = useState(null);

  const { lat, lng } = props;

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  
  const center = {
    lat: lat,
    lng: lng,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <></>
  );
};
