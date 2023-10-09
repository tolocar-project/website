import fs from "node:fs";
import jwt_decode from "jwt-decode";

const AIRTABLE_BASE_URL = "https://api.airtable.com/v0/";

const airtableToken = import.meta.env.AIRTABLE_TOKEN;
const airtableNewsBaseId = import.meta.env.NEWS_AIRTABLE_BASE_ID;
const airtableInterventionsBaseId = import.meta.env
  .INTERVENTIONS_AIRTABLE_BASE_ID;

const commonHeaders = {
  "content-type": "application/json",
  Authorization: `Bearer ${airtableToken}`,
};

interface AirtableNewsResponse {
  records: Array<{
    id?: string;
    createdTime?: string;
    fields: {
      Name?: string;
      "Instagram URL"?: string;
      Status?: string;
      "Media type"?: Array<string>;
      "Selected Photos (from Event)"?: Array<{
        id?: string;
        url?: string;
        thumbnails?: {
          small?: { url?: string };
          medium?: { url?: string };
          large?: { url?: string };
        };
      }>;
      Type?: Array<string>;
    };
  }>;
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

export const getNewsItems = async () => {
  const { records } = await fetchAndHandleErrors<AirtableNewsResponse>(
    airtableNewsBaseId
  );

  if (records && records.length > 0) {
    try {
      fs.writeFileSync("./fetch.json", JSON.stringify(records));
    } catch (err) {
      console.error("Error while writing file", err);
    }
    return records;
  }
};

export const getMapPois = async () => {
  const { records } = await fetchAndHandleErrors<unknown>(
    airtableInterventionsBaseId
  );
  console.log("FETCHING POIS");

  if (records && records.length > 0) {
    try {
      fs.writeFileSync("./fetchPois.json", JSON.stringify(records));
    } catch (err) {
      console.error("Error while writing file", err);
    }

    const withLocation = records.map((record) => {
      const locationJwt = record?.fields?.["Geo cash (Event)"]?.slice(3);

      let locationDecoded;

      if (locationJwt) {
        console.log("JWT", locationJwt);
        try {
          locationDecoded = jwt_decode(locationJwt, { header: true });
        } catch (e) {
          console.log(e);
          console.log("Malformed:", locationJwt);
        }
        console.log("Decoded", locationDecoded);

        if (locationDecoded?.o?.lat && locationDecoded?.o?.lng) {
          return {
            ...record,
            location: {
              lat: locationDecoded?.o?.lat,
              lng: locationDecoded?.o?.lng,
            },
          };
        }
      }

      return record;
    });

    return withLocation;
  }
};
