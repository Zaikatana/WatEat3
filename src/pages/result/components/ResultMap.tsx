import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
const { REACT_APP_KEY } = process.env;

type ResultMapProps = {
  center: { lat: number; lng: number };
};

export const ResultMap: React.FC<ResultMapProps> = (props) => {
  const { center } = props;

  const containerStyle = {
    width: "100%",
    height: "94vh",
  };

  return (
    <LoadScript googleMapsApiKey={REACT_APP_KEY ? REACT_APP_KEY : ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};
