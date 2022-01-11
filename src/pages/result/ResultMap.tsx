import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export const ResultMap: React.FC<{pos: { lat: number; lng: number }}> = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB_pDxzfhiV1J2rHKZAu1RJiZKrY8Hu1bI",
  });

  const [map, setMap] = useState(null);

  const { pos } = props;

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={pos}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
        <Marker position={pos} />
    </GoogleMap>
  ) : (
    <></>
  );
};
