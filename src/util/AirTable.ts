import fs from "node:fs";

const AIRTABLE_BASE_URL = "https://api.airtable.com/v0/";
const AIRTABLE_BASE_ID = "appy8mE1ZpLXfYzEQ/tblvfXTgnme0tqIQD";

const token = import.meta.env.PUBLIC_AIRTABLE_TOKEN;

const commonHeaders = {
  "content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

interface AirtableResponse {
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

  console.log(JSON.stringify(response));

  if (!response.ok) {
    const text = await response.text();
    console.error("Server returned Error: " + text);
    throw new Error("Server returned Error: " + text);
  }

  return response.json();
};

export const getNewsItems = async () => {
  const { records } = await fetchAndHandleErrors<AirtableResponse>(
    AIRTABLE_BASE_ID
  );

  if (records && records.length > 0) {
    try {
      fs.writeFileSync("./fetch.json", JSON.stringify(records));
      // file written successfully
    } catch (err) {
      console.error("Error while writing file", err);
    }
    return records;
  }
};
