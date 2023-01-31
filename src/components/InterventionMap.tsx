import { useState, useEffect } from "react";
import Map, { Marker, NavigationControl, useMap, Popup } from "react-map-gl";
import mapbox from "mapbox-gl";
import type { LngLat, LngLatBounds } from "react-map-gl";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { IInterventionPoi } from "@interfaces/IIntervention";

const KIEV_CENTER = new mapbox.LngLat(30.4908226, 50.4178674);

const InterventionMap = ({
  interventions,
  token,
}: {
  interventions: IInterventionPoi[];
  token: string;
}) => {
  const [bounds, setBounds] = useState<LngLatBounds>(null);
  const [selectedPoi, setSelectedPoi] = useState<number>(null);

  console.log(interventions);

  useEffect(() => {
    const finalBounds = interventions.reduce((bounds, poi) => {
      return bounds.extend([poi.locationLngLat.lng, poi.locationLngLat.lat]);
    }, new mapbox.LngLatBounds(interventions[0].locationLngLat, interventions[0].locationLngLat));
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
            latitude={intervention.locationLngLat.lat}
            longitude={intervention.locationLngLat.lng}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedPoi(index);
            }}
          >
            <CustomMarker
              selected={selectedPoi === index}
              className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer"
            />
          </Marker>
        ))}

      {selectedPoi !== null && (
        <Popup
          longitude={interventions[selectedPoi].locationLngLat.lng}
          latitude={interventions[selectedPoi].locationLngLat.lat}
          onClose={() => setSelectedPoi(null)}
          closeButton={false}
          className="my-map-popup"
        >
          <div className={`w-full h-[171px] justify-end relative`}>
            <img
              src={interventions[selectedPoi].image}
              alt="Interventions"
              className="h-[171px] w-full object-cover"
            />
            <div className="h-full w-full absolute top-0 bg-gradient-to-b from-transparent to-black opacity-80" />

            <a href={interventions[selectedPoi].url}>
              <ArrowIcon className="absolute top-4 right-4 z-10 text-white h-6 w-6" />
            </a>
            <div className="absolute bottom-0 flex flex-col gap-1.5 p-4">
              <a href={interventions[selectedPoi].url}>
                <span className="text-sm leading-[14px] opacity-70">
                  {interventions[selectedPoi].date}
                </span>
                <h3 className="text-base font-semibold leading-4">
                  {interventions[selectedPoi].title}
                </h3>
              </a>
            </div>
          </div>
        </Popup>
      )}

      <NavigationControl
        style={{
          borderRadius: "0px",
          backgroundColor: "#FFFFFF",
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

const CustomMarker = ({
  selected,
  className,
}: {
  selected?: boolean;
  className?: string;
}) => {
  return (
    <svg
      display="block"
      height="41px"
      width="27px"
      viewBox="0 0 27 41"
      className={className}
    >
      <defs>
        <radialGradient id="shadowGradient">
          <stop offset="10%" stopOpacity="0.4"></stop>
          <stop offset="100%" stopOpacity="0.05"></stop>
        </radialGradient>
      </defs>
      <ellipse
        cx="13.5"
        cy="34.8"
        rx="10.5"
        ry="5.25"
        fill="url(#shadowGradient)"
      ></ellipse>
      <path
        fill={selected ? "#009664" : "#707070"}
        d="M27,13.5C27,19.07 20.25,27 14.75,34.5C14.02,35.5 12.98,35.5 12.25,34.5C6.75,27 0,19.22 0,13.5C0,6.04 6.04,0 13.5,0C20.96,0 27,6.04 27,13.5Z"
      ></path>
      <path
        opacity="0.25"
        d="M13.5,0C6.04,0 0,6.04 0,13.5C0,19.22 6.75,27 12.25,34.5C13,35.52 14.02,35.5 14.75,34.5C20.25,27 27,19.07 27,13.5C27,6.04 20.96,0 13.5,0ZM13.5,1C20.42,1 26,6.58 26,13.5C26,15.9 24.5,19.18 22.22,22.74C19.95,26.3 16.71,30.14 13.94,33.91C13.74,34.18 13.61,34.32 13.5,34.44C13.39,34.32 13.26,34.18 13.06,33.91C10.28,30.13 7.41,26.31 5.02,22.77C2.62,19.23 1,15.95 1,13.5C1,6.58 6.58,1 13.5,1Z"
      ></path>
      <circle fill="white" cx="13.5" cy="13.5" r="5.5"></circle>
    </svg>
  );
};

export default InterventionMap;
