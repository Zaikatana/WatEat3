import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
const { REACT_APP_KEY } = process.env;

type ResultMapProps = {
  pos: { lat: number; lng: number };
};

export const ResultMap: React.FC<ResultMapProps> = (props) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState(null);

  const { pos } = props;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <LoadScript googleMapsApiKey={REACT_APP_KEY ? REACT_APP_KEY : ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={pos}
        zoom={18}
      >
        <Marker position={pos} />
      </GoogleMap>
    </LoadScript>
  );
};
