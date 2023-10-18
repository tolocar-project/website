// import fs from "node:fs";
import jwt_decode from "jwt-decode";
import type { INewsItem } from "@interfaces/INews";
import type { IInterventionPoi } from "@interfaces/IIntervention";

const AIRTABLE_BASE_URL = "https://api.airtable.com/v0/";

const airtableToken = import.meta.env.AIRTABLE_TOKEN;
const airtableNewsBaseId = import.meta.env.NEWS_AIRTABLE_BASE_ID;
const airtableInterventionsBaseId = import.meta.env
  .INTERVENTIONS_AIRTABLE_BASE_ID;

const commonHeaders = {
  "content-type": "application/json",
  Authorization: `Bearer ${airtableToken}`,
};

interface IImage {
  id?: string;
  url?: string;
  thumbnails?: {
    small?: { url?: string };
    medium?: { url?: string };
    large?: { url?: string };
  };
}

interface AirtableNewsResponse {
  records: Array<{
    id?: string;
    createdTime?: string;
    fields: {
      Name?: string;
      "Instagram URL"?: string;
      Status?: string;
      "Post date"?: string;
      "Media type"?: Array<string>;
      Images: Array<IImage>;
      "Selected Photos (from Event)"?: Array<IImage>;
      Type?: Array<string>;
    };
  }>;
}

interface AirtablePoiResponse {
  records: Array<AirtablePoiRecord>;
}

interface AirtablePoiRecord {
  id?: string;
  createdTime?: string;
  fields: AirtablePoiFields;
  locationLngLat?: [number, number];
}

interface AirtablePoiFields {
  "Short description"?: string;
  "End Date"?: string;
  "Project or Intervention"?: string;
  "Impact reason"?: string;
  Kind?: string;
  "Start Date"?: string;
  "Geo cash (Event)"?: string;
  "Public Photos"?: Array<IImage>;
  Status?: string;
}

interface IDecodedJwt {
  i: string;
  o: {
    status: string;
    formattedAddress: string;
    lat: number;
    lng: number;
    blockInstallationIds: [string, string];
    locationFieldId: string;
  };
  e: number;
}

const fetchAndHandleErrors = async <T>(
  resource: RequestInfo,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(AIRTABLE_BASE_URL + resource, {
    ...options,
    headers: {
      ...options?.headers,
      ...commonHeaders,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Server returned Error: " + text);
    throw new Error("Server returned Error: " + text);
  }

  return response.json();
};

export const getNewsItems = async (count?: number) => {
  const { records } = await fetchAndHandleErrors<AirtableNewsResponse>(
    airtableNewsBaseId
  );

  if (records && records.length > 0) {
    // try {
    //   fs.writeFileSync("./fetch.json", JSON.stringify(records));
    // } catch (err) {
    //   console.error("Error while writing file", err);
    // }

    const filtered = records
      // has Instagram URL
      ?.filter((record) => record.fields?.["Instagram URL"])
      // has status "live"
      .filter((record) => record.fields?.["Status"] === "live")
      // is of media type "photo"
      .filter((record) => record.fields?.["Media type"]?.includes("photo"))
      // has images
      .filter(
        (record) =>
          record.fields?.["Images"]?.length ||
          record.fields?.["Selected Photos (from Event)"]?.length
      )
      .sort((a, b) => {
        const dateA = new Date(a?.fields?.["Post date"] || 0).getTime();
        const dateB = new Date(b?.fields?.["Post date"] || 0).getTime();
        return dateB - dateA;
      })
      .map((record) => {
        return {
          title: record.fields.Name,
          target: record.fields?.["Instagram URL"],
          instagram: true,
          image:
            record.fields?.["Images"]?.[0].thumbnails?.["large"]?.url ||
            record.fields?.["Selected Photos (from Event)"]?.[0].thumbnails?.[
              "large"
            ]?.url,
        } as INewsItem;
      });

    const trimmed = count ? filtered.slice(0, count) : filtered;

    return trimmed;
  }
};

export const getMapPois = async () => {
  const { records } = await fetchAndHandleErrors<AirtablePoiResponse>(
    airtableInterventionsBaseId
  );

  if (records && records.length > 0) {
    // Filter first, so we reduce the number of JWT decode operations
    const filtered = records
      ?.filter((poi) => poi.fields["Short description"])
      ?.filter((poi) => poi.fields["Start Date"] || poi.fields["End Date"])
      ?.filter((poi) => poi.fields["Status"] === "6 - DONE")
      ?.filter(
        (poi) =>
          poi.fields["Kind"] !== "Internal" && poi.fields["Kind"] !== "R&D"
      )
      ?.filter((poi) => poi.fields["Public Photos"]?.length);

    // Now decode the location
    const withLocationDecoded = filtered
      .map((record) => {
        // Cut off unnecessary Emoji at the front of the string
        const locationJwt = record?.fields?.["Geo cash (Event)"]?.slice(3);

        let locationDecoded;

        if (locationJwt) {
          try {
            locationDecoded = jwt_decode<IDecodedJwt>(locationJwt, {
              header: true,
            });
          } catch (e) {
            console.warn(
              "Could not decode malformed Location JWT from Airtable:",
              record?.fields?.["Geo cash (Event)"]
            );
          }

          if (locationDecoded?.o?.lat && locationDecoded?.o?.lng) {
            return {
              ...record,
              locationLngLat: [
                Number(locationDecoded.o.lng),
                Number(locationDecoded.o.lat),
              ],
            };
          } else {
            // If we have no location, we can't show a POI on the map
            return null;
          }
        }
      })
      .filter(Boolean) as AirtablePoiRecord[];

    // Now transform into the proper UI structure
    const transformed = withLocationDecoded.map((poi) => {
      const startDate =
        poi.fields["Start Date"] &&
        new Date(Date.parse(poi.fields["Start Date"]));
      const formattedStartDate =
        startDate &&
        new Intl.DateTimeFormat("en-GB", {
          year: "2-digit",
          month: "long",
          day: "numeric",
        }).format(startDate);

      const endDate =
        poi.fields["End Date"] && new Date(Date.parse(poi.fields["End Date"]));
      const formattedEndDate =
        endDate &&
        new Intl.DateTimeFormat("en-GB", {
          year: "2-digit",
          month: "long",
          day: "numeric",
        }).format(endDate);

      const oneDayEvent = !(
        startDate &&
        endDate &&
        endDate.getDate() - startDate.getDate()
      );

      return {
        locationLngLat: poi.locationLngLat,
        title: poi.fields["Short description"],
        date: `${formattedStartDate}${oneDayEvent ? "" : " - "}${
          oneDayEvent ? "" : formattedEndDate
        }`,
        image: poi.fields["Public Photos"]?.[0].thumbnails?.large?.url,
        category: poi.fields.Kind,
      } as IInterventionPoi;
    });

    return transformed;
  }
};
