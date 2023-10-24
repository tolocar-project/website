import React, { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import type { IInterventionPoi } from "@interfaces/IIntervention";
import useWindowSize from "../util/useWindowSize";
import { ConditionalWrapper, TolocarMarker } from "@components";

const InterventionMap = ({
  interventions,
  token,
  bounds,
}: {
  interventions: IInterventionPoi[];
  token: string;
  bounds: [[number, number], [number, number]];
}) => {
  const [selectedPoi, setSelectedPoi] = useState<number | null>(null);
  const [isMarkerClicked, setIsMarkerClicked] = useState(false);

  const { width } = useWindowSize();

  const categoryStyleMapping: Record<string, string> = {
    Education: "!text-[#005343]",
    "(Re)Construction": "!text-[#16cf91]",
    Awareness: "!text-[#009664]",
    blog: "!text-[#e9418b]",
    default: "",
  };

  return (
    <Map
      initialViewState={{ bounds, fitBoundsOptions: { padding: 50 } }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
      maxPitch={0}
    >
      {Boolean(interventions.length) &&
        interventions.map((intervention, index) => (
          <Marker
            key={index}
            longitude={intervention.locationLngLat[0]}
            latitude={intervention.locationLngLat[1]}
          >
            <TolocarMarker
              className={`transition duration-200 ease-in-out hover:scale-125 cursor-pointer ${
                categoryStyleMapping[intervention?.category || "default"] || ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (
                  interventions[selectedPoi as number].url &&
                  width &&
                  width > 1024
                ) {
                  window.location.href =
                    interventions[selectedPoi as number].url;
                } else {
                  setIsMarkerClicked(true);
                  setSelectedPoi(index);
                }
              }}
              onMouseEnter={() => {
                if (!isMarkerClicked) {
                  if (selectedPoi !== index) setSelectedPoi(index);
                }
              }}
              onMouseLeave={(e) => {
                if (!isMarkerClicked) {
                  const movedToPopup =
                    Boolean((e.relatedTarget as HTMLElement).closest) &&
                    Boolean(
                      (e.relatedTarget as HTMLElement).closest(".my-map-popup")
                    );
                  if (movedToPopup) {
                    e.stopPropagation();
                  } else {
                    setSelectedPoi(null);
                  }
                }
              }}
            />
          </Marker>
        ))}

      {selectedPoi !== null && (
        <Popup
          longitude={interventions[selectedPoi].locationLngLat[0]}
          latitude={interventions[selectedPoi].locationLngLat[1]}
          closeButton={false}
          className="my-map-popup"
          maxWidth="none"
          offset={30}
          onClose={() => {
            setSelectedPoi(null);
            setIsMarkerClicked(false);
          }}
          closeOnClick
        >
          <ConditionalWrapper
            condition={Boolean(interventions[selectedPoi].url)}
            wrapper={(children) => (
              <a className="outline-none" href={interventions[selectedPoi].url}>
                {children}
              </a>
            )}
          >
            <div
              className={`w-full h-[171px] justify-end relative`}
              onMouseLeave={() => {
                if (selectedPoi !== null && !isMarkerClicked)
                  setSelectedPoi(null);
              }}
            >
              <img
                src={interventions[selectedPoi].image}
                alt="Interventions"
                className="h-[171px] w-full object-cover"
              />
              <div className="h-full w-full absolute top-0 bg-gradient-to-b from-transparent to-black opacity-80" />

              {interventions[selectedPoi].category === "blog" && (
                <ArrowIcon className="absolute top-4 right-4 z-10 text-white h-6 w-6" />
              )}

              <div className="absolute bottom-0 flex flex-col gap-1.5 p-4">
                <span className="text-sm leading-[14px] opacity-70">
                  {interventions[selectedPoi].date}
                </span>
                <h3 className="text-base font-semibold leading-4">
                  {interventions[selectedPoi].title}
                </h3>
              </div>
            </div>
          </ConditionalWrapper>
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
    </Map>
  );
};

export default InterventionMap;