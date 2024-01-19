import { jwtDecode } from "jwt-decode";
import type { INewsItem } from "@interfaces/INews";
import type { IInterventionPoi } from "@interfaces/IIntervention";
import fs from "node:fs";
import { createHash } from "node:crypto";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";

const AIRTABLE_BASE_URL = "https://api.airtable.com/v0/";

// Where to save images from Airtable
const NEWS_IMG_LOCATION = "./public/images/news/dynamic/";
const INTERVENTIONS_IMG_LOCATION = "./public/images/interventions/dynamic/";

// Where to store the hash of the fetched content (for caching purposes)
const NEWS_ITEMS_HASH_FILE = "./.newshash";
const INTERVENTIONS_HASH_FILE = "./.interventionshash";

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
  filename?: string;
  thumbnails?: {
    small?: { url?: string };
    medium?: { url?: string };
    large?: { url?: string };
  };
}

interface AirtableNewsRecord {
  id?: string;
  createdTime?: string;
  fields: {
    Name?: string;
    "Name UA"?: string;
    "Instagram URL"?: string;
    Status?: string;
    "Post date"?: string;
    "Media type"?: Array<string>;
    Images: Array<IImage>;
    "Selected Photos (from Event)"?: Array<IImage>;
    Type?: Array<string>;
  };
}

interface AirtableNewsResponse {
  records: Array<AirtableNewsRecord>;
  offset?: string;
}

interface AirtablePoiResponse {
  records: Array<AirtablePoiRecord>;
  offset?: string;
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
  let response;
  try {
    response = await fetch(AIRTABLE_BASE_URL + resource, {
      ...options,
      headers: {
        ...options?.headers,
        ...commonHeaders,
      },
    });
  } catch (e) {
    console.error("ERROR WHILE FETCH", AIRTABLE_BASE_URL + resource);
  }

  if (!response?.ok) {
    const text = await response?.text();
    console.error("Server returned Error: " + text);
    throw new Error("Server returned Error: " + text);
  }

  return response.json();
};

// Relevant API Doc: https://airtable.com/developers/web/api/list-records
// Helper tool for query building: https://codepen.io/airtable/pen/MeXqOg
export const getNewsItems = async (
  count?: number,
  baseUrl?: string,
  locale: string = "en"
) => {
  let combinedData: AirtableNewsRecord[] = [];
  let hasOffset;

  console.log(`Trying to get news items...`);

  const apiParameters = encodeURI(
    '&fields[]=Name&fields[]=Name+UA&fields[]=Media+type&fields[]=Images&fields[]=Selected+Photos+(from+Event)&fields[]=Instagram+URL&filterByFormula=AND({Instagram+URL},{Status}="live")&sort[0][field]=Post+date&sort[0][direction]=desc'
  );

  const { records, offset } = await fetchAndHandleErrors<AirtableNewsResponse>(
    airtableNewsBaseId + "?" + apiParameters
  );
  combinedData.push(...records);
  hasOffset = offset;

  while (hasOffset) {
    console.log("Triggering paginated fetch for news items");
    const nextPage: AirtableNewsResponse =
      await fetchAndHandleErrors<AirtableNewsResponse>(
        airtableNewsBaseId + "?" + apiParameters + "&offset=" + hasOffset
      );
    combinedData.push(...nextPage.records);
    hasOffset = nextPage.offset;
  }

  if (combinedData && combinedData.length > 0) {
    let oldHash;
    try {
      oldHash = fs.readFileSync(NEWS_ITEMS_HASH_FILE).toString();
    } catch (e) {
      console.log("Could not find existing file for News items image cache");
    }

    const newHash = createHash("md5")
      .update(JSON.stringify(combinedData.map((item) => item.id)))
      .digest("hex");

    const isCached = Boolean(oldHash) && oldHash === newHash;

    if (!isCached) {
      try {
        // fs.writeFileSync("./fetchNews.json", JSON.stringify(combinedData));
        fs.writeFileSync(NEWS_ITEMS_HASH_FILE, newHash);
        console.log("Wrote new News items image cache file");
      } catch (err) {
        console.error("Error while writing file", err);
      }
    }

    console.log(
      `Received ${combinedData.length} News items from AirTable. ${
        count ? "Displaying " + count + " items." : ""
      }`
    );

    const filtered = combinedData
      // DOING THIS VIA AIRTABLE API NOW
      // // has Instagram URL
      // ?.filter((record) => record.fields?.["Instagram URL"])
      // // has status "live"
      // .filter((record) => record.fields?.["Status"] === "live")
      // is of media type "photo"
      .filter((record) =>
        locale === "ua" ? record.fields?.["Name UA"] : record.fields?.["Name"]
      )
      .filter(
        (record) =>
          record.fields?.["Media type"]?.includes("photo") ||
          record.fields?.["Media type"]?.includes("video")
      )
      // has images
      .filter(
        (record) =>
          record.fields?.["Images"]?.length ||
          record.fields?.["Selected Photos (from Event)"]?.length
      )
      // .sort((a, b) => {
      //   const dateA = new Date(a?.fields?.["Post date"] || 0).getTime();
      //   const dateB = new Date(b?.fields?.["Post date"] || 0).getTime();
      //   return dateB - dateA;
      // })
      .map((record) => {
        return {
          id: record.id,
          description:
            locale === "ua"
              ? record.fields?.["Name UA"]
              : record.fields?.["Name"],
          target: record.fields?.["Instagram URL"],
          type: "instagram",
          newTab: true,
          imageFilename:
            record.fields?.["Images"]?.[0].filename ||
            record.fields?.["Selected Photos (from Event)"]?.[0].filename,
          image:
            record.fields?.["Images"]?.[0].thumbnails?.["large"]?.url ||
            record.fields?.["Selected Photos (from Event)"]?.[0].thumbnails?.[
              "large"
            ]?.url,
        } as INewsItem;
      });

    const trimmed = count ? filtered.slice(0, count) : filtered;

    const withLocalImages = await downloadNewsImages(
      trimmed,
      baseUrl,
      isCached
    );

    return withLocalImages;
  }
};

export const getMapPois = async (baseUrl?: string) => {
  let combinedData: AirtablePoiRecord[] = [];
  let hasOffset;

  console.log(`Trying to get Map POIs...`);

  const apiParameters = encodeURI(
    'fields[]=Short+description&fields[]=Start+Date&fields[]=End+Date&fields[]=Status&fields[]=Kind&fields[]=Public+Photos&fields[]=Geo+cash+(Event)&filterByFormula=AND({Short+description},{Status}="6+-+DONE",OR({Start+Date},{End+Date}),{Public+Photos})'
  );

  const { records, offset } = await fetchAndHandleErrors<AirtablePoiResponse>(
    airtableInterventionsBaseId + "?" + apiParameters
  );

  combinedData.push(...records);
  hasOffset = offset;

  while (hasOffset) {
    console.log(
      "Triggering paginated fetch for Interventions at offset ",
      hasOffset
    );
    const nextPage: AirtablePoiResponse =
      await fetchAndHandleErrors<AirtablePoiResponse>(
        airtableInterventionsBaseId +
          "?" +
          apiParameters +
          "&offset=" +
          hasOffset
      );
    combinedData.push(...nextPage.records);
    hasOffset = nextPage.offset;
  }

  if (combinedData && combinedData.length > 0) {
    let oldHash;
    try {
      oldHash = fs.readFileSync(INTERVENTIONS_HASH_FILE).toString();
    } catch (e) {
      console.log("Could not find existing file for Interventions image cache");
    }

    const newHash = createHash("md5")
      .update(JSON.stringify(combinedData.map((item) => item.id)))
      .digest("hex");

    const isCached = Boolean(oldHash) && oldHash === newHash;

    if (!isCached) {
      try {
        // fs.writeFileSync("./fetchPoi.json", JSON.stringify(combinedData));
        fs.writeFileSync(INTERVENTIONS_HASH_FILE, newHash);
        console.log("Wrote new Interventions image cache file");
      } catch (err) {
        console.error("Error while writing file", err);
      }
    }

    console.log(`Received ${combinedData.length} Interventions from AirTable.`);

    // Filter first, so we reduce the number of JWT decode operations
    const filtered = combinedData
      // ?.filter((poi) => poi.fields["Short description"])
      ?.filter((poi) => poi.fields["Start Date"] || poi.fields["End Date"])
      // ?.filter((poi) => poi.fields["Status"] === "6 - DONE")
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
            locationDecoded = jwtDecode<IDecodedJwt>(locationJwt, {
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

    console.log(
      `Got ${withLocationDecoded.length} interventions after filtering and decoding location`
    );

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
        id: poi.id,
        locationLngLat: poi.locationLngLat,
        title: poi.fields["Short description"],
        date: `${formattedStartDate}${oneDayEvent ? "" : " - "}${
          oneDayEvent ? "" : formattedEndDate
        }`,
        image: poi.fields["Public Photos"]?.[0].thumbnails?.large?.url,
        imageFilename: poi.fields["Public Photos"]?.[0].filename,
        category: poi.fields.Kind,
      } as IInterventionPoi;
    });

    const withLocalImages = await downloadInterventionsImages(
      transformed,
      baseUrl,
      isCached
    );

    return withLocalImages;
  }
};

const downloadFile = async (
  url: string,
  path: string,
  noop?: boolean
): Promise<string> => {
  if (noop) {
    // Don't download new files if they're cached, just return their path
    return Promise.resolve(path);
  } else {
    const writer = fs.createWriteStream(path);
    let response;
    try {
      response = await fetch(url);
    } catch (e) {
      console.error("Error downloading file", url);
      return "";
    }
    //@ts-expect-error
    const body = Readable.fromWeb(response?.body);
    return finished(body.pipe(writer)).then(() => path);
  }
};

export const downloadNewsImages = async (
  items: INewsItem[],
  baseUrl?: string,
  cached?: boolean
) => {
  console.log(
    cached
      ? `Using ${items.length} cached news item images`
      : `Downloading ${items.length} news images`
  );
  return Promise.all(
    items.map((item) => {
      const fileNameParts = item.imageFilename?.split(".");

      // Guess .jpg as the file type, if none is given
      const filetype =
        (fileNameParts?.length || 0) > 1 ? fileNameParts?.at(-1) : "jpg";

      const { imageFilename, ...rest } = item;

      return downloadFile(
        item.image,
        NEWS_IMG_LOCATION + item.id + "." + filetype,
        cached
      ).then((path) => ({
        ...rest,
        image: (baseUrl || "") + path.replace("./public", ""),
      }));
    })
  );
};

export const downloadInterventionsImages = async (
  interventions: IInterventionPoi[],
  baseUrl?: string,
  cached?: boolean
) => {
  console.log(
    cached
      ? `Using ${interventions.length} cached Intervention images`
      : `Downloading ${interventions.length} Interventions images`
  );
  return Promise.all(
    interventions.map((intervention) => {
      const fileNameParts = intervention.imageFilename?.split(".");

      // Guess .jpg as the file type, if none is given
      const filetype =
        (fileNameParts?.length || 0) > 1 ? fileNameParts?.at(-1) : "jpg";

      const { imageFilename, ...rest } = intervention;

      return downloadFile(
        intervention.image,
        INTERVENTIONS_IMG_LOCATION + intervention.id + "." + filetype,
        cached
      ).then((path) => ({
        ...rest,
        image: (baseUrl || "") + path.replace("./public", ""),
      }));
    })
  );
};
