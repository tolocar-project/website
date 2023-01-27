import { IInterventionFrontmatter } from "@interfaces/IIntervention";
import { MDXInstance } from "astro";
import React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";

const InterventionMap = ({
  interventions,
  token
}: {
  interventions: MDXInstance<IInterventionFrontmatter>[]; token: string;
}) => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={token}
    >
      {interventions.map((intervention, index) => {
        return intervention?.frontmatter?.locationLngLat?.length ? (
          <Marker
            key={index}
            latitude={intervention.frontmatter?.locationLngLat[1]}
            longitude={intervention.frontmatter?.locationLngLat[0]}
            anchor="bottom"
          />
        ) : null;
      })}
      <NavigationControl
        style={{ borderRadius: "0px" }}
        position="top-right"
        showCompass={false}
      />
    </Map>
  );
};

export default InterventionMap;
