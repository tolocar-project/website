import { useState, useEffect } from "react";
import Map, { Marker, NavigationControl, useMap } from "react-map-gl";
import mapbox from "mapbox-gl";
import type { LngLat, LngLatBounds } from "react-map-gl";

const KIEV_CENTER = new mapbox.LngLat(30.4908226, 50.4178674);

const InterventionMap = ({
  interventions,
  token,
}: {
  interventions: LngLat[];
  token: string;
}) => {
  const [bounds, setBounds] = useState<LngLatBounds>(null);
  // const [selectedPoi, setSelectedPoi] = useState<LngLat>(null);

  useEffect(() => {
    const finalBounds = interventions.reduce((bounds, poi) => {
      return bounds.extend([poi.lng, poi.lat]);
    }, new mapbox.LngLatBounds(interventions[0], interventions[0]));
    setBounds(finalBounds);
  }, [interventions]);

  return (
    <Map
      initialViewState={{
        longitude: KIEV_CENTER.lng,
        latitude: KIEV_CENTER.lat,
        zoom: 10,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
      maxPitch={0}
    >
      {Boolean(interventions.length) &&
        interventions.map((intervention, index) => (
          <Marker
            key={index}
            latitude={intervention.lat}
            longitude={intervention.lng}
            anchor="bottom"
            color="#009664"
          />
        ))}
      <NavigationControl
        style={{
          borderRadius: "0px",
          backgroundColor: "#FFFFFF",
          color: "#131313",
        }}
        position="top-right"
        showCompass={false}
      />
      <MapBoundsController bounds={bounds} />
    </Map>
  );
};

const MapBoundsController = ({ bounds }) => {
  const { current: map } = useMap();

  useEffect(() => {
    map.fitBounds(bounds, { padding: 100, linear: true });
  }, []);

  return null;
};

export default InterventionMap;
