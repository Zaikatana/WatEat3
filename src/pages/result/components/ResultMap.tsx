import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const { REACT_APP_KEY } = process.env;

type ResultMapProps = {
  pos: { lat: number; lng: number };
};

export const ResultMap: React.FC<ResultMapProps> = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: REACT_APP_KEY ? REACT_APP_KEY : "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    width: "100%",
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
