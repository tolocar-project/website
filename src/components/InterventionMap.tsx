import { IInterventionFrontmatter } from "@interfaces/IIntervention";
import { MDXInstance } from "astro";
import React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";

const InterventionMap = ({
  interventions,
  token,
}: {
  interventions: MDXInstance<IInterventionFrontmatter>[];
  token: string;
}) => {
  return (
    <Map
      initialViewState={{
        longitude: 9.99368,
        latitude: 53.55108,
        zoom: 10,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
    >
      {interventions.map((intervention, index) => {
        return intervention?.frontmatter?.locationLngLat?.length ? (
          <Marker
            key={index}
            latitude={intervention.frontmatter?.locationLngLat[1]}
            longitude={intervention.frontmatter?.locationLngLat[0]}
            anchor="bottom"
            color="#009664"
          />
        ) : null;
      })}
      <NavigationControl
        style={{ borderRadius: "0px", backgroundColor: "#FFFFFF", color:"#131313" }}
        position="top-right"
        showCompass={false}
      />
    </Map>
  );
};

export default InterventionMap;
